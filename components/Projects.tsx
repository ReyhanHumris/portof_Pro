"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import StaggerContainer from "./StaggerContainer";
import { scaleIn } from "@/lib/animations";

export default function Projects() {
  const projects = [
    {
      title: "Dasbor Terintegrasi",
      desc: "Sistem pemantauan kinerja tinggi untuk data logistik real-time dengan visualisasi interaktif.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9yTuWiHO2sKEFWrnsI7Zi06RxrEM2hy-4qHcuAIz4wX-01fr_CRfTggD29o1b4IjbhHIqEoNjziV7xq5omD5mtM-cjr-6oHi2N78yvYw6Zo1Toe7BKyO8yALcfM0Xq6FL2bq324kmmjb489s-FBje82sb9EsH0dEnQWnWbNd1fq8U9oG71kP9jHsbGyrzXshAy1vr4_MeDedNuuGO_djyz8tQQPC77g2fXY7hEsXF4E6UTQsvHLG5w-_VCYoF-PjMzBdrQxepCqo",
      tags: ["Next.js", "Redis"],
    },
    {
      title: "Mesin E-commerce",
      desc: "Solusi commerce headless dengan pemfilteran produk latensi rendah dan integrasi pembayaran.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDisnJAs1aJ9EsT-FJZZFUFID_7zP_-J8eX3H6Xm7JNouRn5EEL0aogrvMC9jpxBoKlo_ZeYcp_LbpsbAx4iUVave5OG3VsNIXvcpWBBpReMA6ZLs8-3epOQp9lzIY8fHkS86zmCcfKMd4v17hO2WKJuJ-QkAGgLLGlV_qqMgjHcIf1YUP9q7AQgiXvRZh-mC-VlwyuyTonXBUH5lBg89EFjtD6iHpr-sHklbVv_N82927veXeUbuMNl8luXP8E5PnE5cMeDmI4Nk8",
      tags: ["Node.js", "Stripe"],
    },
    {
      title: "Portal Infrastruktur",
      desc: "Dasbor DevOps internal untuk otomasi deployment dan monitoring sumber daya cloud.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4devswQd5zICHcZymMVsU9tjfSzgj8ZMWDR6CgDG6x3GQMR9TKux60t_w6XmzNeodsJYhxsKY0Crg3MBBPE7fMPvEUI3n-kxG3TO91j2VbyG6-jFR2vDb2DVpyUyjvrWRr0VLgM5CcxpKvBCqgHEYwteS1HnVtcg8-gST0_Y7kPy3WrXlgCnOYYEIDnEcKvPDmJeHY7NLHaUWJv_QbqsvjzEAmGAJzaexzXlQXXaxQPreY6klZpDDn7OZ_UFZu9YJlTUmeNhoQxQ",
      tags: ["Docker", "Go"],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-surface-container-lowest overflow-hidden relative">
      <motion.div className="container-site relative z-10">
        <SectionHeader
          label="Proyek"
          title="Karya Terpilih"
          subtitle="Beberapa proyek yang menunjukkan pendekatan saya dalam membangun sistem web"
        />

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.1}>
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={scaleIn}
              whileHover={{ y: -6 }}
              className="card-modern overflow-hidden flex flex-col group"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <motion.img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4 flex-1">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-300 rounded-full bg-white/[0.06] border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </StaggerContainer>
      </motion.div>
    </section>
  );
}
