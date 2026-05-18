"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <motion.div
      variants={staggerContainer(0.12, 0.05)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`mb-12 md:mb-16 ${centered ? "text-center" : "text-center md:text-left"} ${className}`}
    >
      <motion.div variants={fadeUp} className={centered ? "flex justify-center" : ""}>
        <span className="badge-label">{label}</span>
      </motion.div>
      <motion.h2
        variants={fadeUp}
        className="font-headline text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-5 leading-[1.1]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={`text-on-surface-variant text-base md:text-lg mt-4 max-w-2xl leading-relaxed ${
            centered ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
