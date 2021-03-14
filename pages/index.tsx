import Head from "next/head";
import { Lizard, Paper, Rock, Scissors, Spock } from "../components/Characters";

const Home = () => {
  return (
    <div className="fixed-background text-white tracking-wider">
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />

        <title>Frontend Mentor | Rock, Paper, Scissors</title>
      </Head>

      <main>
        <Lizard />
        <br />
        <Paper />
        <br />
        <Rock />
        <br />
        <Scissors />
        <br />
        <Spock />
        {/* <img src="/images/icon-close.svg" /> */}
        {/* <img src="/images/image-rules-bonus.svg" />
        <img src="/images/image-rules.svg" />
        <img src="/images/logo-bonus.svg" />
        <img src="/images/logo.svg" /> */}
      </main>
      <footer className="relative bg-transparent z-10">
        <div className="text-center text-sm ">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH"
            target="_blank"
            className="text-pink-400"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/sahilbest999" className="text-pink-400">
            Sahil Shahane
          </a>
          .
        </div>
      </footer>
    </div>
  );
};
export default Home;
