import FadeIn from "./FadeIn";

export default function Projects() {
  const projects = [
    {
      title: "Dasbor Terintegrasi",
      desc: "Sistem pemantauan kinerja tinggi untuk data logistik real-time, menampilkan visualisasi WebGL khusus.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9yTuWiHO2sKEFWrnsI7Zi06RxrEM2hy-4qHcuAIz4wX-01fr_CRfTggD29o1b4IjbhHIqEoNjziV7xq5omD5mtM-cjr-6oHi2N78yvYw6Zo1Toe7BKyO8yALcfM0Xq6FL2bq324kmmjb489s-FBje82sb9EsH0dEnQWnWbNd1fq8U9oG71kP9jHsbGyrzXshAy1vr4_MeDedNuuGO_djyz8tQQPC77g2fXY7hEsXF4E6UTQsvHLG5w-_VCYoF-PjMzBdrQxepCqo",
      tags: ["Next.js", "Redis"]
    },
    {
      title: "Mesin E-commerce",
      desc: "Solusi commerce headless dengan pemfilteran produk latensi ultra-rendah dan otomatisasi Stripe terintegrasi.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDisnJAs1aJ9EsT-FJZZFUFID_7zP_-J8eX3H6Xm7JNouRn5EEL0aogrvMC9jpxBoKlo_ZeYcp_LbpsbAx4iUVave5OG3VsNIXvcpWBBpReMA6ZLs8-3epOQp9lzIY8fHkS86zmCcfKMd4v17hO2WKJuJ-QkAGgLLGlV_qqMgjHcIf1YUP9q7AQgiXvRZh-mC-VlwyuyTonXBUH5lBg89EFjtD6iHpr-sHklbVv_N82927veXeUbuMNl8luXP8E5PnE5cMeDmI4Nk8",
      tags: ["Node.js", "Stripe"]
    },
    {
      title: "Portal Infrastruktur",
      desc: "Dasbor DevOps internal untuk mengotomatiskan penerapan AWS dan memantau efisiensi sumber daya.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4devswQd5zICHcZymMVsU9tjfSzgj8ZMWDR6CgDG6x3GQMR9TKux60t_w6XmzNeodsJYhxsKY0Crg3MBBPE7fMPvEUI3n-kxG3TO91j2VbyG6-jFR2vDb2DVpyUyjvrWRr0VLgM5CcxpKvBCqgHEYwteS1HnVtcg8-gST0_Y7kPy3WrXlgCnOYYEIDnEcKvPDmJeHY7NLHaUWJv_QbqsvjzEAmGAJzaexzXlQXXaxQPreY6klZpDDn7OZ_UFZu9YJlTUmeNhoQxQ",
      tags: ["Docker", "Go"]
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-24 bg-surface-container-lowest">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-14 gap-6">
            <div className="max-w-xl">
              <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
                Studi Kasus Struktural
              </h2>
              <p className="text-on-surface-variant text-sm md:text-base">
                Kumpulan aplikasi end-to-end yang dirancang untuk skala, performa, dan stabilitas industri.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-32 h-px bg-white/20"></div>
            </div>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <FadeIn key={index} direction="up" delay={index * 0.1} className="flex flex-col group">
              <div className="relative overflow-hidden mb-4 aspect-video bg-surface-container-high">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 sharp-edge"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60"></div>
              </div>
              <div className="px-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-surface-container-highest text-[10px] font-bold uppercase tracking-wider text-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
