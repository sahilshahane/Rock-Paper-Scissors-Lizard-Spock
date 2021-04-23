const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: {
        enabled: true,
        content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
        options: {
            keyframes: true,
            fontFace: true,
            variables: true,
            rejected: true,
        },
        keyframes: true,
        fontFace: true,
        variables: true,
        rejected: true,
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            mobileM: '375px',
            // => @media (min-width: 375px) { ... }
            mobile: '425px',
            // => @media (min-width: 425px) { ... }
            tabletM: '640px',
            // => @media (min-width: 640px) { ... }
            tablet: '768px',
            // => @media (min-width: 768px) { ... }
            laptop: '1024px',
            // => @media (min-width: 1024px) { ... }
            desktop: '1280px',
            // => @media (min-width: 1280px) { ... }
            widescreen: '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        colors: {
            ...colors,
            'neutral-dark': '#3B4363',
        },
        letterSpacing: {
            ...defaultTheme.letterSpacing,
            'wide-0.2': '.2em',
            'wide-0.4': '.4em',
            'wide-0.8': '.8em',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
