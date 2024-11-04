import type { Gitmoji as GitmojiType } from 'gitmojis';

export type { GitmojiType };

export interface GameCard extends GitmojiType {
  id: number;
}

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface DifficultyConfig {
  pairs: number;
  columns: number;
  cardWidth: string;
}

export interface GameState {
  cards: GameCard[];
  flippedIndexes: number[];
  matchedPairs: string[];
  moves: number;
  gameWon: boolean;
  difficulty: Difficulty;
}