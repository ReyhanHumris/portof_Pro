import Image from "next/image";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="py-32 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <FadeIn direction="left">
          <div className="relative group">
            <div className="absolute -inset-4 border border-white/5 z-0 group-hover:border-white/10 transition-colors"></div>
            <img 
              src="/IMG_2081.CR2.jpg" 
              className="relative z-10 w-full aspect-square object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700 sharp-edge"
            />
          </div>
        </FadeIn>
        
        <FadeIn direction="right" delay={0.2}>
          <div>
            <h2 className="font-headline text-4xl font-extrabold text-white mb-8 tracking-tight">Tentang Saya</h2>
            <div className="w-20 h-1 bg-white mb-8"></div>
            
            <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
              Halo, saya <strong className="text-white font-bold">Muhammad Raihaan Humris</strong>, seorang Web Developer yang berbasis di <strong className="text-white font-bold">Ende, Nusa Tenggara Timur</strong>. Sebagai lulusan di <strong className="text-white font-bold">MAKN Ende</strong> jurusan <strong className="text-white font-bold">Pengembangan Perangkat Lunak dan Gim</strong>, saya memiliki dedikasi tinggi untuk terus mengeksplorasi teknologi terbaru dan mengaplikasikannya dalam karya nyata.
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
              Saya percaya bahwa esensi dari seorang developer adalah kemampuannya dalam menghadirkan solusi yang efisien dan tepat sasaran. Dengan fokus pada penulisan kode yang bersih dan arsitektur sistem yang performan, saya siap membantu mentransformasi kebutuhan Anda menjadi aplikasi digital yang inovatif dan berdaya guna.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-black text-white mb-2">3+</div>
                <div className="font-label text-[10px] uppercase tracking-widest text-slate-500">Tahun Pengalaman</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white mb-2">7+</div>
                <div className="font-label text-[10px] uppercase tracking-widest text-slate-500">Proyek</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white mb-2">100%</div>
                <div className="font-label text-[10px] uppercase tracking-widest text-slate-500">Kepuasan</div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
