"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "../common";

const LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-16">
        <a href="#top" aria-label="Back to top" className="text-foreground">
          <Logo className="h-9 w-9 fill-foreground" />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 sm:flex">
          {LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-xs tracking-[0.2em] text-foreground/80 uppercase transition-colors hover:text-circuit"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="inline-flex items-center justify-center p-2 text-foreground sm:hidden"
        >
          <span className="sr-only">{open ? "Close main menu" : "Open main menu"}</span>
          {open ? <X aria-hidden="true" className="h-6 w-6" /> : <Menu aria-hidden="true" className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Primary" className="border-t border-line bg-background sm:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 font-mono text-sm tracking-[0.15em] text-foreground uppercase"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
