import SideRail from '../components/SideRail';
import TopNav from '../components/TopNav';
import Hero from '../components/sections/Hero';
import Work from '../components/sections/Work';
import Approach from '../components/sections/Approach';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import { useScrollSpy } from '../hooks/useScrollSpy';

const SECTION_IDS = ['s1', 's2', 's3', 's4', 's5'];

export default function Home() {
    const active = useScrollSpy(SECTION_IDS);

    return (
        <>
            <SideRail active={active} />
            <TopNav active={active} />
            <Hero />
            <Work />
            <Approach />
            <About />
            <Contact />
        </>
    );
}
