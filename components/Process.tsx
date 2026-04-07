import FadeIn from "./FadeIn";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Penemuan",
      desc: "Analisis mendalam mengenai kebutuhan, kelayakan teknis, dan perencanaan arsitektur untuk memastikan fondasi yang kokoh."
    },
    {
      num: "02",
      title: "Desain",
      desc: "Arsitektur UI/UX yang berfokus pada kejelasan kontras tinggi dan efisiensi struktural sebelum penulisan kode dimulai."
    },
    {
      num: "03",
      title: "Pengembangan",
      desc: "Fase rekayasa iteratif menggunakan teknologi modern untuk membangun komponen perangkat lunak yang tahan uji dan skalabel."
    },
    {
      num: "04",
      title: "Peluncuran",
      desc: "Jalur penerapan yang ketat mencakup pengujian beban, optimalisasi performa, dan serah terima akhir."
    }
  ];

  return (
    <section className="py-32 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn direction="up">
          <div className="mb-20">
            <h2 className="font-headline text-sm uppercase tracking-[0.4em] text-secondary mb-4">
              Proses Rekayasa
            </h2>
            <div className="flex items-center gap-4">
              <h3 className="text-4xl font-extrabold text-white tracking-tight">
                Bagaimana Monolit dibangun.
              </h3>
            </div>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <FadeIn key={index} direction="up" delay={index * 0.15} className="relative pt-12 border-t border-white/10 group">
              <span className="absolute top-0 left-0 text-6xl font-black text-white/5 -translate-y-1/2">
                {step.num}
              </span>
              <h4 className="text-xl font-bold text-white mb-4">{step.title}</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {step.desc}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
