"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Reveal from "./Reveal";
import SplitHeading from "./SplitHeading";

gsap.registerPlugin(ScrollTrigger);

export default function Legacy() {
  const frameRef = useRef<HTMLDivElement>(null);
  const wipeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        wipeRef.current,
        { scaleX: 1 },
        {
          scaleX: 0,
          duration: 1.1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: frameRef.current,
            start: "top 80%",
          },
        }
      );
    },
    { scope: frameRef }
  );

  return (
    <section id="legacy" className="relative bg-ink py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:px-10">
        <div ref={frameRef} className="relative aspect-[4/3] overflow-hidden rounded-sm">
          <Image
            src="/images/madhusudan.png"
            alt="Madhusudan legacy"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-contain bg-ink-2"
          />
          <div
            ref={wipeRef}
            className="absolute inset-0 origin-right bg-ink-2"
          />
        </div>

        <Reveal delay={0.15}>
          <p className="text-[11px] font-medium uppercase tracking-widest2 text-gold">The Legacy</p>
          <SplitHeading className="text-display mt-4 text-4xl font-light leading-tight text-porcelain sm:text-5xl">
            Beyond Compare
          </SplitHeading>
          <div className="mt-8 h-px w-16 bg-gold/60" />
          <p className="mt-8 max-w-md text-base font-light leading-8 text-porcelain/65">
            For over seven decades, we stood for perseverance, integrity, and
            nation-building through enterprise. Every step was guided by one
            oath: quality before profit, trust before everything.
          </p>
          <a
            href="#partners"
            className="mt-10 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-widest2 text-porcelain/80 transition-colors hover:text-gold"
          >
            Our History
            <span className="h-px w-8 bg-current transition-all" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
