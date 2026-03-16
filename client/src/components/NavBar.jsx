import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';
import { useTheme, themes } from '../context/ThemeContext';

const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Hire Me', href: '/hire-me' },
];

const linkClass = ({ isActive }) =>
    isActive
        ? 'bg-black/20 rounded-md px-3 py-2 text-sm font-medium'
        : 'hover:bg-black/10 rounded-md px-3 py-2 text-sm font-medium';

const linkStyle = ({ isActive }) => ({
    color: isActive ? 'white' : 'var(--color-nav-links)',
});

const mobileLinkClass = ({ isActive }) =>
    isActive
        ? 'bg-black/20 block rounded-md px-3 py-2 text-base font-medium'
        : 'hover:bg-black/10 block rounded-md px-3 py-2 text-base font-medium';

export default function NavBar() {
    const { themeName, setThemeName } = useTheme();

    return (
        <Disclosure
            as="nav"
            className="sticky top-0 z-50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
            style={{ backgroundColor: 'var(--color-nav)' }}
        >
            {({ open, close }) => (
                <>
                    {open && (
                        <div
                            className="fixed inset-0 z-40"
                            onClick={() => close()}
                            onTouchStart={() => close()}
                        />
                    )}

                    <div className="relative z-50 w-full px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">

                            {/* Left: hamburger (mobile) + name + nav links */}
                            <div className="flex items-center gap-2">
                                <div className="lg:hidden">
                                    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-black/10 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-[var(--color-accent)]">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                                        <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                                    </DisclosureButton>
                                </div>
                                <NavLink to="/about" className="flex shrink-0 items-center">
                                    <span className="text-white font-semibold tracking-widest uppercase text-sm">
                                        Becky <span style={{ color: 'var(--color-highlight)' }}>Weeks</span>
                                    </span>
                                </NavLink>
                                <div className="hidden lg:ml-4 lg:flex lg:space-x-4 flex-nowrap">
                                    {navigation.map((item) => (
                                        <NavLink key={item.name} to={item.href} className={linkClass} style={linkStyle}>
                                            {item.name}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>

                            {/* Right: theme swatches (desktop only) + resume button (always) */}
                            <div className="flex items-center gap-20">
                                <div className="hidden lg:flex items-center gap-1">
                                    <span className="text-[10px] uppercase tracking-widest text-gray-400 mr-2">Theme</span>
                                    {Object.entries(themes).map(([key, t]) => (
                                        <button
                                            key={key}
                                            onClick={() => setThemeName(key)}
                                            title={t.label}
                                            className="w-5 h-5 rounded-full border-2 transition-all hover:scale-110"
                                            style={{
                                                backgroundColor: t.swatch,
                                                borderColor: themeName === key ? 'white' : 'transparent',
                                            }}
                                        />
                                    ))}
                                </div>
                                <a
                                    href="https://docs.google.com/document/d/1xOHnFd4-tNEZC1Yydt7YhAOV9Qf8OPmFbqWZ4FT7LS4/edit?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-medium text-xs transition-opacity hover:opacity-80"
                                    style={{ backgroundColor: 'var(--color-highlight)', color: 'white' }}
                                >
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                    Resume
                                </a>
                            </div>

                        </div>
                    </div>

                    {/* Mobile menu */}
                    <DisclosurePanel className="relative z-50 lg:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <DisclosureButton key={item.name} as={NavLink} to={item.href} className={mobileLinkClass} style={linkStyle}>
                                    {item.name}
                                </DisclosureButton>
                            ))}
                        </div>
                        <div className="border-t border-white/10 px-4 py-3">
                            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">Theme</p>
                            <div className="flex flex-wrap gap-2">
                                {Object.entries(themes).map(([key, t]) => (
                                    <button
                                        key={key}
                                        onClick={() => { setThemeName(key); close(); }}
                                        className="flex items-center gap-1.5 px-2 py-1 rounded border text-xs text-white transition-all"
                                        style={{
                                            borderColor: themeName === key ? 'white' : 'transparent',
                                            opacity: themeName === key ? 1 : 0.6,
                                        }}
                                    >
                                        <span
                                            className="w-3 h-3 rounded-full shrink-0"
                                            style={{ backgroundColor: t.swatch }}
                                        />
                                        {t.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    );
}
