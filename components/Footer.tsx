export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 font-manrope text-[10px] uppercase tracking-[0.05em] py-16 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 w-full max-w-7xl mx-auto">
        <div className="mb-8 md:mb-0">
          © {new Date().getFullYear()} Raihaan-Humris. Dibangun dengan presisi matematis.
        </div>
        <div className="flex gap-10">
          <a href="#" className="text-slate-500 hover:text-white transition-colors">Github</a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors">Kode Sumber</a>
        </div>
      </div>
    </footer>
  );
}
