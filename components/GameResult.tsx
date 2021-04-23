import { FC, useEffect } from 'react';
import { AnimatePresence, motion, MotionProps } from 'framer-motion';
import { useGameData } from 'hooks/useGameData';
import { GameModeTypes } from 'pages/_app';
import { CharacterNames, Paper, Rock, Lizard, Scissors, Spock } from './Characters';

const defaultAnimationStyle: MotionProps = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
    transition: { duration: 0.2 },
};

const getCharacter = (name: CharacterNames) => {
    let SELECTED_CHARACTER: any;

    switch (name) {
        case 'rock':
            SELECTED_CHARACTER = Rock;
            break;
        case 'paper':
            SELECTED_CHARACTER = Paper;
            break;
        case 'scissors':
            SELECTED_CHARACTER = Scissors;
            break;
        case 'lizard':
            SELECTED_CHARACTER = Lizard;
            break;
        case 'spock':
            SELECTED_CHARACTER = Spock;
            break;
        default:
            SELECTED_CHARACTER = null;
    }

    return SELECTED_CHARACTER ? <SELECTED_CHARACTER isClickable={false} size="xl" /> : <div />;
};

const getResultStatus = (player1: CharacterNames, player2: CharacterNames) => {
    let status: 'YOU WON' | 'YOU LOST' | 'DRAW' = 'YOU LOST';

    if (player1 === 'rock' && player2 === 'scissors') status = 'YOU WON';
    else if (player1 === 'scissors' && player2 === 'paper') status = 'YOU WON';
    else if (player1 === 'paper' && player2 === 'rock') status = 'YOU WON';
    else if (player1 === player2) status = 'DRAW';

    return status;
};

interface gameResultProps {
    selectedCharacter: CharacterNames;
    enemyCharacter: CharacterNames;
    resetGameFunc?: () => any;
    gameMode: GameModeTypes;
}

const GameResultDialog: FC<gameResultProps> = ({ selectedCharacter, resetGameFunc, enemyCharacter, gameMode }) => {
    const [gameData, increamentScore] = useGameData(gameMode);

    const handlePlayAgain = () => {
        resetGameFunc();
    };

    useEffect(() => {
        if (selectedCharacter) {
            const result = getResultStatus(selectedCharacter, enemyCharacter);
            // eslint-disable-next-line default-case
            switch (result) {
                case 'YOU WON':
                    increamentScore(1);
                    break;

                case 'YOU LOST':
                    increamentScore(-1);
                    break;
            }
        }
    }, [selectedCharacter]);

    return (
        <AnimatePresence>
            {selectedCharacter && (
                <motion.div {...defaultAnimationStyle}>
                    <div className="grid grid-cols-2 grid-rows-2 tablet:grid-rows-1 tablet:row-span-2 tablet:grid-cols-3 gap-2">
                        <div className="flex flex-col tablet:flex-col-reverse items-center text-center">
                            {getCharacter(selectedCharacter)}
                            <span className="py-2 text-lg whitespace-nowrap tracking-wider tablet:tracking-wide-0.2">
                                YOU PICKED
                            </span>
                        </div>
                        <div className="flex flex-col tablet:flex-col-reverse items-center text-center">
                            {getCharacter(enemyCharacter)}
                            <span className="py-2 text-lg whitespace-nowrap tracking-wider tablet:tracking-wide-0.2">
                                THE HOUSE PICKED
                            </span>
                        </div>

                        <div className="row-end-3 col-span-2 m-auto tablet:col-span-1 tablet:col-start-2 tablet:row-start-1">
                            <h2 className="transform tracking-wide flex flex-col text-center">
                                <span className="text-5xl uppercase mb-4">
                                    {getResultStatus(selectedCharacter, enemyCharacter)}
                                </span>

                                <button
                                    type="button"
                                    onClick={handlePlayAgain}
                                    className="transition px-14 py-3 duration-200 tracking-widest hover:border hover:text-rose-500 bg-white rounded-lg text-neutral-dark"
                                >
                                    PLAY AGAIN
                                </button>
                            </h2>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
export default GameResultDialog;
