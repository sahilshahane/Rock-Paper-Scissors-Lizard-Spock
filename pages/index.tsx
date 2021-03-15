import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Home = ({ data, setData }: any) => {
  const router = useRouter();
  useEffect(() => setData({ ...data, gameMode: null }), []);
  return (
    <div>
      <Head>
        <title>Frontend Mentor | Rock, Paper, Scissors</title>
      </Head>

      <main>
        <button
          className="p-3 border-2 border-white"
          onClick={() => router.push("/easy")}
        >
          Easy
        </button>
        <button
          className="p-3 border-2 border-white"
          onClick={() => router.push("/hard")}
        >
          Hard
        </button>
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
