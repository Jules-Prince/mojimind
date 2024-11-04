import type { Difficulty, DifficultyConfig } from '@/types/gitmoji';

export const DIFFICULTY_CONFIG: Record<Difficulty, DifficultyConfig> = {
  easy: {
    pairs: 6,
    columns: 3,
    cardWidth: 'w-[calc(33.333%-16px)]'
  },
  medium: {
    pairs: 8,
    columns: 4,
    cardWidth: 'w-[calc(25%-16px)]'
  },
  hard: {
    pairs: 12,
    columns: 4,
    cardWidth: 'w-[calc(25%-16px)]'
  }
};