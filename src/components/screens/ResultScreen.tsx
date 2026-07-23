"use client";

import { Category } from "@/data/words";
import { Role } from "@/lib/game";

type Props = {
  roles: Role[];
  category: Category;
  secretWord: string;
  onNextRound: () => void;
  onEditSettings: () => void;
};

export default function ResultScreen({
  roles,
  category,
  secretWord,
  onNextRound,
  onEditSettings,
}: Props) {
  const imposters = roles.filter((r) => r.isImposter);

  return (
    <div className="flex flex-1 flex-col gap-6 px-6 pb-8 pt-4">
      <div className="animate-in text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-white/40">
          Auflösung
        </p>
        <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 px-6 py-5">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
            {category.emoji} {category.label}
          </span>
          <p className="mt-1 text-3xl font-black text-white">{secretWord}</p>
        </div>
      </div>

      <div className="animate-in flex-1">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-violet-300">
          {imposters.length > 1 ? "Die Imposter" : "Der Imposter"}
        </h2>
        <div className="mb-4 flex flex-wrap gap-2">
          {imposters.map((r) => (
            <span
              key={r.player.id}
              className="rounded-full border border-rose-400/40 bg-rose-500/20 px-4 py-2 text-sm font-bold text-rose-200"
            >
              🎭 {r.player.name}
            </span>
          ))}
        </div>

        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-violet-300">
          Alle Spieler
        </h2>
        <div className="flex flex-col gap-2">
          {roles.map((r) => (
            <div
              key={r.player.id}
              className={`flex items-center justify-between rounded-2xl border px-4 py-2.5 ${
                r.isImposter
                  ? "border-rose-400/30 bg-rose-500/10"
                  : "border-emerald-400/20 bg-emerald-500/10"
              }`}
            >
              <span className="font-medium text-white">{r.player.name}</span>
              <span className="text-sm">{r.isImposter ? "🎭 Imposter" : "✅ Zivilist"}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <button
          onClick={onNextRound}
          className="w-full rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 py-4 text-lg font-bold text-white shadow-lg shadow-fuchsia-900/40 active:scale-[0.98]"
        >
          Nächste Runde 🔁
        </button>
        <button
          onClick={onEditSettings}
          className="w-full rounded-full bg-white/10 py-3 font-semibold text-white active:scale-[0.98]"
        >
          Einstellungen ändern
        </button>
      </div>
    </div>
  );
}
