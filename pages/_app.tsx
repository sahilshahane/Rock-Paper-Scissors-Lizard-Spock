import '../styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Footer from '../components/Footer';
import HeaderCard from '../components/HeaderCard';
import RulesSection from '../components/RulesSection';

export type GameModeTypes = 'easy' | 'hard' | null;

interface GameModes {
    gameMode: GameModeTypes;
}

export type defaultStaticProps = GameModes;

function MyApp({ Component, pageProps }: AppProps) {
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
                <HeaderCard gameMode={pageProps.gameMode} />
                <div className="relative w-full h-full">
                    <Component {...pageProps} />
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
