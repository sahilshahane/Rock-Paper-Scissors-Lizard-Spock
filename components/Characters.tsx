import { AnimatePresence, motion } from 'framer-motion';
import { GameDataContext } from 'pages/_app';
import { useContext, useState } from 'react';

export type CharacterNames = 'spock' | 'scissors' | 'rock' | 'paper' | 'lizard';
type onCharacterClick = (name: CharacterNames) => void;

export interface characterProps {
    isHidden?: boolean;
    onClick?: onCharacterClick;
    isClickable?: boolean;
    size?: 'xl';
}

interface baseCharacterProps extends characterProps {
    name: CharacterNames;
    src: string;
}

const Character = ({ src, name, isHidden, onClick, isClickable, size }: baseCharacterProps) => {
    const [isClicked, setIsClicked] = useState(false);

    const BtnPressedDuration = 150; // unit = ms

    const [isAccessRestricted, setAccessRestricted] = useState(false); // THIS IS USED TO PREVENT DOUBLE CLICKS, TOTALLY UN-NECESSASRY BUT WORTH IT IF SOMEONE IS TRYING TO DISCOVER BUGS, IT'S LIKE A ANTI CHEAT THAT NO ONE ASKED xD

    const handleClick = () => {
        if (!isAccessRestricted && (isClickable || isClickable === undefined)) {
            setAccessRestricted(() => true); // RESTRICT THE ACCESS TO BUTTON ON CLICK
            setIsClicked(true);

            setTimeout(() => setIsClicked(false), BtnPressedDuration); // RESTORE THE BUTTON POSITION AFTER ANIMATION DURATION

            if (onClick) setTimeout(() => onClick(name), BtnPressedDuration + BtnPressedDuration * 0.4); // NOTIFY THE CALLBACK AFTER THE BUTTON ANIMATION

            setTimeout(() => setAccessRestricted(() => false), BtnPressedDuration * 2); // RESTORE THE RESTRICTED ACCESS AFTER BUTTON ANIMATION DURATION
        }
    };

    const { gameMode } = useContext(GameDataContext);

    return (
        <AnimatePresence>
            {!isHidden && (
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ delay: 0.1 }}
                    className={`character ${gameMode}-mode ${name}`}
                >
                    <div
                        onMouseDown={handleClick}
                        className={`transition duration-700 transform-gpu no-select inline-flex outer-border rounded-full cursor-pointer size ${
                            size || 'default'
                        } `}
                    >
                        <div
                            style={{ transitionDuration: `${BtnPressedDuration}ms` }}
                            className={`transition inner-border rounded-full size ${size || 'default'} transform ${
                                isClicked ? 'translate-y-0' : 'button-height'
                            }`}
                        >
                            <div
                                className={`rounded-full bg-white inline-flex justify-center skeleton size ${
                                    size || 'default'
                                } `}
                            >
                                <img src={src} alt={name} className="self-center w-7/12 tablet:w-1/2" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const makeCharacter = (props: baseCharacterProps) => <Character {...props} />;

export const Spock = (props: characterProps) =>
    makeCharacter({
        src: '/images/icon-spock.svg',
        name: 'spock',
        ...props,
    });
export const Scissors = (props: characterProps) =>
    makeCharacter({
        src: '/images/icon-scissors.svg',
        name: 'scissors',
        ...props,
    });
export const Rock = (props: characterProps) =>
    makeCharacter({
        src: '/images/icon-rock.svg',
        name: 'rock',
        ...props,
    });
export const Paper = (props: characterProps) =>
    makeCharacter({
        src: '/images/icon-paper.svg',
        name: 'paper',
        ...props,
    });
export const Lizard = (props: characterProps) =>
    makeCharacter({
        src: '/images/icon-lizard.svg',
        name: 'lizard',
        ...props,
    });

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
