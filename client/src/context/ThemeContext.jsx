import { createContext, useContext, useEffect, useState } from 'react';

export const themes = {
    nocturne: {
        label: 'Nocturne',
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
    terminal: {
        label: 'Terminal',
        desc: 'Near-black, phosphor green',
        swatch: '#5fd39b',
        gradient: 'linear-gradient(135deg,#0e1512,#5fd39b)',
        vars: {
            '--bg': '#0e1512',
            '--bg2': '#0a100d',
            '--srf': '#17211c',
            '--tx': '#dee7e1',
            '--ac': '#5fd39b',
            '--ac2': '#8ceebb',
            '--sec': '#0f3b2c',
            '--secg': '#1c6b4e',
            '--secx': '#d2eee0',
            '--ln': 'rgba(222,231,225,.14)',
            '--ln2': 'rgba(222,231,225,.28)',
            '--mu': 'rgba(222,231,225,.56)',
            '--ok': '#d2a765',
        },
    },
    life: {
        label: 'Life',
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
};

const STORAGE_KEY = 'beckyweeks.theme';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [themeName, setThemeName] = useState(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        return themes[stored] ? stored : 'nocturne';
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, themeName);
    }, [themeName]);

    const theme = (themes[themeName] ?? themes.nocturne).vars;

    return (
        <ThemeContext.Provider value={{ theme, themeName, setThemeName }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
