"use client";

import { useActionState } from "react";
import { sendMessage, type SendMessageState } from "@/app/actions/send-message";

const initialState: SendMessageState | null = null;

const fieldClassName =
  "border border-line bg-transparent px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-circuit";
const labelClassName = "font-mono text-xs tracking-[0.3em] text-muted uppercase";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendMessage, initialState);

  if (state?.ok) {
    return (
      <div aria-live="polite" className="flex flex-col gap-3">
        <p className="font-mono text-xs tracking-[0.3em] text-circuit uppercase">Ack / 200</p>
        <p className="text-foreground/90">Message received — a confirmation is on its way to your inbox.</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="relative flex flex-col gap-6" aria-live="polite">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className={labelClassName}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          minLength={2}
          maxLength={100}
          autoComplete="name"
          defaultValue={state?.values.name}
          className={fieldClassName}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className={labelClassName}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          defaultValue={state?.values.email}
          className={fieldClassName}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={labelClassName}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={3000}
          rows={6}
          defaultValue={state?.values.message}
          className={`${fieldClassName} resize-none`}
        />
      </div>

      {/* Honeypot: invisible to sighted and keyboard users, still form-submittable for bots. */}
      <div className="pointer-events-none absolute -z-10 opacity-0" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {state ? (
        <p className="text-sm text-red-400">
          {state.error}{" "}
          <a href="mailto:carlos.escudero.corpas@gmail.com" className="underline hover:text-circuit">
            Email me directly
          </a>
          .
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex items-center justify-center gap-2 bg-foreground px-6 py-3 font-mono text-xs tracking-widest text-background uppercase transition-colors hover:bg-circuit disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Transmitting…" : "Send message"}
      </button>
    </form>
  );
}
