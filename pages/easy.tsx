import { Dispatch, FC, useReducer } from 'react';
import Head from 'next/head';
import { AnimatePresence, motion, MotionProps } from 'framer-motion';
import { Paper, Rock, Scissors } from '../components/Characters';
import { defaultStaticProps, GameModeTypes } from './_app';
import GameResultDialog from '../components/GameResult';

type characterNames = 'rock' | 'paper' | 'scissors';

interface easyModeInf {
    gameMode: GameModeTypes;
}

interface selectionState {
    selectedCharacter?: characterNames;
}

type reducerInterface = (
    state: selectionState,
    action: {
        type: 'select' | 'reset';
        payload?: characterNames;
    },
) => selectionState;

const reducer: reducerInterface = (state, action) => {
    const newState: selectionState = {};
    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'select':
            newState.selectedCharacter = action.payload;
            break;
        case 'reset':
            newState.selectedCharacter = undefined;
            break;
    }
    // console.log('You Clicked on ' + action.payload, state)
    return { ...state, ...newState };
};

const initialSelectionState: selectionState = {};

const CharacterNameArray: characterNames[] = ['paper', 'rock', 'scissors'];

const getRandomCharacter = () => CharacterNameArray[Math.floor(Math.random() * CharacterNameArray.length)];

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
                    <div className="relative mx-auto p-2 flex justify-center w-64 h-64 tablet:w-80 tablet:h-80">
                        <div className="absolute left-0 p-8">
                            <img src="/images/bg-triangle.svg" alt="triangular background" />
                        </div>

                        <div className="absolute left-0">
                            <Paper onClick={HandleClick} />
                        </div>
                        <div className="absolute right-0">
                            <Scissors onClick={HandleClick} />
                        </div>
                        <div className="absolute bottom-0">
                            <Rock onClick={HandleClick} />
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

const EasyMode: FC<easyModeInf> = ({ gameMode }) => {
    const [state, dispatch] = useReducer(reducer, initialSelectionState);

    const resetGame = () => dispatch({ type: 'reset' });

    return (
        <div>
            <Head>
                <title>Easy Mode | R.P.S</title>
            </Head>
            <DivCenter>
                <GameResultDialog
                    resetGameFunc={resetGame}
                    selectedCharacter={state.selectedCharacter}
                    enemyCharacter={getRandomCharacter()}
                    gameMode={gameMode}
                />
            </DivCenter>

            <DivCenter>
                <CharacterSelection isVisible={!state.selectedCharacter} dispatch={dispatch} />
            </DivCenter>
        </div>
    );
};

export async function getStaticProps() {
    const props: defaultStaticProps = {
        gameMode: 'easy',
    };

    return {
        props,
    };
}

export default EasyMode;
