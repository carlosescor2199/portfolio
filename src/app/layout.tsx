import type { Metadata } from "next";
import { Big_Shoulders, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/cn";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const bigShouldersDisplay = Big_Shoulders({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-big-shoulders",
  // Next's font-metrics DB has no entry for the consolidated "Big Shoulders"
  // variable family, so it can't auto-generate a CLS-adjusted fallback.
  // Opt out explicitly and approximate with condensed system faces.
  adjustFontFallback: false,
  fallback: ["Arial Narrow", "Arial", "sans-serif"],
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
});

const siteUrl = "https://carlosescudero.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Carlos Escudero",
  description: "Fullstack Software Engineer · AI Integration & Secure Development",
  openGraph: {
    title: "Carlos Escudero",
    description: "Fullstack Software Engineer · AI Integration & Secure Development",
    url: siteUrl,
    siteName: "Carlos Escudero",
    images: [{ url: "/media/og.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Escudero",
    description: "Fullstack Software Engineer · AI Integration & Secure Development",
    images: ["/media/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(bigShouldersDisplay.variable, plexSans.variable, jetBrainsMono.variable)}>
      <body className={cn("flex min-h-screen flex-col bg-background text-foreground")}>
        <SpeedInsights />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
