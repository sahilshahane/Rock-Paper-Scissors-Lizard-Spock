import { CharacterNames, Paper, Rock, Lizard, Scissors, Spock } from './Characters';

interface gameResultDialogInteraface {
    selectedCharacter: CharacterNames;
    enemyCharacter: CharacterNames;
    showDialog?: boolean;
    resetGameFunc?: () => any;
}

const getCharacter = (name: CharacterNames) => {
    let Character: any;

    const tempDiv = () => <div />;

    console.log(name);
    // eslint-disable-next-line default-case
    switch (name) {
        case 'rock':
            Character = Rock;
            break;
        case 'paper':
            Character = Paper;
            break;
        case 'scissors':
            Character = Scissors;
            break;
        case 'lizard':
            Character = Lizard;
            break;
        case 'spock':
            Character = Spock;
            break;
        default:
            Character = tempDiv;
    }

    return <Character isClickable={false} size="xl" />;
};

const GameResultDialog = ({
    selectedCharacter,
    showDialog,
    resetGameFunc,
    enemyCharacter,
}: gameResultDialogInteraface) => (
    <div
        className={`${
            showDialog ? 'scale-100 opacity-100' : 'scale-0  opacity-0'
        } container-responsive right-0 left-0 mx-auto transform-gpu transition absolute w-full h-full grid grid-cols-2 grid-rows-2 tablet:grid-rows-1 tablet:grid-cols-3 gap-2`}
    >
        <div className="relative">
            <div className="abs-center flex flex-col tablet:flex-col-reverse items-center text-center">
                {getCharacter(selectedCharacter)}
                <span className="py-2 text-lg whitespace-nowrap tracking-wider tablet:tracking-wide-0.2">
                    YOU PICKED
                </span>
            </div>
        </div>

        <div className="relative">
            <div className="abs-center flex flex-col tablet:flex-col-reverse items-center text-center">
                {getCharacter(enemyCharacter)}
                <span className="py-2 text-lg whitespace-nowrap tracking-wider tablet:tracking-wide-0.2">
                    THE HOUSE PICKED
                </span>
            </div>
        </div>
        <div className="row-end-3 col-span-2 m-auto tablet:col-span-1 tablet:col-start-2 tablet:row-start-1">
            <h2 className="transition transform tracking-wide flex flex-col text-center">
                <span className="text-5xl mb-4">YOU WIN</span>

                <button
                    type="button"
                    onClick={resetGameFunc}
                    className="transition px-14 py-3 duration-200 tracking-widest hover:border hover:text-rose-500 bg-white rounded-lg text-neutral-dark"
                >
                    PLAY AGAIN
                </button>
            </h2>
        </div>
    </div>
);

export default GameResultDialog;
