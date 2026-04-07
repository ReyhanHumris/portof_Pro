import FadeIn from "./FadeIn";

export default function Pricing() {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn direction="up">
          <div className="text-center mb-20">
            <h2 className="font-headline text-5xl font-extrabold text-white mb-6 tracking-tighter">
              Tingkat Investasi
            </h2>
            <p className="text-on-surface-variant text-lg">
              Harga transparan untuk rekayasa arsitektur premium.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-0 border border-white/10">
          {/* Tier 1 */}
          <FadeIn direction="up" delay={0.1} className="p-12 border-r border-white/10 flex flex-col justify-between">
            <div>
              <h4 className="font-label text-xs uppercase tracking-widest text-slate-500 mb-4">Tingkat Awal</h4>
              <h3 className="text-3xl font-bold text-white mb-2">Landing Page</h3>
              <p className="text-on-surface-variant text-sm mb-8">
                Pembuatan halaman web statis yang menarik untuk keperluan promosi atau portofolio.
              </p>
              <div className="text-4xl font-black text-white mb-10">
                Rp 1.000.000<span className="text-sm font-normal text-slate-500"> / mulai</span>
              </div>
              <ul className="space-y-4 mb-12">
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-white text-lg">check</span> Rekayasa Fitur Inti
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-white text-lg">check</span> Cetak Biru Arsitektur
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-white text-lg">check</span> Pengaturan Penerapan
                </li>
              </ul>
            </div>
            <button className="w-full py-4 border border-white/20 text-white font-bold hover:bg-white/5 transition-colors sharp-edge">
              Mulai Proyek
            </button>
          </FadeIn>
          
          {/* Tier 2 */}
          <FadeIn direction="up" delay={0.2} className="p-12 bg-white/5 border-r border-white/10 flex flex-col justify-between relative">
            <div className="absolute top-0 right-0 bg-white text-slate-950 px-4 py-1 text-[10px] font-black uppercase tracking-widest">
              Rekomendasi
            </div>
            <div>
              <h4 className="font-label text-xs uppercase tracking-widest text-slate-500 mb-4">Standar</h4>
              <h3 className="text-3xl font-bold text-white mb-2">Web App & Dashboard</h3>
              <p className="text-on-surface-variant text-sm mb-8">
                Sistem web komprehensif termasuk frontend, backend, dan panel admin/dashboard.
              </p>
              <div className="text-4xl font-black text-white mb-10">
                Rp 3.500.000<span className="text-sm font-normal text-slate-500"> / mulai</span>
              </div>
              <ul className="space-y-4 mb-12">
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-white text-lg">check</span> Struktur Data Kompleks
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-white text-lg">check</span> Sinkronisasi API Pihak Ketiga
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-white text-lg">check</span> Interaksi UI Lanjutan
                </li>
              </ul>
            </div>
            <button className="w-full py-4 bg-white text-slate-950 font-bold hover:bg-slate-200 transition-colors sharp-edge">
              Mulai Proyek
            </button>
          </FadeIn>
          
          {/* Tier 3 */}
          <FadeIn direction="up" delay={0.3} className="p-12 flex flex-col justify-between">
            <div>
              <h4 className="font-label text-xs uppercase tracking-widest text-slate-500 mb-4">Perusahaan</h4>
              <h3 className="text-3xl font-bold text-white mb-2">Full App & Web</h3>
              <p className="text-on-surface-variant text-sm mb-8">
                Pengembangan sistem berskala besar mencakup aplikasi web dan mobile dengan infrastruktur lengkap.
              </p>
              <div className="text-4xl font-black text-white mb-10">
                Rp 7.000.000<span className="text-sm font-normal text-slate-500"> / mulai</span>
              </div>
              <ul className="space-y-4 mb-12">
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-white text-lg">check</span> Arsitektur Multi-Penyewa
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-white text-lg">check</span> Dukungan Premium
                </li>
                <li className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-white text-lg">check</span> Jaminan Performa
                </li>
              </ul>
            </div>
            <button className="w-full py-4 border border-white/20 text-white font-bold hover:bg-white/5 transition-colors sharp-edge">
              Hubungi Saya
            </button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
