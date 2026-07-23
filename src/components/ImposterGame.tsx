"use client";

import { useState } from "react";
import SetupScreen from "@/components/screens/SetupScreen";
import RevealScreen from "@/components/screens/RevealScreen";
import DiscussionScreen from "@/components/screens/DiscussionScreen";
import ResultScreen from "@/components/screens/ResultScreen";
import {
  GameSettings,
  Player,
  RANDOM_CATEGORY_ID,
  RoundResult,
  makeDefaultPlayers,
  playRound,
} from "@/lib/game";

type Phase = "setup" | "reveal" | "discussion" | "result";

export default function ImposterGame() {
  const [phase, setPhase] = useState<Phase>("setup");
  const [players, setPlayers] = useState<Player[]>(() => makeDefaultPlayers(4));
  const [settings, setSettings] = useState<GameSettings>({
    imposterCount: 1,
    categoryId: RANDOM_CATEGORY_ID,
    timerMinutes: 3,
  });
  const [round, setRound] = useState<RoundResult | null>(null);
  const [revealIndex, setRevealIndex] = useState(0);

  function startRound() {
    setRound(playRound(players, settings));
    setRevealIndex(0);
    setPhase("reveal");
  }

  function handleRevealNext() {
    if (!round) return;
    if (revealIndex + 1 < round.roles.length) {
      setRevealIndex(revealIndex + 1);
    } else {
      setPhase("discussion");
    }
  }

  return (
    <div className="mx-auto flex w-full max-w-md flex-1 flex-col">
      <header className="safe-top flex items-center justify-center gap-2 px-5 pb-2">
        <span className="text-2xl">🕵️‍♂️</span>
        <h1 className="text-xl font-black tracking-tight text-white">
          IMPOSTER
        </h1>
      </header>

      {phase === "setup" && (
        <SetupScreen
          players={players}
          settings={settings}
          onChangePlayers={setPlayers}
          onChangeSettings={setSettings}
          onStart={startRound}
        />
      )}

      {phase === "reveal" && round && (
        <RevealScreen
          roles={round.roles}
          index={revealIndex}
          category={round.category}
          secretWord={round.secretWord}
          onNext={handleRevealNext}
        />
      )}

      {phase === "discussion" && (
        <DiscussionScreen
          totalSeconds={settings.timerMinutes * 60}
          onFinish={() => setPhase("result")}
        />
      )}

      {phase === "result" && round && (
        <ResultScreen
          roles={round.roles}
          category={round.category}
          secretWord={round.secretWord}
          onNextRound={startRound}
          onEditSettings={() => setPhase("setup")}
        />
      )}
    </div>
  );
}
