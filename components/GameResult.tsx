import { CharacterNames, Paper, Rock, Lizard, Scissors, Spock } from './Characters';

interface gameResultDialogInteraface {
    selectedCharacter?: CharacterNames;
    showDialog?: boolean;
    resetGameFunc?: () => any;
}

const GameResultDialog = ({ selectedCharacter, showDialog, resetGameFunc }: gameResultDialogInteraface) => (
    <div
        className={`${
            showDialog ? 'scale-100 opacity-100' : 'scale-0  opacity-0'
        } transform-gpu transition absolute w-full h-full grid grid-cols-2 grid-rows-2 tablet:grid-rows-1 tablet:grid-cols-3 gap-2`}
    >
        <div className="relative pt-2">
            <div className="absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Paper isClickable={false} />
            </div>
        </div>
        <div className="relative pt-2">
            <div className="absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Paper isClickable={false} />
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
