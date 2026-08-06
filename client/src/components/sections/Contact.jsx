import Reveal from '../Reveal';

export default function Contact() {
    return (
        <section id="s5" className="section-pad" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="glo" style={{ width: 600, height: 400, background: 'var(--ac)', opacity: .3, bottom: -220, right: '6%' }} />

            <div className="wrap contact-section" style={{ position: 'relative' }}>
                <hr className="fade py-contact-top" />
                <Reveal className="contact-grid">
                    <div>
                        <div className="mono" style={{ fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--mu)', marginBottom: 18 }}>
                            05 — Contact
                        </div>
                        <h2 className="contact-h2">Got something that<br />needs to hold up?</h2>
                        <p className="contact-sub">
                            Open to full-time backend and cloud roles, and to contract work. Tell me what you're building — I read everything.
                        </p>
                    </div>

                    <div className="contact-actions">
                        <a className="ob" href="mailto:beckyweeks721@gmail.com" style={{ justifyContent: 'flex-start', padding: '16px 20px', fontSize: 15 }}>
                            ✉&nbsp;&nbsp;beckyweeks721@gmail.com
                        </a>
                        <div style={{ display: 'flex', gap: 10 }}>
                            <a className="gb" href="https://www.linkedin.com/in/beckyweeks14" target="_blank" rel="noopener noreferrer" style={{ flex: 1 }}>
                                LinkedIn
                            </a>
                            <a className="gb" href="https://github.com/mightyoakcoder" target="_blank" rel="noopener noreferrer" style={{ flex: 1 }}>
                                GitHub
                            </a>
                        </div>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--ok)', padding: '6px 2px' }}>
                            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--ok)', boxShadow: '0 0 0 4px color-mix(in srgb, var(--ok) 20%, transparent)' }} />
                            Replying within a day or two
                        </div>
                    </div>
                </Reveal>

                <hr className="fade" style={{ marginTop: 40 }} />
                <div className="contact-footer">
                    <span>Becky Weeks · beckyweeks.dev</span>
                    {/* <span className="mono" style={{ letterSpacing: '.1em' }}>REACT · NODEJS · CLOUD RUN · AI</span> */}
                </div>
            </div>
        </section>
    );
}
