import { useState, useCallback } from 'react';
import {gitmojis} from 'gitmojis';
import type { GameCard, GameState, Difficulty } from '../types/gitmoji';
import { DIFFICULTY_CONFIG } from '@/config/game';

export function useGameLogic(initialDifficulty: Difficulty = 'medium') {
  const [gameState, setGameState] = useState<GameState>({
    cards: [],
    flippedIndexes: [],
    matchedPairs: [],
    moves: 0,
    gameWon: false,
    difficulty: initialDifficulty
  });

  const initializeGame = useCallback((difficulty: Difficulty = gameState.difficulty) => {
    const numberOfPairs = DIFFICULTY_CONFIG[difficulty].pairs;
    const selectedGitmojis = [...gitmojis]
      .sort(() => Math.random() - 0.5)
      .slice(0, numberOfPairs);

    const cardPairs: GameCard[] = [...selectedGitmojis, ...selectedGitmojis]
      .sort(() => Math.random() - 0.5)
      .map((gitmoji, index) => ({
        ...gitmoji,
        id: index,
      }));
    
    setGameState({
      cards: cardPairs,
      flippedIndexes: [],
      matchedPairs: [],
      moves: 0,
      gameWon: false,
      difficulty
    });
  }, [gameState.difficulty]);

  const handleCardClick = useCallback((index: number) => {
    const { cards, flippedIndexes, matchedPairs, moves, difficulty } = gameState;

    if (flippedIndexes.length === 2 || matchedPairs.includes(cards[index].code)) return;
    if (flippedIndexes.includes(index)) return;

    const newFlippedIndexes = [...flippedIndexes, index];
    
    setGameState(prev => ({
      ...prev,
      flippedIndexes: newFlippedIndexes
    }));

    if (newFlippedIndexes.length === 2) {
      const [firstIndex, secondIndex] = newFlippedIndexes;
      
      setGameState(prev => ({
        ...prev,
        moves: moves + 1
      }));

      if (cards[firstIndex].code === cards[secondIndex].code) {
        setGameState(prev => {
          const newMatchedPairs = [...prev.matchedPairs, cards[firstIndex].code];
          return {
            ...prev,
            matchedPairs: newMatchedPairs,
            flippedIndexes: [],
            gameWon: newMatchedPairs.length === DIFFICULTY_CONFIG[difficulty].pairs
          };
        });
      } else {
        setTimeout(() => {
          setGameState(prev => ({
            ...prev,
            flippedIndexes: []
          }));
        }, 1000);
      }
    }
  }, [gameState]);

  return {
    gameState,
    initializeGame,
    handleCardClick
  };
}