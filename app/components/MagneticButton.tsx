"use client";

import { useEffect, useRef, type AnchorHTMLAttributes, type PointerEvent } from "react";
import gsap from "gsap";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  strength?: number;
};

export default function MagneticButton({ children, className, strength = 0.35, ...rest }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const quickX = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
  const quickY = useRef<ReturnType<typeof gsap.quickTo> | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    quickX.current = gsap.quickTo(ref.current, "x", { duration: 0.5, ease: "power3.out" });
    quickY.current = gsap.quickTo(ref.current, "y", { duration: 0.5, ease: "power3.out" });
  }, []);

  const handleMove = (e: PointerEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    quickX.current?.(relX * strength);
    quickY.current?.(relY * strength);
  };

  const handleLeave = () => {
    quickX.current?.(0);
    quickY.current?.(0);
  };

  return (
    <a
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={className}
      {...rest}
    >
      {children}
    </a>
  );
}
