export default function About() {
    return (
        <div className="flex flex-col items-center justify-start pt-16 min-h-screen bg-gray-900 text-white">
            <h1 className="text-4xl font-bold mb-4 text-[#60A5FA]">About Me</h1>
            <p className="text-lg max-w-2xl text-justify indent-8">
                In 2022 I ended a 13-year career in apparel design to pursue my passion for software development. I enrolled in a 12-week immersive coding bootcamp, where I built full-stack applications and honed my skills in JavaScript, Node.js, React, and PostgreSQL.
            </p>
            <p className="text-lg max-w-2xl text-justify mt-4 indent-8">
                Since graduating, I've grown from an intern to a full-time backend engineer at a high-traffic consumer-facing platform, where I've designed and implemented RESTful APIs, built CI/CD pipelines, and led a migration to Google Cloud Platform. I'm excited to keep growing as a developer and work on projects that make a real impact. I'm also comfortable jumping into the frontend when needed — and honestly, I enjoy it.
            </p>
            <p className="text-lg max-w-2xl text-justify mt-4 indent-8">
                I recently earned my Google Associate Cloud Engineer certification, and I'm looking to put my cloud infrastructure and backend skills to work building scalable, efficient applications. Outside of work, I enjoy spending time with my husband and two young sons, crafting, and exploring new technologies.
            </p>
        </div>
    );
}