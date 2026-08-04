import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { themes, useTheme } from '../context/ThemeContext';

export default function ThemePicker() {
    const { themeName, setThemeName } = useTheme();
    const current = themes[themeName];

    return (
        <Popover style={{ position: 'relative' }}>
            <PopoverButton className="gb" style={{ padding: '8px 12px', fontSize: 12.5, gap: 9, minHeight: 0 }}>
                <span style={{ width: 11, height: 11, borderRadius: '50%', background: current.swatch, flex: 'none' }} />
                <span>{current.label}</span>
                <span style={{ opacity: .5, fontSize: 10 }}>▼</span>
            </PopoverButton>
            <PopoverPanel
                transition
                anchor={{ to: 'bottom end', gap: 8 }}
                className="transition duration-150 ease-out data-[closed]:opacity-0 data-[closed]:-translate-y-1.5"
                style={{
                    width: 242,
                    borderRadius: 10,
                    border: '1px solid var(--ln2)',
                    background: 'var(--srf)',
                    boxShadow: '0 18px 44px rgba(0,0,0,.5)',
                    padding: 6,
                    zIndex: 50,
                }}
            >
                {({ close }) => (
                    <>
                        {Object.entries(themes).map(([key, t]) => {
                            const active = key === themeName;
                            return (
                                <button
                                    key={key}
                                    className="throw"
                                    data-active={active ? 'true' : 'false'}
                                    onClick={() => { setThemeName(key); close(); }}
                                >
                                    <span style={{ width: 24, height: 24, borderRadius: 7, flex: 'none', background: t.gradient }} />
                                    <span style={{ flex: 1 }}>
                                        <span style={{ display: 'block', fontSize: 13.5, fontWeight: 500 }}>{t.label}</span>
                                        <span style={{ display: 'block', fontSize: 11.5, color: 'var(--mu)' }}>{t.desc}</span>
                                    </span>
                                    <span style={{ fontSize: 13, color: 'var(--ac)', opacity: active ? 1 : 0 }}>✓</span>
                                </button>
                            );
                        })}
                    </>
                )}
            </PopoverPanel>
        </Popover>
    );
}
