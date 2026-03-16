const services = [
    {
        category: 'Backend Engineering',
        items: [
            {
                title: 'API design & development',
                description: 'Design and build RESTful APIs that are scalable, well-documented, and easy to integrate.',
            },
            {
                title: 'CI/CD pipelines',
                description: 'Set up or improve your deployment workflows so your team can ship faster and with more confidence.',
            },
            {
                title: 'Testing',
                description: 'Write unit, integration, and end-to-end test suites that give your team a safety net when moving quickly.',
            },
        ],
    },
    {
        category: 'Cloud Infrastructure',
        items: [
            {
                title: 'GCP migrations',
                description: 'Plan and execute migrations to Google Cloud Platform — I led one that cut deployment times by 40%.',
            },
            {
                title: 'Infrastructure as code',
                description: 'Use Terraform to provision and manage your cloud resources in a repeatable, version-controlled way.',
            },
        ],
    },
    {
        category: 'Full-Stack Development',
        items: [
            {
                title: 'End-to-end features',
                description: "Take a feature from the database all the way to the UI — I'm comfortable across the full stack.",
            },
            {
                title: 'Frontend work',
                description: 'Build clean, responsive interfaces with React when the project calls for it.',
            },
        ],
    },
];

export default function HireMe() {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen px-4" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', paddingTop: '2rem', paddingBottom: '4rem' }}>
            <div className="max-w-4xl w-full">
                <h1 className="page-header font-bold mb-10" style={{ color: 'var(--color-accent)' }}>Hire Me</h1>

                <div className="flex flex-col md:flex-row gap-10 items-start">
                    {/* Left: services */}
                    <div className="flex-1">
                        <div className="rounded-lg p-6 space-y-10" style={{ backgroundColor: 'var(--color-card-bg)', border: '1px solid var(--color-card-border)' }}>
                            {services.map((group) => (
                                <div key={group.category}>
                                    <h2 className="text-sm uppercase tracking-widest font-semibold mb-3" style={{ color: 'var(--color-accent)' }}>
                                        {group.category}
                                    </h2>
                                    <ul className="space-y-4">
                                        {group.items.map((item) => (
                                            <li key={item.title}>
                                                <span className="font-semibold">{item.title}: </span>
                                                <span style={{ opacity: 0.8 }}>{item.description}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: CTA card, sticky on desktop */}
                    <div className="w-full md:w-72 md:shrink-0 md:sticky md:top-8">
                        <div className="rounded-lg p-6 text-center" style={{ backgroundColor: 'var(--color-card-bg)', border: '1px solid var(--color-card-border)' }}>
                            <p className="text-lg font-semibold mb-1">Let's work together</p>
                            <p className="mb-5 text-sm" style={{ opacity: 0.7 }}>Open to full-time roles and contract work. I'd love to hear about what you're building.</p>
                            <div className="flex flex-col gap-2">
                                <a
                                    href="mailto:beckyweeks721@gmail.com"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-medium transition-opacity hover:opacity-80 text-sm"
                                    style={{ backgroundColor: 'var(--color-highlight)', color: 'white' }}
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    Contact Me
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/beckyweeks14"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-medium transition-opacity hover:opacity-80 text-sm"
                                    style={{ color: 'var(--color-accent)', border: '1px solid var(--color-accent)' }}
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
