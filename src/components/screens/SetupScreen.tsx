"use client";

import { useState } from "react";
import { categories } from "@/data/words";
import {
  GameSettings,
  MAX_PLAYERS,
  MIN_PLAYERS,
  Player,
  RANDOM_CATEGORY_ID,
  maxImposters,
} from "@/lib/game";

type Props = {
  players: Player[];
  settings: GameSettings;
  onChangePlayers: (players: Player[]) => void;
  onChangeSettings: (settings: GameSettings) => void;
  onStart: () => void;
};

export default function SetupScreen({
  players,
  settings,
  onChangePlayers,
  onChangeSettings,
  onStart,
}: Props) {
  const [error, setError] = useState<string | null>(null);
  const cap = maxImposters(players.length);

  function updateName(id: string, name: string) {
    onChangePlayers(players.map((p) => (p.id === id ? { ...p, name } : p)));
  }

  function addPlayer() {
    if (players.length >= MAX_PLAYERS) return;
    onChangePlayers([
      ...players,
      { id: `p-${Date.now()}`, name: `Spieler ${players.length + 1}` },
    ]);
  }

  function removePlayer(id: string) {
    if (players.length <= MIN_PLAYERS) return;
    onChangePlayers(players.filter((p) => p.id !== id));
  }

  function handleStart() {
    const trimmed = players.map((p) => p.name.trim());
    if (trimmed.some((n) => n.length === 0)) {
      setError("Bitte gib jedem Spieler einen Namen.");
      return;
    }
    setError(null);
    onStart();
  }

  return (
    <div className="flex flex-1 flex-col gap-6 px-5 pb-8 pt-2">
      <section className="animate-in">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-violet-300">
            Spieler ({players.length})
          </h2>
          <div className="flex gap-2">
            <button
              onClick={addPlayer}
              disabled={players.length >= MAX_PLAYERS}
              className="h-8 w-8 rounded-full bg-white/10 text-lg font-bold text-white disabled:opacity-30 active:scale-95"
            >
              +
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2">
          {players.map((p, i) => (
            <div
              key={p.id}
              className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5"
            >
              <span className="text-sm text-white/40">{i + 1}</span>
              <input
                value={p.name}
                onChange={(e) => updateName(p.id, e.target.value)}
                maxLength={16}
                className="min-w-0 flex-1 bg-transparent text-base font-medium text-white outline-none placeholder:text-white/30"
                placeholder={`Spieler ${i + 1}`}
              />
              <button
                onClick={() => removePlayer(p.id)}
                disabled={players.length <= MIN_PLAYERS}
                className="text-white/40 disabled:opacity-20"
                aria-label="Spieler entfernen"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
        {error && <p className="mt-2 text-sm text-rose-400">{error}</p>}
      </section>

      <section className="animate-in">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-violet-300">
          Anzahl Imposter
        </h2>
        <div className="flex gap-2">
          {Array.from({ length: cap }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => onChangeSettings({ ...settings, imposterCount: n })}
              className={`flex-1 rounded-2xl border py-3 text-lg font-bold transition-colors ${
                settings.imposterCount === n
                  ? "border-fuchsia-400 bg-fuchsia-500/20 text-fuchsia-200"
                  : "border-white/10 bg-white/5 text-white/60"
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      </section>

      <section className="animate-in">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-violet-300">
          Kategorie
        </h2>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() =>
              onChangeSettings({ ...settings, categoryId: RANDOM_CATEGORY_ID })
            }
            className={`col-span-2 rounded-2xl border px-4 py-3 text-left font-semibold transition-colors ${
              settings.categoryId === RANDOM_CATEGORY_ID
                ? "border-fuchsia-400 bg-fuchsia-500/20 text-fuchsia-200"
                : "border-white/10 bg-white/5 text-white/70"
            }`}
          >
            🎲 Zufällig gemischt
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => onChangeSettings({ ...settings, categoryId: c.id })}
              className={`rounded-2xl border px-3 py-3 text-left text-sm font-semibold transition-colors ${
                settings.categoryId === c.id
                  ? "border-fuchsia-400 bg-fuchsia-500/20 text-fuchsia-200"
                  : "border-white/10 bg-white/5 text-white/70"
              }`}
            >
              {c.emoji} {c.label}
            </button>
          ))}
        </div>
      </section>

      <section className="animate-in">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-violet-300">
          Diskussionszeit: {settings.timerMinutes} Min
        </h2>
        <input
          type="range"
          min={1}
          max={10}
          value={settings.timerMinutes}
          onChange={(e) =>
            onChangeSettings({ ...settings, timerMinutes: Number(e.target.value) })
          }
          className="w-full accent-fuchsia-400"
        />
      </section>

      <div className="flex-1" />

      <button
        onClick={handleStart}
        className="w-full rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 py-4 text-lg font-bold text-white shadow-lg shadow-fuchsia-900/40 active:scale-[0.98]"
      >
        Spiel starten →
      </button>
    </div>
  );
}
