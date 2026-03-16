import { createContext, useContext, useState } from 'react';

export const themes = {
    slate: {
        label: 'Slate',
        swatch: '#7C9CBF',
        vars: {
            '--color-bg': '#2C3340',
            '--color-nav': '#232830',
            '--color-nav-links': '#7C9CBF',
            '--color-accent': '#7C9CBF',
            '--color-highlight': '#C94F4F',
            '--color-status': '#478c65',
            '--color-text': '#ffffff',
            '--color-card-bg': 'rgba(255,255,255,0.05)',
            '--color-card-border': 'rgba(255,255,255,0.1)',
        },
    },
    showgirl: {
        label: 'Life',
        swatch: '#E97334',
        vars: {
            '--color-bg': '#e2eeed',
            '--color-nav': '#204d5b',
            '--color-nav-links': '#E97334',
            '--color-accent': '#E97334',
            '--color-highlight': '#0E9090',
            '--color-status': '#0e9090',
            '--color-text': '#204d5b',
            '--color-card-bg': 'rgba(32, 77, 91, 0.10)',
            '--color-card-border': 'rgba(14, 40, 48, 0.09)',
        },
    },
    midnight: {
        label: 'Midnight',
        swatch: '#A78BCA',
        vars: {
            '--color-bg': '#0d0d1f',
            '--color-nav': '#1B1B3A',
            '--color-nav-links': '#A78BCA',
            '--color-accent': '#A78BCA',
            '--color-highlight': '#C9A87C',
            '--color-status': '#7B6FA0',
            '--color-text': '#d1d1d7',
            '--color-card-bg': 'rgba(255,255,255,0.05)',
            '--color-card-border': 'rgba(255,255,255,0.1)',
        },
    },
    // legend: {
    //     label: 'Legend',
    //     swatch: '#af9cb1',
    //     vars: {
    //         '--color-bg': '#af9cb1',
    //         '--color-nav': '#866475',
    //         '--color-nav-links': '#ead5c6',
    //         '--color-accent': '#6b4a5a',
    //         '--color-highlight': '#866475',
    //         '--color-status': '#b7bdc9',
    //     },
    // },
    // vhs: {
    //     label: 'VHS Tape',
    //     swatch: '#FEC631',
    //     vars: {
    //         '--color-bg': '#6A1D41',
    //         '--color-nav': '#B21D3B',
    //         '--color-nav-links': '#FEC631',
    //         '--color-accent': '#FEC631',
    //         '--color-highlight': '#F9591F',
    //         '--color-status': '#F21E2C',
    //     },
    // },
    // happyDays: {
    //     label: 'Happy Days',
    //     swatch: '#FF6F91',
    //     vars: {
    //         '--color-bg': '#0f0f23',
    //         '--color-nav': '#69AFAD',
    //         '--color-nav-links': '#EFA5A6',
    //         '--color-accent': '#BA5E62',
    //         '--color-highlight': '#EFA5A6',
    //         '--color-status': '#C06C84',
    //     },
    // }
};
// #354E52, #69AFAD, #F9E5DA, #EFA5A6, #BA5E62

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [themeName, setThemeName] = useState('slate');
    const theme = themes[themeName].vars;

    return (
        <ThemeContext.Provider value={{ theme, themeName, setThemeName }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
