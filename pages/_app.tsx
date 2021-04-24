import '../styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { createContext } from 'react';
import { useGameData } from 'hooks/useGameData';
import Footer from '../components/Footer';
import { AnimatePresence, motion } from 'framer-motion';

export type GameModeTypes = 'easy' | 'hard' | null;

export type defaultStaticProps = {
    gameMode: GameModeTypes;
    title: string;
};

interface contextProps {
    score: number | null;
    incrementScore: (...arg) => void;
    gameMode: GameModeTypes;
}

export const GameDataContext = createContext<contextProps>({
    score: null,
    incrementScore: null,
    gameMode: null,
});

function MyApp({ Component, pageProps, router }: AppProps) {
    const { gameMode, title } = pageProps;
    const [gameData, incrementScore] = useGameData(gameMode);

    return (
        <GameDataContext.Provider value={{ ...gameData, gameMode, incrementScore }}>
            <div className="fixed-background text-white tracking-wider">
                <AnimatePresence>
                    <motion.div key={router.asPath} initial={{ x: '100vw' }} animate={{ x: 0 }} exit={{ x: '-100vw' }}>
                        <Head>
                            <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
                            {title && <title>{title}</title>}
                        </Head>
                        <div className="h-screen">
                            <Component {...pageProps} />
                        </div>
                        <Footer />
                    </motion.div>
                </AnimatePresence>
            </div>
        </GameDataContext.Provider>
    );
}

export async function getStaticProps() {
    const props: defaultStaticProps = {
        gameMode: null,
        title: 'Game Developed by Sahil Shahane',
    };

    return {
        props,
    };
}

export default MyApp;
