import { heroHeadline, heroSubhead } from '../../data/copy';

export default function Hero() {
    return (
        <section id="s1" className="section-pad" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="glo hidden lg:block" style={{ width: 620, height: 480, background: 'var(--ac)', opacity: .34, top: -230, right: -60 }} />
            <div className="glo hidden lg:block" style={{ width: 420, height: 320, background: 'var(--sec)', opacity: .5, bottom: -180, left: '4%' }} />
            <div className="glo lg:hidden" style={{ width: 320, height: 280, background: 'var(--ac)', opacity: .34, top: -120, right: -80 }} />

            <div className="wrap py-hero" style={{ position: 'relative' }}>
                <div className="hero-grid">
                    <div>
                        <div className="hero-kicker-row hero-anim" style={{ animationDelay: '.02s' }}>
                            <span className="mk mk-anim" />
                            <span className="mono" style={{ fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--mu)' }}>
                                Backend &amp; cloud engineer
                            </span>
                        </div>
                        <h1 className="hero-h1 hero-anim" style={{ animationDelay: '.08s' }}>{heroHeadline}</h1>
                        <p className="hero-sub hero-anim" style={{ animationDelay: '.16s' }}>{heroSubhead}</p>
                        <div className="hero-cta-row hero-anim" style={{ animationDelay: '.24s' }}>
                            <a className="ob" href="#s2">See selected work</a>
                            <a className="gb" href="#s5">Work with me</a>
                            <span className="hero-pill">
                                <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--ok)', boxShadow: '0 0 0 4px color-mix(in srgb, var(--ok) 20%, transparent)' }} />
                                Open to work
                            </span>
                        </div>
                    </div>

                    <div className="hero-portrait-wrap hero-anim" style={{ animationDelay: '.12s' }}>
                        <div className="glo" style={{ width: 260, height: 260, background: 'var(--ac)', opacity: .4, top: 20, left: 10 }} />
                        <div className="hero-portrait">
                            <div className="hero-frame" />
                            <div className="hero-photo">
                                <img
                                    src="/beckyprofilepic.jpg"
                                    alt="Becky Weeks"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 4%' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="fade" style={{ marginTop: 40 }} />
                <div className="hero-stats">
                    <div>
                        <div className="mono" style={{ fontSize: 9, letterSpacing: '.16em', color: 'var(--mu)', marginBottom: 8 }}>MOST RECENTLY</div>
                        <div style={{ fontSize: 15, fontWeight: 500 }}>Backend engineer</div>
                        <div style={{ fontSize: 12.5, color: 'var(--mu)', marginTop: 3 }}>High-traffic consumer platform</div>
                    </div>
                    <div>
                        <div className="mono" style={{ fontSize: 9, letterSpacing: '.16em', color: 'var(--mu)', marginBottom: 8 }}>BUILDING</div>
                        <div style={{ fontSize: 15, fontWeight: 500 }}>Snow Family Archive</div>
                        <div style={{ fontSize: 12.5, color: 'var(--mu)', marginTop: 3 }}>Firebase · Cloud Run · Cloud Build</div>
                    </div>
                    <div className="hero-stat-span">
                        <div className="mono" style={{ fontSize: 9, letterSpacing: '.16em', color: 'var(--mu)', marginBottom: 8 }}>CERTIFIED</div>
                        <div style={{ fontSize: 15, fontWeight: 500 }}>Google Associate Cloud Engineer</div>
                        <a
                            href="https://www.credly.com/badges/86d5f7e2-f721-4b2e-9cf8-5788ab130bab"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: 12.5, color: 'var(--ac)', textDecoration: 'none', marginTop: 3, display: 'inline-block' }}
                        >
                            Verify on Credly ↗
                        </a>
                    </div>
                    <div>
                        <div className="mono" style={{ fontSize: 9, letterSpacing: '.16em', color: 'var(--mu)', marginBottom: 8 }}>OPEN TO</div>
                        <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--ok)' }}>Full-time &amp; contract</div>
                        <div style={{ fontSize: 12.5, color: 'var(--mu)', marginTop: 3 }}>Backend · cloud · platform</div>
                    </div>
                </div>
                <hr className="fade" />
            </div>
        </section>
    );
}
