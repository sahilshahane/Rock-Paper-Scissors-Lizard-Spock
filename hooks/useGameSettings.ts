import { Dispatch, SetStateAction, useEffect } from "react";
import { defaultProps, defaultStaticProps, GameData } from "../pages/_app";

export interface Props extends defaultStaticProps, defaultProps {}

export const useGameSettings = (
  props: Props,
  setData: Dispatch<SetStateAction<GameData>>
) => {
  useEffect(() => {
    const { gameMode } = props;
    setData((prev) => ({ ...prev, gameMode }));
  }, []);
};
