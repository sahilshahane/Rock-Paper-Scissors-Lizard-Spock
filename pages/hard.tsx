import { Lizard, Paper, Rock, Scissors, Spock } from "../components/Characters";
import Head from "next/head";
import { useEffect } from "react";

const EasyMode = ({ data, setData }: any) => {
  useEffect(() => setData({ ...data, gameMode: "hard" }), []);

  return (
    <div>
      <Head>
        <title>Hard Mode | R.P.S.L.S</title>
      </Head>
      <Lizard />
      <p></p>
    </div>
  );
};

export default EasyMode;
