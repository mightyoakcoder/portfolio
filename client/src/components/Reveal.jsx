import { useEffect, useRef, useState } from 'react';

export default function Reveal({ className = '', children, ...props }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(
        () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );

    useEffect(() => {
        if (visible) return;
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) setVisible(true);
            });
        }, { threshold: 0.12 });
        io.observe(el);
        return () => io.disconnect();
    }, [visible]);

    return (
        <div ref={ref} className={`rev ${visible ? 'in' : ''} ${className}`.trim()} {...props}>
            {children}
        </div>
    );
}
