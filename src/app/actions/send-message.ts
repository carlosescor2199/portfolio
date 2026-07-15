"use server";

import { headers } from "next/headers";
import { Resend } from "resend";

export type SendMessageState =
  { ok: true } | { ok: false; error: string; values: { name: string; email: string; message: string } };

const NAME_MIN = 2;
const NAME_MAX = 100;
const MESSAGE_MIN = 10;
const MESSAGE_MAX = 3000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RATE_LIMIT_MAX_SENDS = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

const NOT_CONFIGURED_ERROR = "The contact form is not configured yet — email me directly.";
const RATE_LIMIT_ERROR = "You've sent a few messages already — please try again later, or email me directly.";
const SEND_FAILED_ERROR = "Something went wrong sending your message — please email me directly instead.";

// In-memory rate limit: best-effort only. Each serverless instance keeps its
// own map, and cold starts / instance recycling reset it, so this throttles
// casual abuse from a single warm instance rather than guaranteeing a hard cap.
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function purgeExpiredRateLimits(now: number): void {
  for (const [key, entry] of rateLimitStore) {
    if (now > entry.resetAt) {
      rateLimitStore.delete(key);
    }
  }
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  purgeExpiredRateLimits(now);
  const entry = rateLimitStore.get(ip);
  return entry !== undefined && entry.count >= RATE_LIMIT_MAX_SENDS;
}

// Counted only after a successful delivery, so transient provider failures
// don't burn the visitor's quota.
function recordSuccessfulSend(ip: string): void {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return;
  }
  entry.count += 1;
}

async function getClientIp(): Promise<string> {
  const headerList = await headers();
  const forwardedFor = headerList.get("x-forwarded-for");
  if (forwardedFor) {
    // Vercel overwrites this header with the real client IP. Reading the LAST
    // entry keeps the key honest even behind an additional appending proxy.
    const entries = forwardedFor.split(",");
    return entries[entries.length - 1]?.trim() || "unknown";
  }
  return headerList.get("x-real-ip") ?? "unknown";
}

// C0 control characters (incl. CR/LF) never belong in a name or email, and a
// mid-string CRLF would otherwise reach the mail subject unescaped. Newlines
// are preserved only for the message body.
function stripControlChars(value: string, keepNewlines = false): string {
  // eslint-disable-next-line no-control-regex -- matching control chars is this sanitizer's purpose
  const pattern = keepNewlines ? /[\u0000-\u0009\u000B-\u001F\u007F]/g : /[\u0000-\u001F\u007F]/g;
  return value.replace(pattern, "");
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function validate(name: string, email: string, message: string): string | null {
  if (name.length < NAME_MIN || name.length > NAME_MAX) {
    return `Name must be between ${NAME_MIN} and ${NAME_MAX} characters.`;
  }
  if (!EMAIL_PATTERN.test(email)) {
    return "Enter a valid email address.";
  }
  if (message.length < MESSAGE_MIN || message.length > MESSAGE_MAX) {
    return `Message must be between ${MESSAGE_MIN} and ${MESSAGE_MAX} characters.`;
  }
  return null;
}

function notificationEmailHtml(name: string, email: string, message: string): string {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  return `<!doctype html>
<html>
  <body style="margin:0;padding:32px;background-color:#0a0a0a;font-family:ui-monospace,'SFMono-Regular',monospace;color:#ededed;">
    <table role="presentation" width="100%" style="max-width:560px;margin:0 auto;border:1px solid #262a26;background-color:#131513;">
      <tr>
        <td style="padding:32px;">
          <p style="margin:0 0 20px;font-size:12px;letter-spacing:0.2em;text-transform:uppercase;color:#39e58c;">
            New message — carlosescudero.dev
          </p>
          <p style="margin:0 0 8px;font-size:14px;"><strong>Name:</strong> ${safeName}</p>
          <p style="margin:0 0 20px;font-size:14px;"><strong>Email:</strong> ${safeEmail}</p>
          <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#9a9f9a;">Message</p>
          <p style="margin:0;font-size:14px;line-height:1.6;white-space:pre-wrap;">${safeMessage}</p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function confirmationEmailHtml(name: string): string {
  const safeName = escapeHtml(name);

  return `<!doctype html>
<html>
  <body style="margin:0;padding:32px;background-color:#0a0a0a;font-family:ui-monospace,'SFMono-Regular',monospace;color:#ededed;">
    <table role="presentation" width="100%" style="max-width:560px;margin:0 auto;border:1px solid #262a26;background-color:#131513;">
      <tr>
        <td style="padding:32px;">
          <p style="margin:0 0 20px;font-size:12px;letter-spacing:0.2em;text-transform:uppercase;color:#39e58c;">
            Message received
          </p>
          <p style="margin:0 0 16px;font-size:14px;line-height:1.6;">Hi ${safeName},</p>
          <p style="margin:0 0 16px;font-size:14px;line-height:1.6;">
            Thanks for reaching out — I've received your message and will reply soon.
          </p>
          <p style="margin:24px 0 0;font-size:13px;line-height:1.6;color:#9a9f9a;">
            Carlos Escudero — Fullstack Software Engineer<br />
            <a href="https://carlosescudero.dev" style="color:#39e58c;text-decoration:none;">carlosescudero.dev</a>
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function sendMessage(_prevState: SendMessageState | null, formData: FormData): Promise<SendMessageState> {
  const name = stripControlChars(String(formData.get("name") ?? "")).trim();
  const email = stripControlChars(String(formData.get("email") ?? "")).trim();
  const message = stripControlChars(String(formData.get("message") ?? ""), true).trim();
  const honeypot = String(formData.get("company") ?? "").trim();

  // Bots that fill the hidden honeypot field get a silent fake success —
  // no email is sent, and they get no signal that they were caught.
  if (honeypot.length > 0) {
    return { ok: true };
  }

  // Echo the submitted values back on every failure so the form can re-fill
  // itself — React 19 resets uncontrolled fields after a form action runs.
  const values = { name, email, message };

  const validationError = validate(name, email, message);
  if (validationError) {
    return { ok: false, error: validationError, values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { ok: false, error: NOT_CONFIGURED_ERROR, values };
  }

  const ip = await getClientIp();
  if (isRateLimited(ip)) {
    return { ok: false, error: RATE_LIMIT_ERROR, values };
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || "carlos.escudero.corpas@gmail.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "Carlos Escudero <onboarding@resend.dev>";

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `[carlosescudero.dev] New message from ${name}`,
      html: notificationEmailHtml(name, email, message),
    });

    if (error) {
      return { ok: false, error: SEND_FAILED_ERROR, values };
    }
  } catch {
    return { ok: false, error: SEND_FAILED_ERROR, values };
  }

  recordSuccessfulSend(ip);

  // Best-effort confirmation to the visitor. Its failure must never fail the
  // request — the notification above already delivered the message.
  try {
    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "Got your message — Carlos Escudero",
      html: confirmationEmailHtml(name),
    });
  } catch {
    // Swallow: the primary notification already succeeded.
  }

  return { ok: true };
}
