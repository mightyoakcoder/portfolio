import Reveal from '../Reveal';
import { skillGroups } from '../../data/skills';
import { experience } from '../../data/experience';

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
                            Off the clock: my husband, two small boys, a goal to read more books this year than last (currently: Dungeon Crawler Carl), and whatever I'm crafting.
                        </p>

                        <div className="about-caps">
                            <div className="cap-item">
                                <span className="icon-badge" style={{ '--badge-c': 'var(--sec)' }}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M8 7L3 12L8 17M16 7L21 12L16 17" />
                                    </svg>
                                </span>
                                <div>
                                    <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 6 }}>APIs</div>
                                    <div style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--mu)' }}>Services other teams integrate without a call.</div>
                                </div>
                            </div>
                            <div className="cap-item">
                                <span className="icon-badge" style={{ '--badge-c': 'var(--ok)' }}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 12a8 8 0 0113.5-5.8M20 12a8 8 0 01-13.5 5.8" />
                                        <path d="M17.5 3.2v4.2h-4.2M6.5 20.8v-4.2h4.2" />
                                    </svg>
                                </span>
                                <div>
                                    <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 6 }}>Pipelines</div>
                                    <div style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--mu)' }}>CI/CD that makes deploying a non-event.</div>
                                </div>
                            </div>
                            <div className="cap-item">
                                <span className="icon-badge" style={{ '--badge-c': 'var(--ac)' }}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M7 18a4 4 0 01-.5-7.97A5.5 5.5 0 0117.5 9 4 4 0 0117 18H7z" />
                                    </svg>
                                </span>
                                <div>
                                    <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 6 }}>Cloud</div>
                                    <div style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--mu)' }}>GCP — Run, Storage, Firestore, Terraform.</div>
                                </div>
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

                <Reveal style={{ marginTop: 56 }}>
                    <div className="mono timeline-heading">Where that's happened</div>
                    <div>
                        {experience.map((job, i) => (
                            <div key={job.role} className="timeline-entry">
                                <span className="timeline-dot" style={{ '--dot-c': i % 2 === 0 ? 'var(--ac)' : 'var(--ok)' }} />
                                <div className="timeline-meta">
                                    <span className="company">{job.company}</span>
                                    {job.dates}
                                </div>
                                <div>
                                    <div className="timeline-role">{job.role}</div>
                                    <div className="timeline-desc">{job.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
