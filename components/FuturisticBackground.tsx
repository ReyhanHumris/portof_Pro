export default function FuturisticBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#080c14]" />
      <div
        className="absolute -top-32 right-0 w-[min(560px,70vw)] h-[560px] rounded-full opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(148, 163, 184, 0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 -left-24 w-[480px] h-[480px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(100, 116, 139, 0.1) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent)",
        }}
      />
    </div>
  );
}
