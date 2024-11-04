import { DIFFICULTY_CONFIG } from '../../config/game';
import { GameCard } from './GameCard';
import type { Difficulty, GameCard as GameCardType } from '@/types/gitmoji';
import { cn } from '../../lib/utils';

interface GameBoardProps {
    cards: GameCardType[];
    flippedIndexes: number[];
    matchedPairs: string[];
    onCardClick: (index: number) => void;
    difficulty: Difficulty;
  }
  
  export function GameBoard({
    cards,
    flippedIndexes,
    matchedPairs,
    onCardClick,
    difficulty
  }: GameBoardProps) {
    return (
      <div className={cn(
        "flex flex-wrap justify-center gap-4",
        `grid-cols-${DIFFICULTY_CONFIG[difficulty].columns}`
      )}>
        {cards.map((card, index) => (
          <GameCard
            key={card.id}
            card={card}
            isFlipped={flippedIndexes.includes(index)}
            isMatched={matchedPairs.includes(card.code)}
            onClick={() => onCardClick(index)}
            difficulty={difficulty}
          />
        ))}
      </div>
    );
  }