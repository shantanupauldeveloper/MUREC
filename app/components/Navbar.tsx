"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import MagneticButton from "./MagneticButton";

gsap.registerPlugin(ScrollTrigger);

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
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useGSAP(() => {
    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        start: "top top",
        end: "max",
        scrub: 0.3,
      },
    });
  }, []);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ink/85 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#home" className="group flex items-center gap-3">
          <Image
            src="/images/murec.png"
            alt="MUREC"
            width={110}
            height={58}
            className="h-10 w-auto transition-transform duration-500 ease-out group-hover:scale-105 group-hover:rotate-3 md:h-12"
            priority
          />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="group relative text-[11px] font-medium uppercase tracking-widest2 text-porcelain/70 transition-colors hover:text-gold"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <MagneticButton
          href="#contact"
          strength={0.4}
          className="hidden rounded-full border border-gold/60 px-6 py-2.5 text-[11px] font-medium uppercase tracking-widest2 text-gold transition-colors hover:bg-gold hover:text-ink lg:inline-block"
        >
          Explore
        </MagneticButton>

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
          {LINKS.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                transitionDelay: open ? `${i * 40}ms` : "0ms",
              }}
              className={`border-b border-line py-4 text-sm uppercase tracking-widest2 text-porcelain/80 transition-all duration-300 hover:text-gold ${
                open ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="h-[2px] w-full bg-line/60">
        <div ref={progressRef} className="h-full w-full origin-left scale-x-0 bg-gold" />
      </div>
    </motion.header>
  );
}
