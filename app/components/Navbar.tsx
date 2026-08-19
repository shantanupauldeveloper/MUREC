"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#legacy" },
  { label: "Our Legacy", href: "#principles" },
  { label: "The Collection", href: "#collection" },
  { label: "Careers", href: "#careers" },
  { label: "Media", href: "#partners" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ink/85 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#home" className="flex items-center gap-3">
          <Image src="/images/murec.png" alt="MUREC" width={110} height={58} className="h-10 w-auto md:h-12" priority />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[11px] font-medium uppercase tracking-widest2 text-porcelain/70 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full border border-gold/60 px-6 py-2.5 text-[11px] font-medium uppercase tracking-widest2 text-gold transition-all hover:bg-gold hover:text-ink lg:inline-block"
        >
          Explore
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className={`h-px w-6 bg-porcelain transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-porcelain transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-porcelain transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      <div
        className={`overflow-hidden bg-ink/98 backdrop-blur-md transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-96 border-b border-line" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 pb-8 pt-2">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-4 text-sm uppercase tracking-widest2 text-porcelain/80 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
