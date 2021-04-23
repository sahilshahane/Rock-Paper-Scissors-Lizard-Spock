import '../styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { createContext } from 'react';
import { useGameData } from 'hooks/useGameData';
import Footer from '../components/Footer';

export type GameModeTypes = 'easy' | 'hard' | null;

interface GameModes {
    gameMode: GameModeTypes;
}

export type defaultStaticProps = GameModes;

export const GameDataContext = createContext({
    score: null,
    incrementScore: null,
});

function MyApp({ Component, pageProps }: AppProps) {
    const { gameMode } = pageProps;
    const [gameData, incrementScore] = useGameData(gameMode);

    return (
        <GameDataContext.Provider value={{ ...gameData, incrementScore }}>
            <div className="fixed-background text-white tracking-wider">
                <Head>
                    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
                </Head>

                <Component {...pageProps} />

                <Footer />
            </div>
        </GameDataContext.Provider>
    );
}

export async function getStaticProps() {
    const props: defaultStaticProps = {
        gameMode: null,
    };

    return {
        props,
    };
}

export default MyApp;
