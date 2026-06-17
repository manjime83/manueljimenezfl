"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { SLIDE_SIZE } from "./data";

export function ScaledSlide({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / SLIDE_SIZE);
    update();
    const obs = new ResizeObserver(update);
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "1 / 1",
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      <div
        style={{
          width: SLIDE_SIZE,
          height: SLIDE_SIZE,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          visibility: scale === 0 ? "hidden" : "visible",
        }}
      >
        {children}
      </div>
    </div>
  );
}
