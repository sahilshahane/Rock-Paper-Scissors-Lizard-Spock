import { GameModeTypes } from 'pages/_app';
import { useEffect, useState } from 'react';
import { CharacterNames, Paper, Rock, Lizard, Scissors, Spock } from './Characters';

interface gameResultDialogInteraface {
    selectedCharacter: CharacterNames;
    enemyCharacter: CharacterNames;
    showDialog?: boolean;
    resetGameFunc?: () => any;
    gameMode: GameModeTypes;
}

const getCharacter = (name: CharacterNames, isHidden = false) => {
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

    return SELECTED_CHARACTER ? <SELECTED_CHARACTER isHidden={isHidden} isClickable={false} size="xl" /> : <div />;
};

const getResultStatus = (player1: CharacterNames, player2: CharacterNames) => {
    let status = 'YOU LOST';

    if (player1 === 'rock' && player2 === 'scissors') status = 'YOU WON';
    else if (player1 === 'scissors' && player2 === 'paper') status = 'YOU WON';
    else if (player1 === 'paper' && player2 === 'rock') status = 'YOU WON';
    else if (player1 === player2) status = 'DRAW';

    return status;
};

const saveResultToDatabase = (gameMode: GameModeTypes) => {
    if (gameMode === 'easy') {
        console.log('Saving Easy Game Mode Scores...');
    } else if (gameMode === 'hard') {
        console.log('Saving Hard Game Mode Scores...');
    }
};

const GameResultDialog = ({
    selectedCharacter,
    showDialog,
    resetGameFunc,
    enemyCharacter,
    gameMode,
}: gameResultDialogInteraface) => {
    const [showCharacters, setShowCharacters] = useState(false);
    const [isDialogVisible, setIsDialogVisible] = useState(false);

    const handlePlayAgain = () => {
        setIsDialogVisible(false); // Close the dialog
        setTimeout(() => resetGameFunc(), 200); // 200ms delay to reset the game after the dialog is closed
    };
    useEffect(() => {
        saveResultToDatabase(gameMode);
    }, []);

    useEffect(() => {
        setIsDialogVisible(showDialog);
        setTimeout(() => setShowCharacters(!!selectedCharacter), 100); // 100ms DELAY TO SHOW CHARACTERS, although the result will be visible
    }, [showDialog]);

    return (
        <div
            className={`${
                isDialogVisible ? 'scale-100' : 'scale-0 opacity-0'
            } container-responsive right-0 left-0 mx-auto transform-gpu transition absolute w-full h-full grid grid-cols-2 grid-rows-2 tablet:grid-rows-1 tablet:grid-cols-3 gap-2`}
        >
            <div className="relative">
                <div className="abs-center flex flex-col tablet:flex-col-reverse items-center text-center">
                    {getCharacter(selectedCharacter, !showCharacters)}
                    <span className="py-2 text-lg whitespace-nowrap tracking-wider tablet:tracking-wide-0.2">
                        YOU PICKED
                    </span>
                </div>
            </div>

            <div className="relative">
                <div className="abs-center flex flex-col tablet:flex-col-reverse items-center text-center">
                    {getCharacter(enemyCharacter, !showCharacters)}
                    <span className="py-2 text-lg whitespace-nowrap tracking-wider tablet:tracking-wide-0.2">
                        THE HOUSE PICKED
                    </span>
                </div>
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
    );
};
export default GameResultDialog;
