import { FC, useContext } from 'react';
import { GameDataContext, GameModeTypes } from '../pages/_app';

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

const HeaderCard: FC = () => {
    const { gameMode } = useContext(GameDataContext);
    const imgSrc = getImageLocation(gameMode);
    const { score } = useContext(GameDataContext);

    return (
        <div className="p-2 tablet:p-5">
            <div className="container-responsive mx-auto border-2 rounded-2xl border-neutral-header w-11/12 tabletM:w-4/5 tablet:w-3/5 p-5">
                <div className="grid grid-cols-2">
                    <div>
                        <img src={imgSrc} alt={`${score}`} className="flex-shrink-0" />
                    </div>
                    <div className="text-center relative">
                        <div className="absolute flex flex-col justify-center right-0 h-full rounded-lg bg-white px-5">
                            <div className="text-neutral-score">Score</div>
                            <div className="text-3xl mobileM:text-4xl tabletM:text-5xl w-14 mobileM:w-20 tabletM:w-24 text-neutral-dark ellipsis">
                                {score == null ? '...' : score}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderCard;
