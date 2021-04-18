interface resetGameProps {
  resetGameFunc?: () => any
}

const ResetGame = ({ resetGameFunc }: resetGameProps) => {
  return (
    <div>
      <h2
        className={`transition transform tracking-wide flex flex-col text-center`}
      >
        <span className='text-5xl mb-4'>YOU WIN</span>

        <button
          onClick={resetGameFunc}
          className='transition px-14 py-3 duration-200 tracking-widest hover:border hover:text-rose-500 bg-white rounded-lg text-neutral-dark'
        >
          PLAY AGAIN
        </button>
      </h2>
    </div>
  )
}

export default ResetGame
