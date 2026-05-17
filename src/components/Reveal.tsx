"use client";

import { useEffect, useRef, useState, ElementType } from "react";

type RevealProps = {
  as?: ElementType;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  rootMargin?: string;
  line?: boolean;
};

export function Reveal({ as: Tag = "div", children, className = "", style, delay = 0, rootMargin = "-10% 0px", line = false }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setSeen(true), delay);
          io.disconnect();
        }
      },
      { rootMargin, threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay, rootMargin, seen]);

  const baseClass = line ? "reveal-line" : "reveal";
  const finalClass = [baseClass, seen ? "in-view" : "", className].filter(Boolean).join(" ");

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={finalClass} style={style}>
      {children}
    </Tag>
  );
}
