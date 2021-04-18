import Head from 'next/head';
import { useEffect } from 'react';
import Link from 'next/link';
import { defaultProps } from './_app';

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
                    <button type="button" className="p-3 border-2 border-white">
                        Easy
                    </button>
                </Link>
                <Link href="/hard">
                    <button type="button" className="p-3 border-2 border-white">
                        hard
                    </button>
                </Link>
            </main>
        </div>
    );
};

export default Home;
