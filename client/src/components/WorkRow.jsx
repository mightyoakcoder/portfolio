import Reveal from './Reveal';

export default function WorkRow({ project }) {
    return (
        <Reveal>
            <hr className="fade" />
            <a className="wr" href={project.href} target="_blank" rel="noopener noreferrer">
                <span className="wbar" />
                <span className="mono wn" style={{ fontSize: 12, paddingTop: 12 }}>{project.num}</span>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <span className="wt" style={{ fontWeight: 500, letterSpacing: '-.03em' }}>{project.name}</span>
                        <span className="warr">→</span>
                    </div>
                    <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--mu)', margin: '10px 0 0', maxWidth: '52ch', textWrap: 'pretty' }}>
                        {project.blurb}
                    </p>
                </div>
                <div className="wr-chips">
                    {project.chips.map((chip) => <span key={chip} className="chip">{chip}</span>)}
                </div>
                <div className="wr-status">
                    <div className="mono" style={{ fontSize: 10, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ok)' }}>
                        {project.status}
                    </div>
                    <div className="mono" style={{ fontSize: 11.5, color: 'var(--mu)', marginTop: 7 }}>
                        {project.domain}
                    </div>
                </div>
            </a>
        </Reveal>
    );
}
