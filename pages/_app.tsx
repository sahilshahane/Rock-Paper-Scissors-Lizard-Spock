import '../styles/globals.css'
import Footer from '../components/Footer'
import HeaderCard from '../components/HeaderCard'
import Head from 'next/head'
import { useGameData } from '../hooks/useGameData'
import { AppProps } from 'next/app'
import { Dispatch, SetStateAction } from 'react'
import RulesSection from '../components/RulesSection'
export interface GameModes {
  gameMode: 'easy' | 'hard' | null
}

export interface defaultStaticProps extends GameModes {}

export interface GameData extends GameModes {
  easyModeScore?: number | null
  hardModeScore?: number | null
}

export interface defaultProps {
  data: GameData
  setData: Dispatch<SetStateAction<GameData>>
}

function MyApp({ Component, pageProps }: AppProps) {
  const [data, setData] = useGameData()

  return (
    <div className='fixed-background text-white tracking-wider'>
      <Head>
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/images/favicon-32x32.png'
        />
      </Head>

      <div className='h-screen'>
        <HeaderCard data={data} />
        <Component {...pageProps} data={data} setData={setData} />
        <RulesSection />
      </div>
      <Footer />
    </div>
  )
}

export async function getStaticProps(context) {
  const props: defaultStaticProps = {
    gameMode: null,
  }

  return {
    props,
  }
}

export default MyApp
