'use client'

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type Project = {
    title: string;
    date: string;
    github: string;
    description: string;
    bullets: string[];
};

export default function ProjectClient({ project }: { project: Project }) {
    const router = useRouter();
    return (

        <section className="pt-32 pb-16 px-4">
            <div className="max-w-6xl mx-auto bg-purple-500/5 border border-purple-500/30 rounded-xl p-8">
                <h1 className="text-3xl font-bold text-purple-400 mb-2">
                    {project.title}
                </h1>

                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-4 font-semibold text-purple-300 hover:text-purple-100 hover:underline"
                >
                    View on GitHub
                </a>


                <p className="italic text-gray-400 mt-2 mb-4">{project.date}</p>

                <p className="text-gray-200 mb-6">{project.description}</p>

                <ul className="space-y-2 text-gray-300 mb-6">
                    {project.bullets.map((bullet, i) => (
                        <li key={i}>• {bullet}</li>
                    ))}
                </ul>

                <div className="space-y-8 text-gray-300 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-purple-300 mb-2">
                            Overview
                        </h2>
                        <p>{project.intro}</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-purple-300 mb-2">
                            How It Works
                        </h2>
                        <p>{project.works}</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-purple-300 mb-2">
                            Results and Learnings
                        </h2>
                        <p>{project.result}</p>
                    </section>
                </div>


                <div className="mt-10 flex gap-5">
                    {/* <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-purple-300 hover:text-purple-100 hover:underline"
                    >
                        View on GitHub
                    </a> */}

                    <button
                        onClick={() => router.push('/#projects')}
                        className="font-semibold text-gray-300 hover:text-gray-200 hover:underline"
                    >
                        Back to projects
                    </button>
                </div>
            </div>
        </section>
    );
}