import { Button } from '@/components/ui/button';

interface GameHeaderProps {
  moves: number;
  onNewGame: () => void;
}

export function GameHeader({ moves, onNewGame }: GameHeaderProps) {
  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
        MojiMind
      </h1>
      <div className="flex justify-center gap-4 mb-4">
        <p className="text-lg">Moves: {moves}</p>
        <Button 
          onClick={onNewGame}
          variant="default"
          size="default"
        >
          New Game
        </Button>
      </div>
    </div>
  );
}