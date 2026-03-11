import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Hire Me', href: '/hire-me' },
];

const linkClass = ({ isActive }) =>
    isActive
        ? 'bg-gray-950/50 text-white rounded-md px-3 py-2 text-sm font-medium'
        : 'text-gray-300 hover:bg-white/5 hover:text-white rounded-md px-3 py-2 text-sm font-medium';

const mobileLinkClass = ({ isActive }) =>
    isActive
        ? 'bg-gray-950/50 text-white block rounded-md px-3 py-2 text-base font-medium'
        : 'text-gray-300 hover:bg-white/5 hover:text-white block rounded-md px-3 py-2 text-base font-medium';

export default function NavBar() {
    return (
        <Disclosure
            as="nav"
            className="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
        >
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Left: hamburger (mobile) + logo + nav links */}
                    <div className="flex items-center gap-2">
                        <div className="sm:hidden">
                            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-[#60A5FA]">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                            </DisclosureButton>
                        </div>
                        <NavLink to="/about" className="flex shrink-0 items-center">
                            <span className="text-white font-semibold tracking-widest uppercase text-sm">
                                Becky <span className="text-[#60A5FA]">Weeks</span>
                            </span>
                        </NavLink>
                        <div className="hidden sm:ml-4 sm:flex sm:space-x-4">
                            {navigation.map((item) => (
                                <NavLink key={item.name} to={item.href} className={linkClass}>
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                        <DisclosureButton key={item.name} as={NavLink} to={item.href} className={mobileLinkClass}>
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}
