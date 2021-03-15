import "../styles/globals.css";
import Footer from "../components/Footer";
import HeaderCard from "../components/HeaderCard";
import Head from "next/head";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const [data, setData] = useState({
    gameMode: null,
    easyModeScore: null,
    hardModeScore: null,
  });

  return (
    <div className="fixed-background text-white tracking-wider">
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
      </Head>

      <HeaderCard data={data} />
      <div className="container-resp">
        <Component {...pageProps} data={data} setData={setData} />
      </div>

      <Footer />
    </div>
  );
}

export default MyApp;
