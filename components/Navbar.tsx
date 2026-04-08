"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/70 backdrop-blur-xl border-b border-white/15 shadow-[0_10px_30px_-15px_rgba(6,14,32,0.8)] sharp-edge">
      <div className="flex justify-between items-center px-4 sm:px-6 py-3 max-w-6xl mx-auto">
        <a href="#" onClick={(e) => handleScroll(e, 'top')} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image 
            src="/logo.svg" 
            alt="RH Logo" 
            width={44} 
            height={44}
            className="h-11 w-11"
            priority
          />
          <span className="text-xl md:text-2xl font-black tracking-tighter text-white">ReyDev</span>
        </a>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#" onClick={(e) => handleScroll(e, 'top')} className="text-white border-b-2 border-white pb-1 font-manrope tracking-tight font-bold cursor-pointer">Beranda</a>
          <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-slate-400 font-medium hover:text-white transition-colors cursor-pointer">Tentang</a>
          <a href="#skills" onClick={(e) => handleScroll(e, 'skills')} className="text-slate-400 font-medium hover:text-white transition-colors cursor-pointer">Keahlian</a>
          <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="text-slate-400 font-medium hover:text-white transition-colors cursor-pointer">Proyek</a>
          <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-slate-400 font-medium hover:text-white transition-colors cursor-pointer">Kontak</a>
        </div>

        <div className="hidden md:block">
          <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="bg-primary text-on-primary px-4 py-2 text-sm font-bold hover:scale-95 active:scale-90 transition-transform sharp-edge inline-block cursor-pointer">
            Rekrut Saya
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-1.5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 px-4 py-3 flex flex-col gap-3 text-sm bg-slate-900/95">
          <a href="#" onClick={(e) => handleScroll(e, 'top')} className="text-white font-manrope tracking-tight font-bold cursor-pointer">Beranda</a>
          <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-slate-400 font-medium hover:text-white transition-colors cursor-pointer">Tentang</a>
          <a href="#skills" onClick={(e) => handleScroll(e, 'skills')} className="text-slate-400 font-medium hover:text-white transition-colors cursor-pointer">Keahlian</a>
          <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="text-slate-400 font-medium hover:text-white transition-colors cursor-pointer">Proyek</a>
          <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-slate-400 font-medium hover:text-white transition-colors cursor-pointer">Kontak</a>
          <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="bg-primary text-on-primary px-4 py-2 font-bold hover:scale-95 transition-transform sharp-edge text-center mt-1 w-full cursor-pointer">
            Rekrut Saya
          </a>
        </div>
      )}
    </nav>
  );
}
