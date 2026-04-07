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
    <div className="grid grid-cols-2 gap-4">
      {items.map((skill, index) => (
        <FadeIn key={index} direction="up" delay={index * 0.05} className="bg-white/5 border border-white/10 p-6 flex flex-col items-center justify-center group hover:bg-white/10 hover:border-white/30 transition-all sharp-edge">
          <span className="material-symbols-outlined text-4xl text-white mb-4 group-hover:scale-110 transition-transform">{skill.icon}</span>
          <span className="font-bold text-white tracking-tight text-center">{skill.name}</span>
        </FadeIn>
      ))}
    </div>
  );

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn direction="up">
          <div className="mb-20 text-center md:text-left">
            <h2 className="font-headline text-5xl font-extrabold text-white tracking-tighter uppercase">
              Area Keahlian
            </h2>
            <p className="text-slate-500 mt-4 tracking-[0.2em] font-label text-sm">
              Komponen utama yang membentuk monolit
            </p>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="font-label text-sm uppercase tracking-widest text-secondary mb-6 pl-2 border-l-4 border-white/20">
              Bahasa Pemrograman & Framework
            </h3>
            {renderGrid(programAndFrameworks)}
          </div>
          
          <div>
            <h3 className="font-label text-sm uppercase tracking-widest text-secondary mb-6 pl-2 border-l-4 border-white/20">
              Library & Tools
            </h3>
            {renderGrid(toolsAndLibraries)}
          </div>
        </div>
      </div>
    </section>
  );
}
