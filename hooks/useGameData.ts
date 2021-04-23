/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';
import { GameModeTypes } from '../pages/_app';

export const getScore = (gameMode: GameModeTypes) => {
    const score = localStorage.getItem(gameMode);

    if (score == null) return 0;

    return Number(score);
};

export const setScore = (gameMode: GameModeTypes, score: number | null) => {
    console.log(`Saving Score of Game Mode ${gameMode} = ${score}`);
    localStorage.setItem(gameMode, String(score));
};

export interface gameDataType {
    score: number | null;
}

export const useGameData = (gameMode: GameModeTypes) => {
    const [gameData, setGameData] = useState<gameDataType>({
        score: null,
    });

    useEffect(() => {
        setGameData({ ...gameData, score: getScore(gameMode) });
    }, []);

    const incrementScore = (points: number) => {
        if (gameData.score == null) {
            setTimeout(() => incrementScore(points), 10);
            console.warn('Scores are being fetched from localStorage, Please Wait and btw your browser is slow!');
        } else {
            setGameData((prev) => ({ ...prev, score: prev.score + points }));
            setScore(gameMode, gameData.score + points);
        }
    };

    return [gameData, incrementScore] as const;
};
