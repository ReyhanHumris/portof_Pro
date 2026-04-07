"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    summary: ""
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/whatsapp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      
      if (data.url) {
        window.open(data.url, "_blank");
      } else {
        alert("Terjadi kesalahan saat memproses permintaan Anda.");
      }
    } catch (error) {
      console.error(error);
      alert("Gagal mengirim pesan.");
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppDirect = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open("https://wa.me/628233934478", "_blank");
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-surface-container-low overflow-hidden relative">
      <div className="absolute -right-20 top-0 text-[9rem] md:text-[20rem] font-black text-white/5 select-none leading-none">
        KONTAK
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14">
          <FadeIn direction="left">
            <div>
              <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tighter">
                Siap untuk memulai <br /> sebuah proyek?
              </h2>
              <p className="text-on-surface-variant text-base md:text-lg mb-8 max-w-md">
                Mari bangun sesuatu yang bermakna. Apakah Anda memiliki spesifikasi detail atau hanya sekadar konsep, saya siap merekayasa solusinya.
              </p>
              
              <div className="space-y-4">
                <a href="mailto:hello@reylabns.com" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 flex items-center justify-center bg-white/5 group-hover:bg-white group-hover:text-slate-950 transition-colors">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <span className="text-base md:text-lg font-bold text-white break-all">raihaanhumris@gmail.com</span>
                </a>
                
                <button onClick={handleWhatsAppDirect} className="flex items-center gap-4 group w-full text-left">
                  <div className="w-10 h-10 flex items-center justify-center bg-white/5 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">chat</span>
                  </div>
                  <span className="text-base md:text-lg font-bold text-white">WhatsApp Saya</span>
                </button>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="right" delay={0.2}>
            <div className="bg-surface p-6 md:p-10 shadow-2xl border border-white/5 sharp-edge">
              <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="font-label text-[10px] uppercase tracking-widest text-slate-500 mb-2 block">
                  Nama Anda
                </label>
                <input 
                  type="text" 
                  className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-white text-white p-3 sharp-edge outline-none" 
                  placeholder="nama lengkap Anda" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <label className="font-label text-[10px] uppercase tracking-widest text-slate-500 mb-2 block">
                  Email Anda
                </label>
                <input 
                  type="email" 
                  className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-white text-white p-3 sharp-edge outline-none" 
                  placeholder="Input@gmail.com" 
                  required
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
              
              <div>
                <label className="font-label text-[10px] uppercase tracking-widest text-slate-500 mb-2 block">
                  Ringkasan Proyek
                </label>
                <textarea 
                  className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-white text-white p-3 sharp-edge outline-none resize-y" 
                  rows={4}
                  placeholder="Jelaskan ruang lingkupnya..."
                  required
                  value={formData.summary}
                  onChange={e => setFormData({...formData, summary: e.target.value})}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-white text-slate-950 py-3.5 text-sm md:text-base font-black uppercase tracking-widest hover:bg-slate-200 transition-all sharp-edge disabled:opacity-50"
              >
                {loading ? "Memproses..." : "Kirim Pesan Aman"}
              </button>
            </form>
          </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
