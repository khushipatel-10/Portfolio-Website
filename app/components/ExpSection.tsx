'use client';

import { motion } from 'framer-motion';

export default function ExpSection() {
    return (
        <section id='experience' className="py-8 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-16 text-center">
                    Experience
                </motion.h2>

                <div className="space-y-16">
                    {/* Graduate Assistant - Career Center */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
                    >
                        <div className="p-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-4">Graduate Assistant (Non-Teaching)</h3>
                                        <h4 className="text-xl mb-4">Career Center, Texas A&M University</h4>
                                        <p className="mb-2 text-m italic text-gray-400">Sep 2025 - Present</p>

                                        <p className="text-gray-300">
                                            Supported student career development through resume and LinkedIn reviews, interview preparation,
                                            and networking strategy guidance to improve professional outcomes.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="text-m font-semibold text-blue-400 mb-3">Core Responsibilities</h4>
                                            <ul className="space-y-2 text-m text-gray-400">
                                                <li>• Reviewed 800+ resumes and LinkedIn profiles</li>
                                                <li>• Provided personalized feedback for career growth</li>
                                                <li>• Guided students in networking and interview prep</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-m font-semibold text-purple-400 mb-3">Impact</h4>
                                            <ul className="space-y-2 text-m text-gray-400">
                                                <li>• Strengthened employer and recruiter engagement</li>
                                                <li>• Improved student placement and career confidence</li>
                                                <li>• Enhanced university career resource visibility</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-black/30 rounded-xl p-6">
                                    <h4 className="text-m font-semibold text-gray-400 mb-4">Career Guidance Workflow</h4>
                                    <div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
                                        <svg className="w-full h-full" viewBox="0 0 400 300">
                                            <g>
                                                <rect x="20" y="20" width="360" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
                                                <text x="200" y="45" textAnchor="middle" className="fill-gray-300 text-[12px]">
                                                    Student Submits Resume / LinkedIn
                                                </text>
                                            </g>
                                            <g>
                                                <rect x="20" y="90" width="360" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
                                                <text x="200" y="115" textAnchor="middle" className="fill-gray-300 text-[12px]">
                                                    Graduate Assistant Review + Feedback
                                                </text>
                                            </g>
                                            <g>
                                                <rect x="20" y="160" width="360" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
                                                <text x="200" y="185" textAnchor="middle" className="fill-gray-300 text-[12px]">
                                                    Career Consultation / Strategy Session
                                                </text>
                                            </g>
                                            <g>
                                                <rect x="20" y="230" width="360" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
                                                <text x="200" y="255" textAnchor="middle" className="fill-gray-300 text-[12px]">
                                                    Updated Profile + Improved Job Outcomes
                                                </text>
                                            </g>
                                            <g className="stroke-gray-600" strokeWidth="1">
                                                <line x1="200" y1="60" x2="200" y2="90" />
                                                <line x1="200" y1="130" x2="200" y2="160" />
                                                <line x1="200" y1="200" x2="200" y2="230" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>


                    {/* FossilSketch Educational Platform */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
                    >
                        <div className="p-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-4">Software Developer</h3>
                                        <h4 className="text-xl mb-4">Sketch Recognition Lab, Texas A&M</h4>
                                        <p className='mb-2 text-m italic text-gray-400'>Apr 2025 - Present</p>

                                        <p className="text-gray-300">
                                            Interactive Paleontology Learning Platform powering research-led games, class-based modules, and student progress tracking for 10K+ learners.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="text-m font-semibold text-blue-400 mb-3">Frontend Architecture</h4>
                                            <ul className="space-y-2 text-m text-gray-400">
                                                <li>• Next.js + Mantine UI</li>
                                                <li>• Role-based UI Rendering (Student/Instructor/Admin)</li>
                                                <li>• Dynamic Module Ordering and Game Access</li>
                                                <li>• PWA with Offline-first Features</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-m font-semibold text-purple-400 mb-3">Backend Systems</h4>
                                            <ul className="space-y-2 text-m text-gray-400">
                                                <li>• Node.js + Express + tRPC APIs</li>
                                                <li>• MariaDB + TypeORM Schema Mappings</li>
                                                <li>• Google Cloud Bucket for Asset Storage</li>
                                                <li>• SQL Triggers for Cross-Table Integrity</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="text-m font-semibold text-teal-400">Key Achievements</h4>
                                        <ul className="space-y-2 text-m text-gray-400">
                                            <li>• Designed role-based classroom access and content delivery logic</li>
                                            <li>• Reduced manual instructor setup by building fossil classification UIs</li>
                                            <li>• Enabled daily DB backups and Adminer access via Docker stack</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-black/30 rounded-xl p-6">
                                    <h4 className="text-m font-semibold text-gray-400 mb-4">System Architecture</h4>
                                    <div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
                                        <svg className="w-full h-full" viewBox="0 0 400 300">
                                            {/* Client Layer */}
                                            <g>
                                                <rect x="20" y="20" width="360" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
                                                <text x="200" y="45" textAnchor="middle" className="fill-gray-300 text-[12px]">
                                                    Next.js + Mantine Frontend (Student/Instructor/Admin)
                                                </text>
                                            </g>

                                            {/* API Layer */}
                                            <g>
                                                <rect x="20" y="80" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
                                                <rect x="210" y="80" width="170" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
                                                <text x="105" y="105" textAnchor="middle" className="fill-gray-300 text-[12px]">
                                                    tRPC API Layer
                                                </text>
                                                <text x="295" y="105" textAnchor="middle" className="fill-gray-300 text-[12px]">
                                                    Express Auth & Routing
                                                </text>
                                            </g>

                                            {/* Database Layer */}
                                            <g>
                                                <rect x="20" y="150" width="360" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
                                                <text x="200" y="175" textAnchor="middle" className="fill-gray-300 text-[12px]">
                                                    MariaDB via TypeORM (Users, Progress, Fossils)
                                                </text>
                                            </g>

                                            {/* Storage + Dev Tools */}
                                            <g>
                                                <rect x="20" y="220" width="170" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
                                                <rect x="210" y="220" width="170" height="30" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
                                                <text x="105" y="240" textAnchor="middle" className="fill-gray-300 text-[12px]">
                                                    GCP Bucket (Images)
                                                </text>
                                                <text x="295" y="240" textAnchor="middle" className="fill-gray-300 text-[12px]">
                                                    Adminer via Docker
                                                </text>
                                            </g>

                                            {/* Connection Lines */}
                                            <g className="stroke-gray-600" strokeWidth="1">
                                                <line x1="200" y1="60" x2="200" y2="80" />
                                                <line x1="105" y1="120" x2="105" y2="150" />
                                                <line x1="295" y1="120" x2="295" y2="150" />
                                                <line x1="200" y1="190" x2="200" y2="220" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Research Assistant Experience */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
                    >
                        <div className="p-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-4">Research Assistant</h3>
                                        <h4 className="text-xl mb-4">Mays Business School, Texas A&M</h4>
                                        <p className='mb-2 text-m italic text-gray-400'>Jan 2025 - Apr 2025</p>

                                        <p className="text-gray-300">
                                            Led data analysis on U.S. lobbying activity by processing 1M+ entries from quarterly reports, automating cleanup workflows, and visualizing spending and client relationships.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="text-m font-semibold text-blue-400 mb-3">Tools & Libraries</h4>
                                            <ul className="space-y-2 text-m text-gray-400">
                                                <li>• Python, SQL, Pandas</li>
                                                <li>• NumPy, Matplotlib, Seaborn</li>
                                                <li>• Data Merging Pipelines</li>
                                                <li>• Jupyter + CLI Automation</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-m font-semibold text-purple-400 mb-3">Dataset Scope</h4>
                                            <ul className="space-y-2 text-m text-gray-400">
                                                <li>• 1M+ lobbying records</li>
                                                <li>• 5–6 quarterly CSV batches</li>
                                                <li>• Client-spend relationships</li>
                                                <li>• Legislative metadata joins</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="text-m font-semibold text-teal-400">Key Achievements</h4>
                                        <ul className="space-y-2 text-m text-gray-400">
                                            <li>• Built automated merge + cleanup pipeline for quarterly data</li>
                                            <li>• Uncovered trends in lobbying spend and top client clusters</li>
                                            <li>• Resolved schema conflicts across multi-source datasets</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-black/30 rounded-xl p-6">
                                    <h4 className="text-m font-semibold text-gray-400 mb-4">Data Pipeline Diagram</h4>
                                    <div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
                                        <svg className="w-full h-full" viewBox="0 0 400 300">
                                            {/* Data Sources */}
                                            <g>
                                                <rect x="20" y="20" width="170" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
                                                <rect x="210" y="20" width="170" height="30" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
                                                <text x="105" y="40" textAnchor="middle" className="fill-gray-300 text-[12px]">
                                                    Lobbying CSVs
                                                </text>
                                                <text x="295" y="40" textAnchor="middle" className="fill-gray-300 text-[12px]">
                                                    Reference Tables
                                                </text>
                                            </g>

                                            {/* ETL Layer */}
                                            <g>
                                                <rect x="20" y="80" width="360" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
                                                <text x="200" y="105" textAnchor="middle" className="fill-gray-300 text-[12px]">
                                                    Python ETL Pipeline (Clean + Normalize)
                                                </text>
                                            </g>

                                            {/* Database Layer */}
                                            <g>
                                                <rect x="20" y="150" width="360" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
                                                <text x="200" y="175" textAnchor="middle" className="fill-gray-300 text-[12px]">
                                                    Local SQL DB (Merged Lobbying Dataset)
                                                </text>
                                            </g>

                                            {/* Visualization Layer */}
                                            <g>
                                                <rect x="20" y="220" width="360" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
                                                <text x="200" y="245" textAnchor="middle" className="fill-gray-300 text-[12px]">
                                                    Matplotlib + Seaborn (Trends, Spend, Clusters)
                                                </text>
                                            </g>

                                            {/* Connection Lines */}
                                            <g className="stroke-gray-600" strokeWidth="1">
                                                <line x1="105" y1="50" x2="105" y2="80" />
                                                <line x1="295" y1="50" x2="295" y2="80" />
                                                <line x1="200" y1="120" x2="200" y2="150" />
                                                <line x1="200" y1="190" x2="200" y2="220" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Software Developer - Algorithm Visualization */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
                    >
                        <div className="p-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-4">Software Developer</h3>
                                        <h4 className="text-xl mb-4">Texas A&M University</h4>
                                        <p className='mb-2 text-m italic text-gray-400'>Oct 2024 - Dec 2024</p>

                                        <p className="text-gray-300">
                                            Developed interactive algorithm visualizations using a custom JS framework, enabling user-driven learning and reducing logic complexity by 80%.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="text-m font-semibold text-blue-400 mb-3">Frontend Design</h4>
                                            <ul className="space-y-2 text-m text-gray-400">
                                                <li>• Custom Canvas-based Visualization Engine</li>
                                                <li>• JavaScript, TypeScript, HTML5, CSS3</li>
                                                <li>• Throttled Input & Optimized Rendering</li>
                                                <li>• Cross-Browser Compatibility</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-m font-semibold text-purple-400 mb-3">Development Process</h4>
                                            <ul className="space-y-2 text-m text-gray-400">
                                                <li>• Agile-style Weekly Code Reviews</li>
                                                <li>• Performance Bottleneck Fixes</li>
                                                <li>• Modular Component Reusability</li>
                                                <li>• Git-based Team Collaboration</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="text-m font-semibold text-teal-400">Key Achievements</h4>
                                        <ul className="space-y-2 text-m text-gray-400">
                                            <li>• Reduced visualization complexity by 80%</li>
                                            <li>• Led testing and usability optimization</li>
                                            <li>• Delivered project with fully documented modular code</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-black/30 rounded-xl p-6">
                                    <h4 className="text-m font-semibold text-gray-400 mb-4">Architecture Overview</h4>
                                    <div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
                                        <svg className="w-full h-full" viewBox="0 0 400 300">
                                            {/* UI Layer */}
                                            <g>
                                                <rect x="20" y="20" width="360" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
                                                <text x="200" y="45" textAnchor="middle" className="fill-gray-300 text-[12px]">
                                                    HTML5 Canvas UI (User Input + Output Rendering)
                                                </text>
                                            </g>

                                            {/* Logic Engine */}
                                            <g>
                                                <rect x="20" y="90" width="360" height="40" rx="4" className="fill-purple-500/20 stroke-purple-500" strokeWidth="1" />
                                                <text x="200" y="115" textAnchor="middle" className="fill-gray-300 text-[12px]">
                                                    Visualization Logic Engine (TypeScript Modules)
                                                </text>
                                            </g>

                                            {/* Optimization Layer */}
                                            <g>
                                                <rect x="20" y="160" width="360" height="40" rx="4" className="fill-teal-500/20 stroke-teal-500" strokeWidth="1" />
                                                <text x="200" y="185" textAnchor="middle" className="fill-gray-300 text-[12px]">
                                                    Performance Optimizations (Throttling, Debounce)
                                                </text>
                                            </g>

                                            {/* Testing Layer */}
                                            <g>
                                                <rect x="20" y="230" width="360" height="40" rx="4" className="fill-blue-500/20 stroke-blue-500" strokeWidth="1" />
                                                <text x="200" y="255" textAnchor="middle" className="fill-gray-300 text-[12px]">
                                                    Cross-browser Testing + QA Automation
                                                </text>
                                            </g>

                                            {/* Connection Lines */}
                                            <g className="stroke-gray-600" strokeWidth="1">
                                                <line x1="200" y1="60" x2="200" y2="90" />
                                                <line x1="200" y1="130" x2="200" y2="160" />
                                                <line x1="200" y1="200" x2="200" y2="230" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>


                </div>
            </div>
        </section>
    );
}
