import { useState } from 'react';
import ThemePicker from './ThemePicker';
import MobileMenu from './MobileMenu';
import { themes, useTheme } from '../context/ThemeContext';

const NAV_LINKS = [
    { id: 's2', label: 'Work' },
    { id: 's3', label: 'Approach' },
    { id: 's4', label: 'About' },
    { id: 's5', label: 'Contact' },
];

export default function TopNav({ active }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const { themeName } = useTheme();
    const current = themes[themeName];

    return (
        <>
            <div className="topbar">
                {/* Desktop bar */}
                <div className="topbar-desktop hidden lg:flex">
                    <a href="#s1" style={{ textDecoration: 'none', color: 'var(--tx)', fontWeight: 600, fontSize: 14, letterSpacing: '.16em', textTransform: 'uppercase', marginRight: 'auto' }}>
                        Becky<span style={{ color: 'var(--ac)' }}>.</span>Weeks
                    </a>
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.id}
                            className="nl"
                            href={`#${link.id}`}
                            data-active={active === link.id ? 'true' : 'false'}
                        >
                            {link.label}
                        </a>
                    ))}
                    <span style={{ width: 1, height: 18, background: 'var(--ln)' }} />
                    <ThemePicker />
                    <a
                        className="ob"
                        href="https://docs.google.com/document/d/1xOHnFd4-tNEZC1Yydt7YhAOV9Qf8OPmFbqWZ4FT7LS4/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ padding: '8px 14px', fontSize: 12.5, minHeight: 0 }}
                    >
                        Résumé
                    </a>
                </div>

                {/* Mobile bar */}
                <div className="topbar-mobile flex lg:hidden">
                    <span style={{ fontWeight: 600, fontSize: 13, letterSpacing: '.16em', textTransform: 'uppercase', marginRight: 'auto' }}>
                        Becky<span style={{ color: 'var(--ac)' }}>.</span>Weeks
                    </span>
                    <button
                        className="icb"
                        onClick={() => setMenuOpen(true)}
                        aria-label="Open theme menu"
                    >
                        <span style={{ width: 11, height: 11, borderRadius: '50%', background: current.swatch }} />
                    </button>
                    <button
                        className="icb"
                        onClick={() => setMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <span style={{ fontSize: 17, lineHeight: 1 }}>☰</span>
                    </button>
                </div>
            </div>

            <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    );
}
