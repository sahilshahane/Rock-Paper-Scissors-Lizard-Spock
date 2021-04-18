import { useReducer } from 'react';
import Head from 'next/head';
import { Paper, Rock, Scissors } from '../components/Characters';
import { defaultProps, defaultStaticProps, GameModes } from './_app';
import { useGameSettings } from '../hooks/useGameSettings';
import GameResultDialog from '../components/GameResult';

type characterNames = 'rock' | 'paper' | 'scissors';

interface easyModeInf extends defaultProps, GameModes {}
interface selectionState {
    selectedCharacter?: characterNames;
}

type reducerInterface = (
    // eslint-disable-next-line no-unused-vars
    state: selectionState,
    // eslint-disable-next-line no-unused-vars
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

const EasyMode = (props: easyModeInf) => {
    const { data, setData, gameMode } = props;
    const [state, dispatch] = useReducer(reducer, initialSelectionState);

    // CUSTOM HOOK BABY
    useGameSettings(props, setData);

    const HandleClick = (name: characterNames) => dispatch({ type: 'select', payload: name });

    const resetGame = () => dispatch({ type: 'reset' });

    return (
        <div>
            <Head>
                <title>Easy Mode | R.P.S</title>
            </Head>

            <GameResultDialog
                resetGameFunc={resetGame}
                selectedCharacter={state.selectedCharacter}
                enemyCharacter={getRandomCharacter()}
                showDialog={!!state.selectedCharacter}
            />

            <div
                className={`absolute transform-gpu top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                    state.selectedCharacter ? 'scale-0 opacity-0' : 'scale-100  opacity-100'
                } transition p-2 flex justify-center w-64 h-64 tablet:w-80 tablet:h-80`}
            >
                <div className="absolute left-0 p-8">
                    <img src="/images/bg-triangle.svg" alt="triangular background" />
                </div>

                <div className="transition transform-gpu absolute left-0">
                    <Paper onClick={HandleClick} />
                </div>
                <div className="transition transform-gpu absolute right-0">
                    <Scissors onClick={HandleClick} />
                </div>
                <div className="transition transform-gpu absolute bottom-0">
                    <Rock onClick={HandleClick} />
                </div>
            </div>
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
