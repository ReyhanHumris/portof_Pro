"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";
import { fadeDown, fadeLeft, fadeRight, fadeUp, scaleIn } from "@/lib/animations";

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none" | "scale";
  className?: string;
  as?: keyof typeof motion;
}

const variantMap: Record<string, Variants> = {
  up: fadeUp,
  down: fadeDown,
  left: fadeLeft,
  right: fadeRight,
  scale: scaleIn,
  none: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  },
};

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: Props) {
  const variants = variantMap[direction] ?? fadeUp;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
