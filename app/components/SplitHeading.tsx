"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function SplitHeading({
  as: Tag = "h2",
  className,
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      let split: SplitText | undefined;
      document.fonts.ready.then(() => {
        if (!ref.current) return;
        split = SplitText.create(ref.current, {
          type: "lines",
          mask: "lines",
          linesClass: "split-line",
        });
        gsap.from(split.lines, {
          yPercent: 110,
          opacity: 0,
          duration: 1,
          stagger: 0.08,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 88%",
          },
        });
      });

      return () => split?.revert();
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
