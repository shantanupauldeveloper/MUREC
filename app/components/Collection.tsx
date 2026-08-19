"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Reveal from "./Reveal";
import SplitHeading from "./SplitHeading";

gsap.registerPlugin(ScrollTrigger);

export default function Collection() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        imageRef.current,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    },
    { scope: bannerRef }
  );

  return (
    <section id="collection" className="relative bg-ink py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-widest2 text-gold">The Murec Collection</p>
          <SplitHeading className="text-display mt-4 text-4xl font-light leading-tight text-porcelain sm:text-5xl">
            A Portfolio Shaped by Legacy
          </SplitHeading>
          <p className="mx-auto mt-8 max-w-lg text-base font-light leading-8 text-porcelain/65">
            Guided by vision, the MUREC Collection is where every project
            reflects our way of building.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="relative mt-16 aspect-[16/9] w-full overflow-hidden rounded-sm md:mt-20">
          <div ref={bannerRef} className="absolute inset-0 overflow-hidden">
            <div ref={imageRef} className="absolute inset-0 -top-[8%] -bottom-[8%]">
              <Image
                src="/images/bjaja.webp"
                alt="MUREC Collection development"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          <a
            href="#partners"
            className="absolute bottom-8 left-8 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-widest2 text-porcelain transition-colors hover:text-gold md:bottom-10 md:left-10"
          >
            Discover More
            <span className="h-px w-8 bg-current" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
