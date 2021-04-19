import '../styles/globals.css';
import { Dispatch, SetStateAction } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Footer from '../components/Footer';
import HeaderCard from '../components/HeaderCard';
import { useGameData } from '../hooks/useGameData';
import RulesSection from '../components/RulesSection';

export type GameModeTypes = 'easy' | 'hard' | null;

interface GameModes {
    gameMode: GameModeTypes;
}

export type defaultStaticProps = GameModes;

export interface GameData extends GameModes {
    easyModeScore?: number | null;
    hardModeScore?: number | null;
}

export interface defaultProps {
    data: GameData;
    setData: Dispatch<SetStateAction<GameData>>;
}

function MyApp({ Component, pageProps }: AppProps) {
    const [data, setData] = useGameData();
    // const router = useRouter()

    // useEffect(() => {
    //   console.log('Changing...')
    // }, [router.asPath])
    return (
        <div className="fixed-background text-white tracking-wider">
            <Head>
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
            </Head>

            <div className="relative select-none h-screen flex flex-col justify-between">
                <HeaderCard data={data} />
                <div className="relative w-full h-full">
                    <Component {...pageProps} data={data} setData={setData} />
                </div>

                <RulesSection gameMode={pageProps.gameMode} />
            </div>
            <Footer />
        </div>
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
