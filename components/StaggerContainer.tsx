"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { staggerContainer } from "@/lib/animations";

interface Props {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
}

export default function StaggerContainer({
  children,
  className = "",
  stagger = 0.1,
  delayChildren = 0.06,
}: Props) {
  return (
    <motion.div
      variants={staggerContainer(stagger, delayChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
