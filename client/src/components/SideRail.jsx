const SECTIONS = [
    { id: 's1', num: '01' },
    { id: 's2', num: '02' },
    { id: 's3', num: '03' },
    { id: 's4', num: '04' },
    { id: 's5', num: '05' },
];

export default function SideRail({ active }) {
    return (
        <div className="rail hidden lg:flex">
            <div className="railline" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: '100%' }}>
                {SECTIONS.map((s) => (
                    <a
                        key={s.id}
                        className="rdot"
                        href={`#${s.id}`}
                        data-active={active === s.id ? 'true' : 'false'}
                    >
                        <span>{s.num}</span>
                        <span className="b" />
                    </a>
                ))}
            </div>
            <div className="vert">BECKY WEEKS — BACKEND &amp; CLOUD</div>
        </div>
    );
}
