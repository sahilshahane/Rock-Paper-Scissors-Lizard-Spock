import { Paper, Rock, Scissors } from '../components/Characters'
import Head from 'next/head'
import {
  defaultProps,
  defaultStaticProps,
  GameData,
  GameModes,
} from '../pages/_app'
import { useGameSettings } from '../hooks/useGameSettings'
import { useEffect, useReducer, useRef } from 'react'

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
  const newState: selectionState = {}
  switch (action.type) {
    case 'select':
      newState[action.payload] = true //TOTALLY UN-NECESSARY STEP BUT REQUIRED FOR FUTURE EXPANSION
      state.isSelected = true
    case 'reset':
      newState.isSelected = false
  }
  console.log('You Clicked on ' + action.payload, state)
  return { ...state, newState }
}

interface selectionState {
  rock?: boolean
  paper?: boolean
  scissors?: boolean
  isSelected?: boolean
}

const initialSelectionState_: selectionState = {}

const EasyMode = (props: easyModeInf) => {
  const { data, setData, gameMode } = props
  const GameButtonRefs = useRef({})

  const [state, dispatch] = useReducer(reducer, initialSelectionState_)

  // CUSTOM HOOK BABY
  useGameSettings(props, setData)

  const HandleClick = (name: CharacterNames) =>
    dispatch({ type: 'select', payload: name })

  useEffect(() => {
    console.log('State Changed', state)
  }, [state, dispatch])

  return (
    <div>
      <Head>
        <title>Easy Mode | R.P.S</title>
      </Head>
      <div
        className={`${
          state.isSelected ? 'scale-0 rotate-180' : 'scale-100'
        } transform-gpu transition relative mx-auto m-8 p-2 flex justify-center w-64 h-64 tablet:w-80 tablet:h-80`}
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
