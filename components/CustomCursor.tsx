"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

const INTERACTIVE =
  "a, button, [role='button'], input, textarea, label, select, summary, .btn-primary, .btn-secondary, .card-modern";

const PAD = 10;
const CORNER = 14;

function getHoverTarget(node: EventTarget | null): HTMLElement | null {
  if (!(node instanceof HTMLElement)) return null;
  const el = node.closest(INTERACTIVE);
  return el instanceof HTMLElement ? el : null;
}

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hasTarget, setHasTarget] = useState(false);
  const hoverRef = useRef<HTMLElement | null>(null);

  const cursorX = useSpring(0, { stiffness: 500, damping: 38, mass: 0.5 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 38, mass: 0.5 });

  const boxTop = useSpring(0, { stiffness: 380, damping: 32 });
  const boxLeft = useSpring(0, { stiffness: 380, damping: 32 });
  const boxWidth = useSpring(0, { stiffness: 380, damping: 32 });
  const boxHeight = useSpring(0, { stiffness: 380, damping: 32 });
  const boxOpacity = useSpring(0, { stiffness: 300, damping: 28 });

  const applyBox = (el: HTMLElement | null) => {
    if (!el) {
      hoverRef.current = null;
      setHasTarget(false);
      boxOpacity.set(0);
      return;
    }

    const r = el.getBoundingClientRect();
    hoverRef.current = el;
    setHasTarget(true);
    boxTop.set(r.top - PAD);
    boxLeft.set(r.left - PAD);
    boxWidth.set(r.width + PAD * 2);
    boxHeight.set(r.height + PAD * 2);
    boxOpacity.set(1);
  };

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    document.documentElement.classList.add("custom-cursor-active");
    setVisible(true);

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      applyBox(getHoverTarget(e.target));
    };

    const refreshBox = () => {
      if (hoverRef.current) applyBox(hoverRef.current);
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", onOver);
    window.addEventListener("scroll", refreshBox, true);
    window.addEventListener("resize", refreshBox);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onOver);
      window.removeEventListener("scroll", refreshBox, true);
      window.removeEventListener("resize", refreshBox);
    };
  }, [cursorX, cursorY, boxTop, boxLeft, boxWidth, boxHeight, boxOpacity]);

  if (!visible) return null;

  return (
    <>
      {/* Sudut-sudut di sekitar elemen yang disentuh */}
      <motion.div
        className="fixed top-0 left-0 z-[9996] pointer-events-none"
        style={{
          x: boxLeft,
          y: boxTop,
          width: boxWidth,
          height: boxHeight,
          opacity: boxOpacity,
        }}
      >
        <span
          className="absolute top-0 left-0 border-white"
          style={{
            width: CORNER,
            height: CORNER,
            borderTopWidth: 2,
            borderLeftWidth: 2,
          }}
        />
        <span
          className="absolute top-0 right-0 border-white"
          style={{
            width: CORNER,
            height: CORNER,
            borderTopWidth: 2,
            borderRightWidth: 2,
          }}
        />
        <span
          className="absolute bottom-0 left-0 border-white"
          style={{
            width: CORNER,
            height: CORNER,
            borderBottomWidth: 2,
            borderLeftWidth: 2,
          }}
        />
        <span
          className="absolute bottom-0 right-0 border-white"
          style={{
            width: CORNER,
            height: CORNER,
            borderBottomWidth: 2,
            borderRightWidth: 2,
          }}
        />
      </motion.div>

      {/* Kursor titik */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ x: cursorX, y: cursorY }}
      >
        <motion.div
          animate={{
            width: hasTarget ? 6 : 8,
            height: hasTarget ? 6 : 8,
            x: hasTarget ? -3 : -4,
            y: hasTarget ? -3 : -4,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          className="rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.5)]"
        />
      </motion.div>

      {/* Ring halus saat tidak hover */}
      <motion.div
        className="fixed top-0 left-0 z-[9997] pointer-events-none"
        style={{ x: cursorX, y: cursorY }}
      >
        <motion.div
          animate={{
            width: hasTarget ? 0 : 28,
            height: hasTarget ? 0 : 28,
            x: hasTarget ? 0 : -14,
            y: hasTarget ? 0 : -14,
            opacity: hasTarget ? 0 : 0.3,
          }}
          transition={{ duration: 0.2 }}
          className="rounded-full border border-white/50"
        />
      </motion.div>
    </>
  );
}
