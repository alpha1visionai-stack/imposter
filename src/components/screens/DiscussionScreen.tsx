"use client";

import { useEffect, useRef, useState } from "react";
import { formatTime } from "@/lib/game";

type Props = {
  totalSeconds: number;
  onFinish: () => void;
};

export default function DiscussionScreen({ totalSeconds, onFinish }: Props) {
  const [remaining, setRemaining] = useState(totalSeconds);
  const [running, setRunning] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!running) return;
    intervalRef.current = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running]);

  const done = remaining === 0;
  const progress = Math.max(0, remaining / totalSeconds);

  return (
    <div className="flex flex-1 flex-col items-center justify-between px-6 pb-8 pt-6">
      <div className="animate-in text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-white/40">
          Diskussionsrunde
        </p>
        <h2 className="mt-1 text-lg font-semibold text-white/80">
          Stellt Fragen und findet den Imposter
        </h2>
      </div>

      <div className="relative flex h-64 w-64 items-center justify-center">
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="8"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke={done ? "#fb7185" : "#e879f9"}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 45}
            strokeDashoffset={2 * Math.PI * 45 * (1 - progress)}
            style={{ transition: "stroke-dashoffset 1s linear" }}
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="text-5xl font-black tabular-nums text-white">
            {formatTime(remaining)}
          </span>
          {done && (
            <span className="mt-1 text-sm font-semibold text-rose-300">Zeit um!</span>
          )}
        </div>
      </div>

      <div className="flex w-full max-w-xs flex-col gap-3">
        <div className="flex gap-3">
          <button
            onClick={() => setRunning((r) => !r)}
            disabled={done}
            className="flex-1 rounded-full bg-white/10 py-3 font-semibold text-white disabled:opacity-30 active:scale-[0.98]"
          >
            {running ? "⏸ Pause" : "▶ Weiter"}
          </button>
          <button
            onClick={() => setRemaining((r) => r + 60)}
            className="flex-1 rounded-full bg-white/10 py-3 font-semibold text-white active:scale-[0.98]"
          >
            +1 Min
          </button>
        </div>
        <button
          onClick={onFinish}
          className="w-full rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 py-4 text-lg font-bold text-white shadow-lg shadow-fuchsia-900/40 active:scale-[0.98]"
        >
          Zur Auflösung →
        </button>
      </div>
    </div>
  );
}
