"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/lib/site";

type LineKind = "system" | "ok" | "cmd" | "out" | "accent";

type LogLine = {
  kind: LineKind;
  text: string;
  pauseAfter?: number;
};

const BOOT_LINES: LogLine[] = [
  { kind: "system", text: "reydev-portfolio — initializing session...", pauseAfter: 400 },
  { kind: "ok", text: "connection: secure · region: id_ID · EST. 2026", pauseAfter: 350 },
  { kind: "cmd", text: "whoami", pauseAfter: 200 },
  { kind: "out", text: `> ${site.name}`, pauseAfter: 450 },
  { kind: "cmd", text: "role --display", pauseAfter: 200 },
  { kind: "out", text: `> ${site.tagline}`, pauseAfter: 400 },
  { kind: "cmd", text: "geo locate", pauseAfter: 200 },
  { kind: "out", text: `> ${site.location}, Indonesia`, pauseAfter: 400 },
  { kind: "cmd", text: "stack list --active", pauseAfter: 200 },
  { kind: "out", text: "> Next.js · Laravel · TypeScript · Tailwind · MySQL", pauseAfter: 450 },
  { kind: "cmd", text: "status --work", pauseAfter: 200 },
  { kind: "accent", text: "> STATUS: AVAILABLE FOR PROJECTS", pauseAfter: 500 },
  { kind: "cmd", text: "intro --short", pauseAfter: 200 },
  {
    kind: "out",
    text: "> Saya membangun website & sistem web yang rapi, cepat, dan siap dipakai di produksi.",
    pauseAfter: 600,
  },
  { kind: "ok", text: "session ready — welcome.", pauseAfter: 300 },
];

const CHAR_MS = 28;

function lineColor(kind: LineKind) {
  switch (kind) {
    case "system":
      return "text-slate-500";
    case "ok":
      return "text-emerald-400/90";
    case "cmd":
      return "text-slate-300";
    case "accent":
      return "text-white font-semibold";
    default:
      return "text-slate-200";
  }
}

function linePrefix(kind: LineKind) {
  if (kind === "cmd") return <span className="text-emerald-500/90 select-none">$ </span>;
  if (kind === "ok") return <span className="text-emerald-500/70 select-none">✓ </span>;
  if (kind === "system") return <span className="text-slate-600 select-none">· </span>;
  return null;
}

function LogLineRow({ line }: { line: LogLine }) {
  return (
    <div className={`mb-1.5 ${lineColor(line.kind)}`}>
      {linePrefix(line.kind)}
      <span>{line.text}</span>
    </div>
  );
}

export default function HeroTerminal() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  const lines = useMemo(() => BOOT_LINES, []);
  const finished = lineIndex >= lines.length;
  const currentLine = finished ? null : lines[lineIndex];

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (mq.matches) {
        setReduceMotion(true);
        setLineIndex(lines.length);
        setCharIndex(0);
      }
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [lines.length]);

  useEffect(() => {
    if (reduceMotion || finished) return;

    const text = lines[lineIndex].text;

    if (charIndex < text.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), CHAR_MS);
      return () => clearTimeout(t);
    }

    const pause = lines[lineIndex].pauseAfter ?? 120;
    const t = setTimeout(() => {
      setLineIndex((i) => i + 1);
      setCharIndex(0);
    }, pause);

    return () => clearTimeout(t);
  }, [lineIndex, charIndex, lines, reduceMotion, finished]);

  return (
    <motion.div
      className="w-full max-w-lg mx-auto lg:mx-0 lg:max-w-none"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15 }}
    >
      <motion.div className="rounded-2xl border border-white/[0.1] bg-[#0a0f18]/95 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.8)] overflow-hidden">
        <motion.div
          className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.08] bg-white/[0.03]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 truncate">
            reydev@portfolio — bash
          </span>
        </motion.div>

        <div
          className="p-4 sm:p-5 min-h-[18rem] sm:min-h-[20rem] font-mono text-[11px] sm:text-xs leading-relaxed"
          role="log"
          aria-live="polite"
          aria-label="Log terminal perkenalan"
        >
          {reduceMotion ? (
            lines.map((line, i) => <LogLineRow key={i} line={line} />)
          ) : (
            <>
              {lines.slice(0, lineIndex).map((line, i) => (
                <LogLineRow key={i} line={line} />
              ))}

              {currentLine && (
                <div className={`mb-1.5 ${lineColor(currentLine.kind)}`}>
                  {linePrefix(currentLine.kind)}
                  <span>{currentLine.text.slice(0, charIndex)}</span>
                  <span className="inline-block w-[7px] h-[14px] ml-0.5 align-middle bg-emerald-400/90 animate-pulse" />
                </div>
              )}

              {finished && (
                <div className="mt-3 text-slate-400">
                  <span className="text-emerald-500/90">$ </span>
                  <span className="inline-block w-[7px] h-[14px] align-middle bg-emerald-400/90 animate-pulse" />
                </div>
              )}
            </>
          )}
        </div>
      </motion.div>

      <p className="mt-3 text-center lg:text-left text-[10px] uppercase tracking-[0.25em] text-slate-600 font-label">
        Live session · {site.brand}
      </p>
    </motion.div>
  );
}
