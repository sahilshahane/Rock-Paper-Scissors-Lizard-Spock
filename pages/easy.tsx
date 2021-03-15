import { Lizard, Paper, Rock, Scissors, Spock } from "../components/Characters";
import Head from "next/head";
import { useEffect } from "react";

const EasyMode = ({ data, setData }: any) => {
  useEffect(() => setData({ ...data, gameMode: "easy" }), []);

  return (
    <div>
      <Head>
        <title>Easy Mode | R.P.S</title>
      </Head>
    </div>
  );
};

export default EasyMode;
