import Reveal from '../Reveal';
import { principles } from '../../data/principles';

export default function Approach() {
    return (
        <section id="s3" className="section-pad" style={{ position: 'relative', background: 'var(--sec)', overflow: 'hidden' }}>
            <div className="glo hidden lg:block" style={{ width: 760, height: 420, background: 'var(--secg)', opacity: .85, top: -200, left: '26%' }} />
            <div className="glo lg:hidden" style={{ width: 380, height: 280, background: 'var(--secg)', opacity: .85, top: -120, left: '20%' }} />

            <div className="wrap py-approach" style={{ position: 'relative', color: 'var(--secx)' }}>
                <Reveal className="approach-grid">
                    <div>
                        <div className="mono" style={{ fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', opacity: .6, marginBottom: 18 }}>
                            03 — Approach
                        </div>
                        <h2 className="approach-h2">
                            Design taught me the part engineering skips: sit with the constraint before you solve it.
                        </h2>
                        <p className="approach-sub">
                            Thirteen years of apparel design, then twelve immersive weeks of bootcamp, then intern to full-time backend engineer. The instinct didn't change — make the complicated thing feel simple to the person on the other side of it.
                        </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {principles.map((p) => (
                            <div key={p.n} className="principle">
                                <span className="mono" style={{ fontSize: 11, opacity: .55, paddingTop: 5 }}>{p.n}</span>
                                <div>
                                    <div className="principle-title">{p.t}</div>
                                    <div className="principle-body">{p.d}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
