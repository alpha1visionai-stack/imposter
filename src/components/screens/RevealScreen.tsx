"use client";

import { useState } from "react";
import { Category } from "@/data/words";
import { Role } from "@/lib/game";

type Props = {
  roles: Role[];
  index: number;
  category: Category;
  secretWord: string;
  onNext: () => void;
};

export default function RevealScreen({ roles, index, category, secretWord, onNext }: Props) {
  const [flipped, setFlipped] = useState(false);
  const role = roles[index];
  const isLast = index === roles.length - 1;

  function handleContinue() {
    setFlipped(false);
    onNext();
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-between px-6 pb-8 pt-4">
      <div className="w-full animate-in text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-white/40">
          Spieler {index + 1} von {roles.length}
        </p>
        <h2 className="mt-1 text-2xl font-bold text-white">{role.player.name}</h2>
        {!flipped && (
          <p className="mt-1 text-sm text-white/50">
            Gib das Handy an {role.player.name} und tippe zum Aufdecken
          </p>
        )}
      </div>

      <div className="flip-scene w-full max-w-xs">
        <button
          onClick={() => setFlipped(true)}
          disabled={flipped}
          className="relative aspect-[3/4] w-full"
        >
          <div className={`flip-card h-full w-full ${flipped ? "is-flipped" : ""}`}>
            <div className="flip-face absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-950 via-[#1a0b3d] to-violet-950 shadow-2xl">
              <span className="text-6xl">🕵️</span>
              <span className="text-lg font-semibold text-white/70">
                Tippen zum Aufdecken
              </span>
              <span className="pulse-ring h-3 w-3 rounded-full bg-fuchsia-400" />
            </div>
            <div
              className={`flip-face flip-face-back absolute inset-0 flex flex-col items-center justify-center gap-5 rounded-3xl border shadow-2xl ${
                role.isImposter
                  ? "border-rose-400/40 bg-gradient-to-br from-rose-950 via-rose-900 to-red-950"
                  : "border-emerald-400/30 bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-950"
              }`}
            >
              {role.isImposter ? (
                <>
                  <span className="text-6xl">🎭</span>
                  <span className="text-2xl font-black tracking-wide text-rose-200">
                    DU BIST DER IMPOSTER
                  </span>
                  <span className="px-8 text-center text-sm text-rose-100/70">
                    Finde heraus, worüber die anderen reden – und bleib unentdeckt.
                  </span>
                </>
              ) : (
                <>
                  <span className="text-5xl">{category.emoji}</span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-emerald-300/70">
                    {category.label}
                  </span>
                  <span className="px-6 text-center text-3xl font-black text-emerald-100">
                    {secretWord}
                  </span>
                  <span className="px-8 text-center text-sm text-emerald-100/60">
                    Merk dir das Wort. Verrate es nicht direkt!
                  </span>
                </>
              )}
            </div>
          </div>
        </button>
      </div>

      <button
        onClick={handleContinue}
        disabled={!flipped}
        className="w-full max-w-xs rounded-full bg-white/10 py-4 text-lg font-bold text-white transition-opacity disabled:opacity-0 enabled:active:scale-[0.98]"
      >
        {isLast ? "Alle bereit – weiter zur Runde" : "Weitergeben →"}
      </button>
    </div>
  );
}
