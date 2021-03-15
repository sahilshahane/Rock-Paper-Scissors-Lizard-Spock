import { Lizard, Paper, Rock, Scissors, Spock } from "../components/Characters";
import Head from "next/head";
import {
  defaultProps,
  defaultStaticProps,
  GameData,
  GameModes,
} from "../pages/_app";
import { useGameSettings } from "../hooks/useGameSettings";

interface easyModeInf extends defaultProps, GameModes {}

const EasyMode = (props: easyModeInf) => {
  const { data, setData, gameMode } = props;
  useGameSettings(props, setData);
  return (
    <div>
      <Head>
        <title>Easy Mode | R.P.S</title>
      </Head>
    </div>
  );
};

export async function getStaticProps(context) {
  const props: defaultStaticProps = {
    gameMode: "easy",
  };

  return {
    props,
  };
}

export default EasyMode;
