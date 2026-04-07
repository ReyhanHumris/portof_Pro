import FadeIn from "./FadeIn";

export default function Skills() {
  const programAndFrameworks = [
    { icon: 'code', name: 'HTML5' },
    { icon: 'css', name: 'CSS3' },
    { icon: 'javascript', name: 'JS (ES6+)' },
    { icon: 'data_object', name: 'PHP' },
    { icon: 'local_fire_department', name: 'Laravel' },
    { icon: 'dns', name: 'Node.js' }
  ];

  const toolsAndLibraries = [
    { icon: 'database', name: 'MySQL' },
    { icon: 'dashboard', name: 'WordPress' },
    { icon: 'gite', name: 'Git' },
    { icon: 'layers', name: 'Tailwind CSS' }
  ];

  const renderGrid = (items: { icon: string; name: string }[]) => (
    <div className="grid grid-cols-2 gap-3">
      {items.map((skill, index) => (
        <FadeIn key={index} direction="up" delay={index * 0.05} className="bg-white/5 border border-white/10 p-4 md:p-5 flex flex-col items-center justify-center group hover:bg-white/10 hover:border-white/30 transition-all sharp-edge">
          <span className="material-symbols-outlined text-3xl md:text-4xl text-white mb-3 group-hover:scale-110 transition-transform">{skill.icon}</span>
          <span className="font-bold text-white tracking-tight text-center text-sm md:text-base">{skill.name}</span>
        </FadeIn>
      ))}
    </div>
  );

  return (
    <section id="skills" className="py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn direction="up">
          <div className="mb-12 md:mb-14 text-center md:text-left">
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-white tracking-tighter uppercase">
              Area Keahlian
            </h2>
            <p className="text-slate-500 mt-3 tracking-[0.16em] font-label text-xs md:text-sm">
              Komponen utama yang membentuk monolit
            </p>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          <div>
            <h3 className="font-label text-xs md:text-sm uppercase tracking-widest text-secondary mb-4 pl-2 border-l-4 border-white/20">
              Bahasa Pemrograman & Framework
            </h3>
            {renderGrid(programAndFrameworks)}
          </div>
          
          <div>
            <h3 className="font-label text-xs md:text-sm uppercase tracking-widest text-secondary mb-4 pl-2 border-l-4 border-white/20">
              Library & Tools
            </h3>
            {renderGrid(toolsAndLibraries)}
          </div>
        </div>
      </div>
    </section>
  );
}
