import { Dispatch, FC, useReducer } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { AnimatePresence, motion, MotionProps } from 'framer-motion';
import { Paper, Rock, Scissors, Lizard, Spock } from '../components/Characters';
import { defaultStaticProps, GameModeTypes } from './_app';
import GameResultDialog from '../components/GameResult';
import HeaderCard from '../components/HeaderCard';
import RulesSection from '../components/RulesSection';

type characterNames = 'rock' | 'paper' | 'scissors' | 'spock' | 'lizard';

interface HardModeProps {
    gameMode: GameModeTypes;
}

interface selectionState {
    selectedCharacter?: characterNames;
    enemyCharacter?: characterNames;
}

type reducerInterface = (
    state: selectionState,
    action: {
        type: 'select' | 'reset';
        payload?: characterNames;
    },
) => selectionState;

const initialSelectionState: selectionState = {};

const CharacterNameArray: characterNames[] = ['paper', 'rock', 'scissors'];

const getRandomCharacter = () => CharacterNameArray[Math.floor(Math.random() * CharacterNameArray.length)];

const reducer: reducerInterface = (state, action) => {
    const newState: selectionState = {};
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'select':
            newState.selectedCharacter = action.payload;
            newState.enemyCharacter = getRandomCharacter();
            break;
        case 'reset':
            newState.selectedCharacter = undefined;
            newState.enemyCharacter = undefined;
            break;
    }
    // console.log('You Clicked on ' + action.payload, state)
    return { ...state, ...newState };
};

interface CharacterSelectionProps {
    dispatch: Dispatch<{
        type: 'select' | 'reset';
        payload?: characterNames;
    }>;

    isVisible: boolean;
}

const defaultAnimationStyle: MotionProps = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
    transition: { duration: 0.2 },
};

const CharacterSelection: FC<CharacterSelectionProps> = ({ dispatch, isVisible }) => {
    const HandleClick = (name: characterNames) => {
        dispatch({ type: 'select', payload: name });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div {...defaultAnimationStyle}>
                    <div className="relative mx-auto flex justify-center w-80 h-80 tablet:w-96 tablet:h-96 ">
                        <div className="absolute left-0 p-8">
                            <img src="/images/bg-pentagon.svg" alt="pentagon shape background" />
                        </div>

                        <div className="absolute top-0 mx-auto">
                            <Scissors onClick={HandleClick} />
                        </div>

                        <div className="absolute transform top-1/2 -translate-y-1/2 w-full flex justify-between">
                            <div className="transform -translate-y-1/4">
                                <Spock onClick={HandleClick} />
                            </div>
                            <div className="transform -translate-y-1/4">
                                <Paper onClick={HandleClick} />
                            </div>
                        </div>

                        <div className="absolute bottom-0 w-full flex justify-evenly">
                            <div>
                                <Lizard onClick={HandleClick} />
                            </div>
                            <div>
                                <Rock onClick={HandleClick} />
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const DivCenter: FC = ({ children }) => (
    <div className="container-responsive transform-gpu absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {children}
    </div>
);

const HardMode: FC<HardModeProps> = ({ gameMode }) => {
    const [state, dispatch] = useReducer(reducer, initialSelectionState);

    const resetGame = () => dispatch({ type: 'reset' });

    return (
        <div className="relative select-none h-screen flex flex-col justify-between">
            <HeaderCard />
            <div className="relative w-full h-full">
                <DivCenter>
                    <GameResultDialog
                        resetGameFunc={resetGame}
                        selectedCharacter={state.selectedCharacter}
                        enemyCharacter={state.enemyCharacter}
                    />
                </DivCenter>

                <DivCenter>
                    <CharacterSelection isVisible={!state.selectedCharacter} dispatch={dispatch} />
                </DivCenter>
            </div>
            <RulesSection />
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const props: defaultStaticProps = {
        gameMode: 'hard',
        title: 'Hard Mode | R.P.S.S.L',
    };

    return {
        props,
    };
};

export default HardMode;
