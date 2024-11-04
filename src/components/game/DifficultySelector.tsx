import { Button } from '@/components/ui/button';
import type { Difficulty } from '@/types/gitmoji';

interface DifficultySelectorProps {
  currentDifficulty: Difficulty;
  onDifficultyChange: (difficulty: Difficulty) => void;
}

export function DifficultySelector({
  currentDifficulty,
  onDifficultyChange
}: DifficultySelectorProps) {
  return (
    <div className="flex justify-center gap-2 mb-4">
      <Button
        variant={currentDifficulty === 'easy' ? 'default' : 'outline'}
        onClick={() => onDifficultyChange('easy')}
      >
        Easy (6 pairs)
      </Button>
      <Button
        variant={currentDifficulty === 'medium' ? 'default' : 'outline'}
        onClick={() => onDifficultyChange('medium')}
      >
        Medium (8 pairs)
      </Button>
      <Button
        variant={currentDifficulty === 'hard' ? 'default' : 'outline'}
        onClick={() => onDifficultyChange('hard')}
      >
        Hard (12 pairs)
      </Button>
    </div>
  );
}