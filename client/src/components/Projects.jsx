const projects = [
    {
        name: 'Snow Family Archive',
        description:
            'A private family photo archive built to preserve and share photos from my late father\'s estate. Family members can log in, browse, and upload photos in one place — something personal that also became a real exercise in full-stack and cloud development.',
        stack: [
            'React', 'Vite', 'Node.js', 'Express', 'Firestore',
            'Firebase Auth', 'Cloud Storage', 'Cloud Run', 'Docker', 'Cloud Build',
        ],
        status: 'In progress',
        github: 'https://github.com/mightyoakcoder/snowFamilyArchive',
        live: 'https://www.snowfamilyarchive.com',
    },
];

export default function Projects() {
    return (
        <div className="flex flex-col items-center justify-start pt-16 min-h-screen bg-gray-900 text-white px-4">
            <div className="max-w-2xl w-full">
                <h1 className="text-4xl font-bold mb-2 text-[#60A5FA]">Projects</h1>
                <p className="text-gray-400 text-sm mb-10">These are works in progress — real things I'm building and learning from.</p>

                <div className="space-y-8">
                    {projects.map((project) => (
                        <div
                            key={project.name}
                            className="border border-white/10 rounded-lg p-6 bg-white/5"
                        >
                            <div className="flex items-start justify-between gap-4 mb-3">
                                <h2 className="text-xl font-semibold text-white">{project.name}</h2>
                                <span className="text-xs uppercase tracking-widest text-[#60A5FA] font-semibold shrink-0 mt-1">
                                    {project.status}
                                </span>
                            </div>

                            <p className="text-gray-300 mb-4">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-5">
                                {project.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs px-2 py-1 rounded bg-white/10 text-gray-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 text-sm">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#60A5FA] hover:underline"
                                    >
                                        GitHub →
                                    </a>
                                )}
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#60A5FA] hover:underline"
                                    >
                                        Live site →
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
