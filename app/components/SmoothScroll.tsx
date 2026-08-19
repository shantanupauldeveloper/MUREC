"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const smoother = ScrollSmoother.create({
          wrapper: wrapperRef.current!,
          content: wrapperRef.current!.firstElementChild as HTMLElement,
          smooth: 1.3,
          effects: true,
          normalizeScroll: true,
        });

        const onClick = (e: MouseEvent) => {
          const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
          if (!anchor) return;
          const id = anchor.getAttribute("href");
          if (!id || id === "#" || !document.querySelector(id)) return;
          e.preventDefault();
          smoother.scrollTo(id, true, "top top");
        };
        document.addEventListener("click", onClick);

        return () => {
          document.removeEventListener("click", onClick);
          smoother.kill();
        };
      });

      return () => mm.revert();
    },
    { scope: wrapperRef }
  );

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content">{children}</div>
    </div>
  );
}
