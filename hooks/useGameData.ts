/* eslint-disable import/prefer-default-export */
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { GameData } from '../pages/_app';

const getScore = (gameModeScore: 'easyModeScore' | 'hardModeScore') => {
    const score = localStorage.getItem(gameModeScore);

    if (score == null) return 0;

    return Number(score);
};

export const useGameData = () => {
    const [data, setData]: [GameData, Dispatch<SetStateAction<GameData>>] = useState({
        gameMode: null,
        easyModeScore: null,
        hardModeScore: null,
    });

    useEffect(() => {
        // FIRST PRIORITY IS EASY-MODE ASYNC LOADING!
        (async () =>
            setData((prev) => ({
                ...prev,
                easyModeScore: getScore('easyModeScore'),
            })))();

        // SECOND PRIORITY IS HARD-MODE ASYNC LOADING!
        (async () =>
            setData((prev) => ({
                ...prev,
                hardModeScore: getScore('hardModeScore'),
            })))();

        // EASIER WAY BUT NAHHH
        // setData((prev) => ({
        //   ...prev,
        //   easyModeScore: getScore("easyModeScore"),
        //   hardModeScore: getScore("hardModeScore"),
        // }));
        console.log('Done Loading Scores!', data);
    }, []);

    return [data, setData];
};
