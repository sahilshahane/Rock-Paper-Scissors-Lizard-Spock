/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';
import { GameModeTypes } from '../pages/_app';

const getScore = (gameMode: GameModeTypes) => {
    const score = localStorage.getItem(gameMode);

    if (score == null) return 0;

    return Number(score);
};

const setScore = (gameMode: GameModeTypes, score: number | null) => {
    console.log(`Saving Score of Game Mode ${gameMode} = ${score}`);
    localStorage.setItem(gameMode, String(score));
};

export interface gameDataType {
    score: number | null;
}

export const useGameData = (gameMode: GameModeTypes) => {
    const [data, setData] = useState<gameDataType>({
        score: null,
    });

    useEffect(() => {
        setData({ ...data, score: getScore(gameMode) });
    }, []);

    const incrementScore = (points: number) => {
        if (data.score == null) {
            setTimeout(() => incrementScore(points), 10);
            // console.log('Scores are being fetched from localStorage, Waiting');
        } else {
            setData((prev) => ({ ...prev, score: prev.score + points }));
            setScore(gameMode, data.score + points);
        }
    };

    return [data, incrementScore] as const;
};
