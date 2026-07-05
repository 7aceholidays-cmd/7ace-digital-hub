import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;
    setEnabled(true);

    let x = 0, y = 0, rx = 0, ry = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x - 3}px, ${y - 3}px)`;
      }
    };
    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      }
      raf = requestAnimationFrame(loop);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const inter = t.closest("a, button, [role=button], input, textarea, [data-cursor='pointer']");
      ringRef.current?.classList.toggle("scale-150", !!inter);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[90] h-9 w-9 rounded-full border border-[var(--gold)] transition-[transform,scale] duration-200 ease-out mix-blend-difference"
        style={{ willChange: "transform" }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[91] h-1.5 w-1.5 rounded-full bg-[var(--gold)]"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
