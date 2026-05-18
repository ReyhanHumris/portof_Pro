"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import StaggerContainer from "./StaggerContainer";
import { scaleIn } from "@/lib/animations";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Penemuan",
      desc: "Analisis kebutuhan, kelayakan teknis, dan perencanaan arsitektur.",
    },
    {
      num: "02",
      title: "Desain",
      desc: "UI/UX yang jelas dan efisien sebelum development dimulai.",
    },
    {
      num: "03",
      title: "Pengembangan",
      desc: "Implementasi iteratif dengan kode yang bersih dan teruji.",
    },
    {
      num: "04",
      title: "Peluncuran",
      desc: "Testing, optimasi performa, dan serah terima produk.",
    },
  ];

  return (
    <section className="section-padding border-y border-white/[0.06] overflow-hidden relative">
      <motion.div className="container-site relative z-10">
        <SectionHeader
          label="Proses"
          title="Cara Kerja"
          subtitle="Alur terstruktur dari ide hingga produk siap pakai"
          align="center"
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" stagger={0.1}>
          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={scaleIn}
              whileHover={{ y: -4 }}
              className="card-modern p-7 md:p-8 relative"
            >
              <span className="text-4xl font-black text-white/10 absolute top-4 right-4">
                {step.num}
              </span>
              <h4 className="text-lg font-bold text-white mb-2 relative z-10">{step.title}</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed relative z-10">{step.desc}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </motion.div>
    </section>
  );
}
