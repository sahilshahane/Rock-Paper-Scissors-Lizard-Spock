import { useEffect, useState } from "react";

const getImageLocation = (gameMode: string) => {
  switch (gameMode) {
    case "easy":
      return "/images/logo.svg";
    case "hard":
      return "/images/logo-bonus.svg";
    default:
      return "/images/logo.svg";
  }
};

const ScoreBoard = ({ score, enabled }: any) => {
  const transition = `${enabled && "opacity-100"}`;

  return (
    <div
      className={`absolute flex flex-col justify-center right-0 transition-all h-full opacity-0 score bg-white px-5 mobileM:px-9 tabletM:px-11 ${transition}`}
    >
      <div className="score-text ">Score</div>
      <div className="text-3xl mobileM:text-4xl tabletM:text-5xl score-number ">
        {score ? score : 0}
      </div>
    </div>
  );
};

const EasyModeScoreBoard = ({ data }: any) => {
  const [isEnabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(data.gameMode === "easy");
  }, [data.gameMode]);

  return <ScoreBoard score={data.easyModeScore} enabled={isEnabled} />;
};

const HardModeScoreBoard = ({ data }: any) => {
  const [isEnabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(data.gameMode === "hard");
  }, [data.gameMode]);

  return <ScoreBoard score={data.easyModeScore} enabled={isEnabled} />;
};

const HeaderCard = ({ data }: any) => {
  const imgSrc = getImageLocation(data.gameMode);

  return (
    <div className="transition-all border-2 header border-gray-500 w-11/12 mobileM:w-5/6 tablet:w-3/5 mx-auto p-5 mt-5 tabletM:mt-9">
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
  );
};

export default HeaderCard;
