import { Lizard, Paper, Rock, Scissors, Spock } from '../components/Characters';
import Head from 'next/head';
import { useEffect } from 'react';
import { defaultStaticProps } from './_app';

const HardMode = ({ data, setData }: any) => {
    useEffect(() => setData({ ...data, gameMode: 'hard' }), []);

    return (
        <div>
            <Head>
                <title>Hard Mode | R.P.S.L.S</title>
            </Head>
        </div>
    );
};

export default HardMode;

export async function getStaticProps() {
    const props: defaultStaticProps = {
        gameMode: 'hard',
    };

    return {
        props,
    };
}
