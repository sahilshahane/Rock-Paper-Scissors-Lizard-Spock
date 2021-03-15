import Head from "next/head";
import { useEffect } from "react";
import Link from "next/link";
import { defaultProps, GameData } from "./_app";

const Home = ({ data, setData }: defaultProps) => {
  useEffect(() => {
    setData({ ...data, gameMode: null });
  }, []);

  return (
    <div>
      <Head>
        <title>Frontend Mentor | Rock, Paper, Scissors</title>
      </Head>

      <main>
        <Link href="/easy">
          <button className="p-3 border-2 border-white">
            <a>Easy</a>
          </button>
        </Link>
        <Link href="/hard">
          <button className="p-3 border-2 border-white">
            <a>hard</a>
          </button>
        </Link>
        {/* <img src="/images/icon-close.svg" /> */}
        {/* <img src="/images/image-rules-bonus.svg" />
        <img src="/images/image-rules.svg" />
        <img src="/images/logo-bonus.svg" />
        <img src="/images/logo.svg" /> */}
      </main>
    </div>
  );
};

export default Home;
