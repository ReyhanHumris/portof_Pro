"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const cursorX = useSpring(0, { stiffness: 500, damping: 38, mass: 0.5 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 38, mass: 0.5 });

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
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [role='button'], input, textarea, label"));
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", onOver);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onOver);
    };
  }, [cursorX, cursorY]);

  if (!visible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none mix-blend-difference"
        style={{ x: cursorX, y: cursorY }}
      >
        <motion.div
          animate={{
            width: hovering ? 36 : 8,
            height: hovering ? 36 : 8,
            x: hovering ? -18 : -4,
            y: hovering ? -18 : -4,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
          className="rounded-full border border-white bg-white"
        />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 z-[9997] pointer-events-none"
        style={{ x: cursorX, y: cursorY }}
      >
        <motion.div
          animate={{
            width: hovering ? 0 : 28,
            height: hovering ? 0 : 28,
            x: hovering ? 0 : -14,
            y: hovering ? 0 : -14,
            opacity: hovering ? 0 : 0.35,
          }}
          transition={{ duration: 0.2 }}
          className="rounded-full border border-white/40"
        />
      </motion.div>
    </>
  );
}
