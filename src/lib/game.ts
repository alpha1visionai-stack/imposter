import { categories, Category } from "@/data/words";

export type Player = {
  id: string;
  name: string;
};

export type GameSettings = {
  imposterCount: number;
  categoryId: string;
  timerMinutes: number;
};

export type Role = {
  player: Player;
  isImposter: boolean;
};

export type RoundResult = {
  category: Category;
  secretWord: string;
  roles: Role[];
};

export const MIN_PLAYERS = 3;
export const MAX_PLAYERS = 12;
export const RANDOM_CATEGORY_ID = "zufaellig";

export function shuffle<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function maxImposters(playerCount: number): number {
  return Math.max(1, Math.min(4, Math.ceil(playerCount / 2) - 1));
}

export function makeDefaultPlayers(count: number): Player[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `p-${Date.now()}-${i}`,
    name: `Spieler ${i + 1}`,
  }));
}

export function pickCategory(categoryId: string): Category {
  if (categoryId === RANDOM_CATEGORY_ID) {
    return categories[Math.floor(Math.random() * categories.length)];
  }
  return categories.find((c) => c.id === categoryId) ?? categories[0];
}

export function playRound(players: Player[], settings: GameSettings): RoundResult {
  const category = pickCategory(settings.categoryId);
  const secretWord = category.words[Math.floor(Math.random() * category.words.length)];
  const imposterCount = Math.min(
    settings.imposterCount,
    maxImposters(players.length)
  );
  const shuffledIds = shuffle(players).slice(0, imposterCount).map((p) => p.id);
  const imposterIds = new Set(shuffledIds);
  const roles = shuffle(
    players.map((player) => ({
      player,
      isImposter: imposterIds.has(player.id),
    }))
  );
  return { category, secretWord, roles };
}

export function formatTime(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}
