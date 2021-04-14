import { useState } from 'react'

const RulesModal = ({ showModal, setShowModal }) => {
  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <div
      className={`bg-white w-screen tablet:w-2/4 laptop:w-2/5 h-screen tablet:h-auto top-0 tablet:top-1/2 tablet:left-1/2 transform tablet:-translate-x-1/2 tablet:-translate-y-1/2 transition-all ${
        showModal ? 'scale - 100' : 'scale-0'
      } text-neutral-dark absolute rounded-none tablet:rounded`}
    >
      <div className='flex justify-between p-8 items-center'>
        <h2 className='text-3xl font-bold'>RULES</h2>
        <div onClick={handleClose} className='cursor-pointer'>
          <img src='/images/icon-close.svg' />
        </div>
      </div>
    </div>
  )
}

const Rules = () => {
  const [showModal, setShowModal] = useState(false)

  const handleChange = () => {
    setShowModal(true)
  }

  return (
    <div>
      <RulesModal showModal={showModal} setShowModal={setShowModal} />
      <div className='container-responsive mx-auto mt-5 flex justify-center tablet:justify-end'>
        <button
          onClick={handleChange}
          className='px-8 py-1.5 border-2 border-color-default transition tracking-widest hover:bg-white hover:text-neutral-dark rounded-lg'
        >
          RULES
        </button>
      </div>
    </div>
  )
}

export default Rules
