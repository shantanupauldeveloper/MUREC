"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Preloader() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useGSAP(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDone(true);
      return;
    }

    document.documentElement.style.overflow = "hidden";
    const counter = { value: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        document.documentElement.style.overflow = "";
        setDone(true);
      },
    });

    tl.to(counter, {
      value: 100,
      duration: 1.6,
      ease: "power2.inOut",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = Math.round(counter.value).toString();
        }
      },
    })
      .to(barRef.current, { scaleX: 1, duration: 1.6, ease: "power2.inOut" }, "<")
      .to(overlayRef.current, { yPercent: -100, duration: 0.9, ease: "power4.inOut" }, "+=0.15");
  }, []);

  if (done) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
    >
      <p className="text-display text-xl font-light uppercase tracking-[0.4em] text-porcelain sm:text-2xl">
        MUREC
      </p>
      <div className="mt-8 h-px w-40 overflow-hidden bg-line">
        <div ref={barRef} className="h-full w-full origin-left scale-x-0 bg-gold" />
      </div>
      <p className="mt-4 text-xs tracking-widest2 text-porcelain/50">
        <span ref={counterRef}>0</span>%
      </p>
    </div>
  );
}
