import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Difficulty, GameCard as GameCardType } from "@/types/gitmoji";
import { DIFFICULTY_CONFIG } from "../../config/game";

interface GameCardProps {
    card: GameCardType;
    isFlipped: boolean;
    isMatched: boolean;
    onClick: () => void;
    difficulty: Difficulty;
}

export function GameCard({
    card,
    isFlipped,
    isMatched,
    onClick,
    difficulty,
}: GameCardProps) {
    return (
        <Card
            className={cn(
                DIFFICULTY_CONFIG[difficulty].cardWidth,
                "min-w-[120px] aspect-square cursor-pointer",
                "transition-all duration-300 hover:scale-105",
                "flex items-center justify-center",
                (isFlipped || isMatched) ? "bg-blue-50" : "hover:bg-gray-50",
            )}
            onClick={onClick}
        >
            <div className="flex flex-col items-center p-2 text-center">
                {isFlipped || isMatched
                    ? (
                        <>
                            <span className="text-4xl mb-2">{card.emoji}</span>
                            <span className="text-xs text-muted-foreground">
                                {card.code}
                            </span>
                            <span className="text-xs mt-1 text-muted-foreground line-clamp-2">
                                {card.name}
                            </span>
                        </>
                    )
                    : <span className="text-4xl">❓</span>}
            </div>
        </Card>
    );
}
