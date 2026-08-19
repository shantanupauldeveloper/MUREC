"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
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
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink" />

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
          className="text-display flex items-baseline text-[20vw] font-light leading-[0.9] text-porcelain sm:text-[12vw] md:text-[9rem]"
        >
          <span ref={counterRef}>0</span>
          <span className="text-gold">+</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-2 text-display text-2xl font-light uppercase tracking-[0.35em] text-porcelain/90 sm:text-3xl"
        >
          Years of Legacy
        </motion.p>

        <motion.a
          href="#legacy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="group mt-14 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] font-medium uppercase tracking-widest2 text-porcelain/60 group-hover:text-gold transition-colors">
            Learn More
          </span>
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-porcelain/30 transition-all group-hover:border-gold group-hover:scale-110">
            <span className="h-3 w-px animate-bounce bg-gold" />
          </span>
        </motion.a>
      </div>
    </section>
  );
}
