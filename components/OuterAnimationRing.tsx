import { AnimatePresence, motion } from 'framer-motion';
import React, { FC } from 'react';

const defaultClass =
    'absolute invisible tablet:visible shadow-xl border-white rounded-full transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';

// EVERYTHING IS HARDCODDED, i know it's a bad code
const AnimRing: FC<{ isVisible: boolean; defaultDelay?: number }> = ({ children, isVisible, defaultDelay = 0 }) => {
    return (
        <div className="relative">
            <AnimatePresence>
                <motion.div
                    className={defaultClass}
                    animate={{ border: `${isVisible ? 10 : 0}rem solid rgba(255,255,255,0.1)` }}
                    transition={{ duration: isVisible ? 0.5 : 0.6, delay: defaultDelay }}
                >
                    <motion.div
                        className={defaultClass}
                        animate={{ border: `${isVisible ? 8 : 0}rem solid rgba(255,255,255,0.1)` }}
                        transition={{ duration: isVisible ? 0.5 : 0.5, delay: (isVisible ? 0.1 : 0.2) + defaultDelay }}
                    >
                        <motion.div
                            className={defaultClass}
                            animate={{ border: `${isVisible ? 6 : 0}rem solid rgba(255,255,255,0.1)` }}
                            transition={{
                                duration: isVisible ? 0.5 : 0.4,
                                delay: (isVisible ? 0.2 : 0.4) + defaultDelay,
                            }}
                        />
                    </motion.div>
                </motion.div>
            </AnimatePresence>
            <div>{children}</div>
        </div>
    );
};

export default AnimRing;
