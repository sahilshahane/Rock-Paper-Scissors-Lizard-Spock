import { useEffect, useState } from 'react';
import { GameData } from '../pages/_app';

const getImageLocation = (gameMode: string) => {
    switch (gameMode) {
        case 'easy':
            return '/images/logo.svg';
        case 'hard':
            return '/images/logo-bonus.svg';
        default:
            return '/images/logo.svg';
    }
};

const ScoreBoard = ({ score, enabled }: any) => {
    const transition = `${enabled && 'opacity-100'}`;

    return (
        <div
            className={`absolute flex flex-col justify-center right-0 transition-all duration-300 h-full opacity-0 score bg-white px-5  ${transition}`}
        >
            <div className="score-text ">Score</div>
            <div className="text-3xl mobileM:text-4xl tabletM:text-5xl w-14 mobileM:w-20 tabletM:w-24 score-number ellipsis">
                {score || 0}
            </div>
        </div>
    );
};

const EasyModeScoreBoard = ({ data }: { data: GameData }) => {
    const [isEnabled, setEnabled] = useState(false);

    useEffect(() => {
        setEnabled(data.gameMode === 'easy');
    }, [data.gameMode]);

    return <ScoreBoard score={data.easyModeScore} enabled={isEnabled} />;
};

const HardModeScoreBoard = ({ data }: any) => {
    const [isEnabled, setEnabled] = useState(false);

    useEffect(() => {
        setEnabled(data.gameMode === 'hard');
    }, [data.gameMode]);

    return <ScoreBoard score={data.easyModeScore} enabled={isEnabled} />;
};

const HeaderCard = ({ data }: any) => {
    const imgSrc = getImageLocation(data.gameMode);

    return (
        <div className="p-2 tablet:p-5">
            <div className="container-responsive mx-auto transition-all border-2 header border-gray-500 w-11/12 tabletM:w-4/5 tablet:w-3/5 p-5">
                <div className="grid grid-cols-2">
                    <div>
                        <img src={imgSrc} alt={data.gameMode} className="flex-shrink-0" />
                    </div>
                    <div className="text-center relative">
                        <EasyModeScoreBoard data={data} />
                        <HardModeScoreBoard data={data} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderCard;
