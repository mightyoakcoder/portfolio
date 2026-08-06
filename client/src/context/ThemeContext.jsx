import { createContext, useContext, useEffect, useState } from 'react';

export const themes = {
    amberSurf: {
        label: 'Amber Surf',
        desc: 'Light sea-glass, warm rust',
        swatch: '#c1551b',
        gradient: 'linear-gradient(135deg,#eef4f3,#c1551b)',
        vars: {
            '--bg': '#eef4f3',
            '--bg2': '#e4ecea',
            '--srf': '#ffffff',
            '--tx': '#16323b',
            '--ac': '#c1551b',
            '--ac2': '#9c4315',
            '--sec': '#1c4956',
            '--secg': '#2d6d80',
            '--secx': '#e6f0ee',
            '--ln': 'rgba(22,50,59,.16)',
            '--ln2': 'rgba(22,50,59,.32)',
            '--mu': 'rgba(22,50,59,.62)',
            '--ok': '#0d7a72',
        },
    },
    eventHorizon: {
        label: 'Event Horizon',
        desc: 'Deep indigo, blurple accent',
        swatch: '#9184d9',
        gradient: 'linear-gradient(135deg,#161826,#9184d9)',
        vars: {
            '--bg': '#161826',
            '--bg2': '#12131f',
            '--srf': '#1e2030',
            '--tx': '#e9e9ed',
            '--ac': '#9184d9',
            '--ac2': '#b5abfc',
            '--sec': '#262a60',
            '--secg': '#3b4194',
            '--secx': '#cdc7f0',
            '--ln': 'rgba(233,233,237,.14)',
            '--ln2': 'rgba(233,233,237,.28)',
            '--mu': 'rgba(233,233,237,.56)',
            '--ok': '#7fbf9a',
        },
    },
    // terminal: {
    //     label: 'Terminal',
    //     desc: 'Near-black, phosphor green',
    //     swatch: '#5fd39b',
    //     gradient: 'linear-gradient(135deg,#0e1512,#5fd39b)',
    //     vars: {
    //         '--bg': '#0e1512',
    //         '--bg2': '#0a100d',
    //         '--srf': '#17211c',
    //         '--tx': '#dee7e1',
    //         '--ac': '#5fd39b',
    //         '--ac2': '#8ceebb',
    //         '--sec': '#0f3b2c',
    //         '--secg': '#1c6b4e',
    //         '--secx': '#d2eee0',
    //         '--ln': 'rgba(222,231,225,.14)',
    //         '--ln2': 'rgba(222,231,225,.28)',
    //         '--mu': 'rgba(222,231,225,.56)',
    //         '--ok': '#d2a765',
    //     },
    // },
    novella: {
        label: 'Novella',
        desc: 'Warm cream, mustard & teal',
        swatch: '#e0a537',
        gradient: 'linear-gradient(135deg,#f7f1e2,#e0a537)',
        vars: {
            '--bg': '#f7f1e2',
            '--bg2': '#efe6cd',
            '--srf': '#ffffff',
            '--tx': '#1b2a37',
            '--ac': '#e0a537',
            '--ac2': '#f0bc5e',
            '--sec': '#1d4a45',
            '--secg': '#2f6b62',
            '--secx': '#f5f1e4',
            '--ln': 'rgba(27,42,55,.14)',
            '--ln2': 'rgba(27,42,55,.28)',
            '--mu': 'rgba(27,42,55,.56)',
            '--ok': '#d2572e',
        },
    },
};

const STORAGE_KEY = 'beckyweeks.theme';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [themeName, setThemeName] = useState(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        return themes[stored] ? stored : 'amberSurf';
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, themeName);
    }, [themeName]);

    const theme = (themes[themeName] ?? themes.amberSurf).vars;

    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute('data-theme', themeName);
        Object.entries(theme).forEach(([key, value]) => {
            root.style.setProperty(key, value);
        });
    }, [theme, themeName]);

    return (
        <ThemeContext.Provider value={{ theme, themeName, setThemeName }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
