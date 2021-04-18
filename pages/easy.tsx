import { Paper, Rock, Scissors } from '../components/Characters'
import Head from 'next/head'
import {
  defaultProps,
  defaultStaticProps,
  GameData,
  GameModes,
} from '../pages/_app'
import { useGameSettings } from '../hooks/useGameSettings'
import { useEffect, useReducer, useRef, useState } from 'react'
import GameResultDialog from '../components/GameResult'

type CharacterNames = 'rock' | 'paper' | 'scissors'

interface easyModeInf extends defaultProps, GameModes {}

type reducerInterface = (
  state: selectionState,
  action: {
    type: 'select' | 'reset'
    payload?: CharacterNames
  }
) => selectionState

const characters: CharacterNames[] = ['rock', 'paper', 'scissors']

const reducer: reducerInterface = (state, action) => {
  switch (action.type) {
    case 'select':
      state.selectedCharacter = action.payload
      break
    case 'reset':
      delete state.selectedCharacter
      break
  }
  // console.log('You Clicked on ' + action.payload, state)
  return { ...state }
}

interface selectionState {
  selectedCharacter?: CharacterNames
}

const initialSelectionState_: selectionState = {}

const EasyMode = (props: easyModeInf) => {
  const { data, setData, gameMode } = props
  const [state, dispatch] = useReducer(reducer, initialSelectionState_)

  // CUSTOM HOOK BABY
  useGameSettings(props, setData)

  const HandleClick = (name: CharacterNames) =>
    dispatch({ type: 'select', payload: name })

  const resetGame = () => dispatch({ type: 'reset' })
  const [showResult, setShowResult] = useState(true)

  return (
    <div>
      <Head>
        <title>Easy Mode | R.P.S</title>
      </Head>

      <GameResultDialog
        resetGameFunc={resetGame}
        selectedCharacter={state.selectedCharacter}
        showDialog={!!state.selectedCharacter}
      />

      <div
        className={`absolute transform-gpu top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
          !!state.selectedCharacter
            ? 'scale-0 opacity-0'
            : 'scale-100  opacity-100'
        } transition p-2 flex justify-center w-64 h-64 tablet:w-80 tablet:h-80`}
      >
        <div className='absolute left-0 p-8'>
          <img src='/images/bg-triangle.svg' />
        </div>

        <div className='transition transform-gpu absolute left-0'>
          <Paper onClick={HandleClick} />
        </div>
        <div className='transition transform-gpu absolute right-0'>
          <Scissors onClick={HandleClick} />
        </div>
        <div className='transition transform-gpu absolute bottom-0'>
          <Rock onClick={HandleClick} />
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const props: defaultStaticProps = {
    gameMode: 'easy',
  }

  return {
    props,
  }
}

export default EasyMode
