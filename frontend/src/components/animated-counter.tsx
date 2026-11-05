"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  decimals?: number;
  target: number;
};

export function AnimatedCounter({ target, decimals = 0 }: AnimatedCounterProps) {
  const [value, setValue] = useState(target);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        setValue(0);
        const draw = (now: number) => {
          const progress = Math.min((now - start) / 2000, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(target * eased);
          if (progress < 1) frame = requestAnimationFrame(draw);
        };
        frame = requestAnimationFrame(draw);
      },
      { threshold: 0.35 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target]);

  const rendered = decimals
    ? value.toFixed(decimals)
    : Math.round(value).toLocaleString("en-US");

  return <span ref={ref}>{rendered}</span>;
}
