import { MutableRefObject, useRef, useState } from 'react'

type CharacterNames = 'spock' | 'scissors' | 'rock' | 'paper' | 'lizard'
type onCharacterClick = (name: CharacterNames) => any

interface defaultCharacterProps {
  isHidden?: boolean
  onClick: onCharacterClick
}

export const Spock = (props: defaultCharacterProps) => {
  return makeCharacter({
    src: '/images/icon-spock.svg',
    name: 'spock',
    ...props,
  })
}
export const Scissors = (props: defaultCharacterProps) => {
  return makeCharacter({
    src: '/images/icon-scissors.svg',
    name: 'scissors',
    ...props,
  })
}
export const Rock = (props: defaultCharacterProps) => {
  return makeCharacter({
    src: '/images/icon-rock.svg',
    name: 'rock',
    ...props,
  })
}
export const Paper = (props: defaultCharacterProps) => {
  return makeCharacter({
    src: '/images/icon-paper.svg',
    name: 'paper',
    ...props,
  })
}
export const Lizard = (props: defaultCharacterProps) => {
  return makeCharacter({
    src: '/images/icon-lizard.svg',
    name: 'lizard',
    ...props,
  })
}

interface makeCharacter {
  name: CharacterNames
  src: string
  onClick: onCharacterClick
  isHidden?: boolean
}

const makeCharacter = ({ name, src, isHidden, onClick }: makeCharacter) => {
  return (
    <Character src={src} name={name} isHidden={isHidden} onClick={onClick} />
  )
}

interface CharacterInterface {
  src: string
  name: CharacterNames
  isHidden: boolean
  onClick: onCharacterClick
}

const Character = ({ src, name, isHidden, onClick }: CharacterInterface) => {
  const [isClicked, setIsClicked] = useState(false)

  const BtnPressedDuration = 150 // unit = ms

  const [isAccessRestricted, setAccessRestricted] = useState(false) // THIS IS USED TO PREVENT DOUBLE CLICKS, TOTALLY UN-NECESSASRY BUT WORTH IT IF SOMEONE IS TRYING TO DOUBLE CLICK, IT'S LIKE A ANTI CHEAT FOR NOTHING xD

  const handleClick = () => {
    if (!isAccessRestricted) {
      setAccessRestricted(() => true)
      setIsClicked(true)

      setTimeout(() => {
        setIsClicked(false)
      }, BtnPressedDuration)

      setTimeout(() => {
        // CALLBACK
        onClick(name)
      }, BtnPressedDuration + BtnPressedDuration * 0.8)

      setTimeout(() => setAccessRestricted(() => false), BtnPressedDuration * 2)
    }
  }

  // const handleRelease = () => {
  //   setIsClicked(false)
  // }

  return (
    <div
      // onMouseUp={handleRelease}
      onMouseDown={handleClick}
      // onMouseLeave={handleRelease}
      style={{ transitionDuration: BtnPressedDuration + 'ms' }}
      className={`transition character transform-gpu ${
        isHidden ? 'scale-0' : 'scale-100'
      } select-none inline-flex outer-shadow ${name}-gradient rounded-full cursor-pointer`}
    >
      <div
        style={{ transitionDuration: BtnPressedDuration + 'ms' }}
        className={`transition ${name}-gradient rounded-full transform ${
          isClicked ? 'translate-y-0' : '-translate-y-2'
        }`}
      >
        <div
          className={`m-3 rounded-full bg-white inline-flex justify-center w-20 h-20 tablet:w-24 tablet:h-24`}
        >
          <img
            src={src}
            alt={name}
            className='self-center w-7/12 tablet:w-1/2'
          />
        </div>
      </div>
    </div>
  )
}

// const CharacterOLD = ({ src, name }: { src: string; name: string }) => {
//   const [isClicked, setIsClicked] = useState(false)

//   const handleClick = () => setIsClicked(true)
//   const handleRelease = () => setIsClicked(false)

//   return (
//     <div
//       onMouseUp={handleRelease}
//       onMouseDown={handleClick}
//       className={`character select-none inline-flex transform translate-y-2 m-2 `}
//     >
//       <div className={`round outer-shadow ${name}-gradient inline-flex`}>
//         {/* MAIN BORDER */}
//         <div
//           className={`transition round ${name}-gradient inline-flex transform ${
//             isClicked ? 'translate-y-0' : '-translate-y-2'
//           }`}
//         >
//           <div className='round inner-shadow m-4 overflow-hidden'>
//             <div
//               className={`transition inner round bg-white inline-flex justify-center w-32 h-32 transform `}
//             >
//               <img
//                 src={src}
//                 alt={name}
//                 className='self-center w-2/4 transform '
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// const CharacterComplicated = ({ src, name }: { src: string; name: string }) => {
//   const [isClicked, setIsClicked] = useState(false)

//   const handleClick = () => setIsClicked(true)
//   const handleRelease = () => setIsClicked(false)

//   return (
//     <div
//       onMouseUp={handleRelease}
//       onMouseDown={handleClick}
//       onMouseLeave={handleRelease}
//       className={`character rounded-full select-none inline-flex transform translate-y-2`}
//     >
//       <div className={`rounded-full outer-shadow ${name}-gradient inline-flex`}>
//         {/* MAIN BORDER */}
//         <div
//           className={`transition rounded-full ${name}-gradient inline-flex transform ${
//             isClicked ? 'translate-y-0' : '-translate-y-2'
//           }`}
//         >
//           <div className='rounded-full m-2'>
//             <div
//               className={`transition inner rounded-full bg-white inline-flex justify-center w-16 h-16 transform `}
//             >
//               <img
//                 src={src}
//                 alt={name}
//                 className='self-center w-2/4 transform '
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
