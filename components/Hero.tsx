import Link from "next/link";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30 animate-pulse duration-1000">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--color-primary-fixed-dim)_0%,_transparent_60%)] blur-3xl opacity-50"></div>
      </div>
      
      <FadeIn delay={0.2} direction="up" className="relative z-10 max-w-5xl w-full text-center">
        <p className="font-label text-xs md:text-sm uppercase tracking-widest md:tracking-[0.3em] text-secondary mb-6">
          Hallo Saya Raihaan Humris
        </p>
        
        <h1 className="font-headline text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter text-white mb-8 leading-[1.1] md:leading-[0.9]">
          Fullstacks <br /> 
          <span className="text-transparent" style={{ WebkitTextStroke: "1px #ffffff" }}>Web Developer</span>
        </h1>
        
        <p className="font-body text-lg sm:text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto mb-12">
          Insinyur Fullstack yang berspesialisasi dalam aplikasi web end-to-end yang dibangun dengan presisi matematis dan integritas arsitektur.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <Link href="#projects" className="w-full sm:w-auto text-center bg-white text-slate-950 px-10 py-4 font-bold text-lg hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-300 sharp-edge">
            Lihat Proyek
          </Link>
          <Link href="#contact" className="w-full sm:w-auto text-center border border-white/30 text-white px-10 py-4 font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300 sharp-edge">
            Mulai Sekarang
          </Link>
        </div>
        
        <div className="mt-20 flex justify-center animate-bounce opacity-70 hidden md:flex">
          <span className="material-symbols-outlined text-4xl">keyboard_double_arrow_down</span>
        </div>
      </FadeIn>
    </section>
  );
}
