import { Dialog, DialogPanel } from '@headlessui/react';
import { themes, useTheme } from '../context/ThemeContext';

const NAV_ITEMS = [
    { id: 's1', num: '01', label: 'Home' },
    { id: 's2', num: '02', label: 'Work' },
    { id: 's3', num: '03', label: 'Approach' },
    { id: 's4', num: '04', label: 'About' },
    { id: 's5', num: '05', label: 'Contact' },
];

export default function MobileMenu({ open, onClose }) {
    const { themeName, setThemeName } = useTheme();

    return (
        <Dialog open={open} onClose={onClose} className="relative z-[70]">
            <div style={{ position: 'fixed', inset: 0, background: 'var(--bg)' }} aria-hidden="true" />
            <div style={{ position: 'fixed', inset: 0, overflowY: 'auto' }}>
                <DialogPanel style={{ minHeight: '100%', position: 'relative' }}>
                    <div className="grain" />
                    <div style={{ position: 'relative', padding: '26px 22px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', height: 34, marginBottom: 16 }}>
                            <span style={{ fontWeight: 600, fontSize: 13, letterSpacing: '.16em', textTransform: 'uppercase', marginRight: 'auto' }}>
                                Becky<span style={{ color: 'var(--ac)' }}>.</span>Weeks
                            </span>
                            <button
                                className="icb"
                                onClick={onClose}
                                aria-label="Close menu"
                                style={{ borderColor: 'var(--ac)', color: 'var(--ac)' }}
                            >
                                <span style={{ fontSize: 17, lineHeight: 1 }}>✕</span>
                            </button>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {NAV_ITEMS.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    onClick={onClose}
                                    style={{ display: 'flex', alignItems: 'baseline', gap: 16, padding: '16px 0', borderBottom: '1px solid var(--ln)', textDecoration: 'none', color: 'var(--tx)' }}
                                >
                                    <span className="mono" style={{ fontSize: 11, color: 'var(--mu)' }}>{item.num}</span>
                                    <span style={{ fontSize: 28, fontWeight: 500, letterSpacing: '-.03em' }}>{item.label}</span>
                                </a>
                            ))}
                        </div>

                        <div className="mono" style={{ fontSize: 9, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--mu)', margin: '28px 0 12px' }}>
                            Theme
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                            {Object.entries(themes).map(([key, t]) => {
                                const active = key === themeName;
                                return (
                                    <button
                                        key={key}
                                        onClick={() => setThemeName(key)}
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 12,
                                            padding: 12,
                                            borderRadius: 8,
                                            border: `1px solid ${active ? 'var(--ac)' : 'var(--ln)'}`,
                                            background: active ? 'color-mix(in srgb, var(--ac) 12%, transparent)' : 'transparent',
                                            cursor: 'pointer',
                                            color: 'var(--tx)',
                                            fontFamily: 'inherit',
                                            textAlign: 'left',
                                            minHeight: 48,
                                        }}
                                    >
                                        <span style={{ width: 26, height: 26, borderRadius: 7, flex: 'none', background: t.gradient }} />
                                        <span style={{ flex: 1 }}>
                                            <span style={{ display: 'block', fontSize: 14.5, fontWeight: 500 }}>{t.label}</span>
                                            <span style={{ display: 'block', fontSize: 12, color: 'var(--mu)' }}>{t.desc}</span>
                                        </span>
                                        <span style={{ fontSize: 14, color: 'var(--ac)', opacity: active ? 1 : 0 }}>✓</span>
                                    </button>
                                );
                            })}
                        </div>

                        <a
                            className="ob"
                            href="https://docs.google.com/document/d/1xOHnFd4-tNEZC1Yydt7YhAOV9Qf8OPmFbqWZ4FT7LS4/edit?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ marginTop: 22, width: '100%' }}
                        >
                            Résumé ↗
                        </a>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
}
