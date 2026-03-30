const projects = [
    {
        name: 'Snow Family Archive',
        description:
            "A private family photo archive built to preserve and share photos from my late father's estate. Family members can log in, browse, and upload photos in one place — something personal that also became a real exercise in full-stack and cloud development.",
        stack: [
            'React', 'Vite', 'Reacr Router', 'React Query', 'Node.js/Express', 'Firestore',
            'Firebase Auth', 'Cloud Storage', 'Cloud Run', 'Secret Manager', 'Cloud Build', 'Docker',
        ],
        status: 'In progress',
        github: 'https://github.com/mightyoakcoder/snowFamilyArchive',
        live: 'https://www.snowfamilyarchive.com',
    },
    {
        name: 'Log My Standup',
        description:
            "After tracking my daily standup updates for years in OneNote, I decided to build a simple web app to log and visualize them instead. It's a fun way to practice building something for myself, and I'm using it to experiment with data visualization and personal analytics.",
        stack: [
            'React', 'Vite', 'Node.js/Hono', 'TypeScript', 'Firestore', 'PostgreSQL (CloudSQL)',
            'Cloud Run', 'Secret Manager', 'Docker',
        ],
        status: 'In progress',
        github: 'https://github.com/mightyoakcoder/logMyStandup',
        live: 'https://www.logmystandup.com',
    },
    {
        name: 'Weeks In Bloom',
        description:
            "A garden tracking app I built for myself to keep track of what I'm growing, when things bloom, and how to care for them. It's a work in progress, but I wanted to share it here as an example of a more personal project that I'm building primarily for fun and learning.",
        stack: [
            'React', 'Vite', 'Node.js/Express', 'Firestore', 'Docker', 'Cloud Storage', 'Cloud Run', 'Secret Manager',
        ],
        status: 'In progress',
        github: 'https://github.com/mightyoakcoder/weeksInBloom',
        live: 'https://weeks-in-bloom-300698846147.us-central1.run.app',
    },
];

export default function Projects() {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen px-4" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', paddingTop: '2rem', paddingBottom: '4rem' }}>
            <div className="max-w-2xl w-full">
                <h1 className="page-header font-bold mb-2" style={{ color: 'var(--color-accent)' }}>Projects</h1>
                <p className="text-sm mb-10" style={{ color: 'var(--color-text)', opacity: 0.6 }}>These are works in progress — real things I'm building and learning from.</p>

                <div className="space-y-8">
                    {projects.map((project) => (
                        <div
                            key={project.name}
                            className="rounded-lg p-6" style={{ backgroundColor: 'var(--color-card-bg)', border: '1px solid var(--color-card-border)' }}
                        >
                            <div className="flex items-start justify-between gap-4 mb-3">
                                <h2 className="text-xl font-semibold">{project.name}</h2>
                                <span className="text-xs uppercase tracking-widest font-semibold shrink-0 mt-1" style={{ color: 'var(--color-status)' }}>
                                    {project.status}
                                </span>
                            </div>

                            <p className="mb-4" style={{ opacity: 0.8 }}>{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-5">
                                {project.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-sm px-3 py-1 rounded-full border font-medium"
                                        style={{ color: 'var(--color-accent)', borderColor: 'var(--color-accent)' }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-3 text-sm">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 px-4 py-1.5 rounded-full font-medium transition-opacity hover:opacity-80"
                                        style={{ backgroundColor: 'var(--color-highlight)', color: 'white' }}
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                                        GitHub
                                    </a>
                                )}
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 px-4 py-1.5 rounded-full font-medium transition-opacity hover:opacity-80"
                                        style={{ backgroundColor: 'var(--color-highlight)', color: 'white' }}
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                                        Live site
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
