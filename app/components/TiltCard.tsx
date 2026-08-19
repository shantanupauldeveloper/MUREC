"use client";

import { useEffect, useRef, type PointerEvent, type ReactNode } from "react";
import gsap from "gsap";

export default function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const quickX = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
  const quickY = useRef<ReturnType<typeof gsap.quickTo> | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.set(ref.current, { transformPerspective: 800 });
    quickX.current = gsap.quickTo(ref.current, "rotateY", { duration: 0.6, ease: "power3.out" });
    quickY.current = gsap.quickTo(ref.current, "rotateX", { duration: 0.6, ease: "power3.out" });
  }, []);

  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    quickX.current?.(px * 8);
    quickY.current?.(-py * 8);
  };

  const handleLeave = () => {
    quickX.current?.(0);
    quickY.current?.(0);
  };

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={className}
    >
      {children}
    </div>
  );
}
