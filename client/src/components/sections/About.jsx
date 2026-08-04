import Reveal from '../Reveal';
import { skillGroups } from '../../data/skills';

export default function About() {
    return (
        <section id="s4" className="section-pad" style={{ position: 'relative' }}>
            <div className="wrap py-about">
                <Reveal style={{ marginBottom: 24 }}>
                    <div className="mono" style={{ fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--mu)', marginBottom: 16 }}>
                        04 — About
                    </div>
                    <h2 className="about-h2">Second career, same instinct</h2>
                </Reveal>

                <Reveal className="about-grid">
                    <div>
                        <p className="about-lead">
                            In 2022 I closed a thirteen-year apparel design career to write software. I went from bootcamp to intern to full-time backend engineer on a platform real people hit all day.
                        </p>
                        <p className="about-body">
                            In practice, that meant RESTful APIs other teams integrate without asking me questions, CI/CD that stopped being scary, and a migration to Google Cloud I planned and led. Backend is home, but I'll take a feature all the way to the UI — and enjoy it.
                        </p>
                        <p className="about-body" style={{ marginBottom: 0 }}>
                            Off the clock: my husband, two small boys, a garden I over-document, and whatever I'm crafting.
                        </p>

                        <div className="about-caps">
                            <div>
                                <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 6 }}>APIs</div>
                                <div style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--mu)' }}>Services other teams integrate without a call.</div>
                            </div>
                            <div>
                                <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 6 }}>Pipelines</div>
                                <div style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--mu)' }}>CI/CD that makes deploying a non-event.</div>
                            </div>
                            <div>
                                <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 6 }}>Cloud</div>
                                <div style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--mu)' }}>GCP — Run, Storage, Firestore, Terraform.</div>
                            </div>
                        </div>
                    </div>

                    <div className="about-skills">
                        {skillGroups.map((g) => (
                            <div key={g.label}>
                                <div className="mono" style={{ fontSize: 9.5, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--ac)', marginBottom: 14 }}>
                                    {g.label}
                                </div>
                                <div className="sk">
                                    {g.items.map((item) => <div key={item}>{item}</div>)}
                                </div>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
