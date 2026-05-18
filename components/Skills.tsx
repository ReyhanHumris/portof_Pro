"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import StaggerContainer from "./StaggerContainer";
import { scaleIn } from "@/lib/animations";

export default function Skills() {
  const programAndFrameworks = [
    { icon: "code", name: "HTML" },
    { icon: "css", name: "CSS" },
    { icon: "javascript", name: "JavaScript" },
    { icon: "data_object", name: "PHP" },
    { icon: "local_fire_department", name: "Laravel" },
    { icon: "dns", name: "Node.js" },
  ];

  const toolsAndLibraries = [
    { icon: "database", name: "MySQL" },
    { icon: "dashboard", name: "WordPress" },
    { icon: "gite", name: "Git" },
    { icon: "layers", name: "Tailwind CSS" },
  ];

  const renderGrid = (items: typeof programAndFrameworks) => (
    <StaggerContainer className="grid grid-cols-2 gap-3" stagger={0.06}>
      {items.map((skill) => (
        <motion.div
          key={skill.name}
          variants={scaleIn}
          whileHover={{ y: -4 }}
          className="card-modern p-5 md:p-6 flex flex-col items-start group"
        >
          <span className="material-symbols-outlined text-2xl md:text-3xl text-secondary mb-3 group-hover:scale-110 transition-transform">
            {skill.icon}
          </span>
          <span className="font-semibold text-white text-sm md:text-base">{skill.name}</span>
        </motion.div>
      ))}
    </StaggerContainer>
  );

  return (
    <section id="skills" className="section-padding overflow-hidden relative">
      <motion.div className="container-site relative z-10">
        <SectionHeader
          label="Keahlian"
          title="Tech Stack"
          subtitle="Teknologi yang saya gunakan untuk membangun produk digital"
        />

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
              Bahasa & Framework
            </h3>
            {renderGrid(programAndFrameworks)}
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
              Tools & Database
            </h3>
            {renderGrid(toolsAndLibraries)}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
