"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import MagneticButton from "./MagneticButton";

gsap.registerPlugin(ScrollTrigger);

const YEARS_WORDS = ["Years", "of", "Legacy"];

const wordContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.7 },
  },
};

const wordItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      gsap.to(imageWrapRef.current, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      const counter = { value: 0 };
      gsap.to(counter, {
        value: 78,
        duration: 2.2,
        delay: 0.5,
        ease: "power2.out",
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = Math.round(counter.value).toString();
          }
        },
      });

      const quickX = gsap.quickTo(parallaxRef.current, "x", { duration: 0.9, ease: "power3.out" });
      const quickY = gsap.quickTo(parallaxRef.current, "y", { duration: 0.9, ease: "power3.out" });

      const onMove = (e: PointerEvent) => {
        const rect = sectionRef.current!.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;
        quickX(relX * -30);
        quickY(relY * -20);
      };
      sectionRef.current?.addEventListener("pointermove", onMove);
      return () => sectionRef.current?.removeEventListener("pointermove", onMove);
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden bg-ink"
    >
      <div ref={imageWrapRef} className="absolute inset-0 scale-110">
        <div ref={parallaxRef} className="absolute inset-0 scale-110">
          <motion.div
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src="/images/building.webp"
              alt="MUREC development"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-55"
            />
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />

      {[
        "left-6 top-6 border-l border-t sm:left-10 sm:top-28",
        "right-6 top-6 border-r border-t sm:right-10 sm:top-28",
        "left-6 bottom-6 border-l border-b sm:left-10 sm:bottom-10",
        "right-6 bottom-6 border-r border-b sm:right-10 sm:bottom-10",
      ].map((pos, i) => (
        <motion.span
          key={pos}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-none absolute z-10 h-10 w-10 border-gold/40 sm:h-14 sm:w-14 ${pos}`}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 text-[11px] font-medium uppercase tracking-widest2 text-gold-soft"
        >
          Madhusudan Urban Real Estate Collection
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4 }}
          className="text-display relative flex items-baseline text-[20vw] font-light leading-[0.9] text-porcelain sm:text-[12vw] md:text-[9rem]"
        >
          <span className="pointer-events-none absolute inset-0 -z-10 animate-pulse-glow rounded-full bg-gold/10 blur-3xl" />
          <span ref={counterRef}>0</span>
          <span className="text-gold">+</span>
        </motion.h1>

        <motion.p
          variants={wordContainer}
          initial="hidden"
          animate="show"
          className="mt-2 flex gap-[0.4em] text-display text-2xl font-light uppercase tracking-[0.35em] text-porcelain/90 sm:text-3xl"
        >
          {YEARS_WORDS.map((w) => (
            <motion.span key={w} variants={wordItem}>
              {w}
            </motion.span>
          ))}
        </motion.p>

        <MagneticButton
          href="#legacy"
          strength={0.5}
          className="group mt-14 flex flex-col items-center gap-3"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-[10px] font-medium uppercase tracking-widest2 text-porcelain/60 transition-colors group-hover:text-gold"
          >
            Learn More
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-porcelain/30 transition-all group-hover:border-gold group-hover:scale-110"
          >
            <span className="h-3 w-px animate-bounce bg-gold" />
          </motion.span>
        </MagneticButton>
      </div>
    </section>
  );
}
