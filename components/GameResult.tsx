import React from 'react'
import {
  CharacterNames,
  Paper,
  Rock,
  Lizard,
  Scissors,
  Spock,
} from './Characters'
import ResetGameDialog from './ResetGame'

interface gameResultDialogInteraface {
  selectedCharacter?: CharacterNames
  showDialog?: boolean
  resetGameFunc?: () => any
}

const GameResultDialog = ({
  selectedCharacter,
  showDialog,
  resetGameFunc,
}: gameResultDialogInteraface) => {
  return (
    // <div
    //   className={`${
    //     showDialog ? 'scale-100 opacity-100' : 'scale-0  opacity-0'
    //   } transform-gpu transition absolute w-full h-full flex items-center justify-around flex-row`}
    // >
    //   <div className='w-64 h-64 bg-rose-200'>
    //     <Paper />
    //   </div>
    //   <div className='invisible tablet:visible w-0 tablet:w-auto'>
    //     <ResetGameDialog resetGameFunc={resetGameFunc} />
    //   </div>
    //   <div className='w-64 h-64 bg-rose-200'>
    //     <Paper />
    //   </div>
    //   {/* <div className='visible tablet:invisible w-auto tablet:w-0'>
    //     <ResetGameDialog resetGameFunc={resetGameFunc} />
    //   </div> */}
    // </div>

    <div
      className={`${
        showDialog ? 'scale-100 opacity-100' : 'scale-0  opacity-0'
      } transform-gpu transition absolute w-full h-full grid grid-cols-2 grid-rows-2 tablet:grid-rows-1 tablet:grid-cols-3 auto-cols-auto gap-2 pt-2`}
    >
      <div className='w-full f-full bg-white bg-opacity-50'>
        <Paper />
      </div>
      <div className='row-end-3 col-span-2 m-auto tablet:col-span-1 tablet:row-end-auto'>
        <ResetGameDialog resetGameFunc={resetGameFunc} />
      </div>
      <div className='w-full f-full bg-white bg-opacity-50 '>
        <Paper />
      </div>
    </div>
  )
}

export default GameResultDialog
