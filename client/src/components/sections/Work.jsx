import Reveal from '../Reveal';
import WorkRow from '../WorkRow';
import { projects } from '../../data/projects';

export default function Work() {
    return (
        <section id="s2" className="section-pad" style={{ position: 'relative' }}>
            <div className="wrap py-work">
                <Reveal className="work-header">
                    <div>
                        <div className="mono" style={{ fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--mu)', marginBottom: 14 }}>
                            02 — Selected work
                        </div>
                        <h2 className="work-h2">Live, on domains I mapped myself</h2>
                    </div>
                    <p className="work-intro">
                        Three things I own end to end — architecture, infrastructure, DNS, deploys, the 11pm bug. Nothing here is a tutorial.
                    </p>
                </Reveal>

                {projects.map((project) => (
                    <WorkRow key={project.num} project={project} />
                ))}
                <hr className="fade" />

                <Reveal style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, paddingTop: 30, flexWrap: 'wrap' }}>
                    <p style={{ fontSize: 14.5, color: 'var(--mu)', margin: 0 }}>
                        Most of my engineering work isn't public — proprietary, not classified. Happy to walk you through it.
                    </p>
                    <a className="gb" href="#s5">Ask me about it</a>
                </Reveal>
            </div>
        </section>
    );
}
