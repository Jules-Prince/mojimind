
import './App.css'
import { useEffect } from 'react';
import { GameHeader } from './components/game/GameHeader'; 
import { GameBoard } from './components/game/GameBoard';
import { useGameLogic } from '@/hooks/useGameLogic';
import { DifficultySelector } from './components/game/DifficultySelector';


function App() {
  const { gameState, initializeGame, handleCardClick } = useGameLogic('medium');
  const { cards, flippedIndexes, matchedPairs, moves, gameWon, difficulty } = gameState;

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  return (
    <div className="container mx-auto p-4">
      <GameHeader 
        moves={moves} 
        onNewGame={() => initializeGame(difficulty)} 
      />

      <DifficultySelector
        currentDifficulty={difficulty}
        onDifficultyChange={(newDifficulty) => initializeGame(newDifficulty)}
      />

      {gameWon && (
        <div className="text-center mb-6 p-4 bg-green-100 rounded-lg border border-green-200">
          <p className="text-xl font-bold text-green-700">
            Congratulations! You won in {moves} moves! 🎉
          </p>
        </div>
      )}

      <GameBoard
        cards={cards}
        flippedIndexes={flippedIndexes}
        matchedPairs={matchedPairs}
        onCardClick={handleCardClick}
        difficulty={difficulty}
      />
    </div>
  );
}

export default App
