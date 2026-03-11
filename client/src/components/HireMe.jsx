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
                description: 'Take a feature from the database all the way to the UI — I\'m comfortable across the full stack.',
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
        <div className="flex flex-col items-center justify-start pt-16 min-h-screen bg-gray-900 text-white px-4">
            <div className="max-w-2xl w-full">
                <h1 className="text-4xl font-bold mb-4 text-[#60A5FA]">Hire Me</h1>
                <p className="text-lg text-gray-300 mb-10">
                    I'm a junior backend engineer with hands-on experience building APIs, setting up CI/CD pipelines, and working with cloud infrastructure.
                    I work best on teams where I can contribute meaningfully, keep learning, and pair with engineers who like to share what they know — and I'm always happy to return the favor.
                    If you're looking for someone eager, reliable, and ready to grow with your team, I'd love to talk.
                </p>

                <p className="text-lg font-semibold mb-6">I can help your team with:</p>

                <div className="space-y-10">
                    {services.map((group) => (
                        <div key={group.category}>
                            <h2 className="text-sm uppercase tracking-widest text-[#60A5FA] font-semibold mb-3">
                                {group.category}
                            </h2>
                            <ul className="space-y-4">
                                {group.items.map((item) => (
                                    <li key={item.title}>
                                        <span className="font-semibold text-white">{item.title}: </span>
                                        <span className="text-gray-300">{item.description}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <p className="mt-12 text-lg text-gray-300">
                    If this sounds like a fit,{' '}
                    <a href="mailto:beckyweeks721@gmail.com" className="text-[#60A5FA] hover:underline">
                        send me an email
                    </a>
                    .
                </p>
            </div>
        </div>
    );
}
