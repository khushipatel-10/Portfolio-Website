'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';


export default function HeroSection() {
	const [selectedStack, setSelectedStack] = useState<'frontend' | 'backend' | 'devops' | null>(null);

	return (
		<section id='hero' className="min-h-screen relative overflow-hidden py-24 md:py-0">
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 " />
			</div>

			<div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-8 md:pt-0">
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8 md:mb-12">
					<div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
						<h1 className="mt-24 text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500">
							Khushi Patel
						</h1>
						{/* <h2 className="text-2xl py-5 md:text-4xl font-bold text-white">Software Developer</h2>*/}

						<h2 className="text-2xl py-5 md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400">
							<TypeAnimation
								sequence={[
									'Software Developer',
									2000,
									'',
									'Data Scientist',
									2000,
									'',
									'AI/ML Enthusiast',
									2000,
									'',
								]}
								wrapper="span"
								speed={50}
								deletionSpeed={40}
								repeat={Infinity}
								cursor={true}
							/>
						</h2>


						<p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
							I craft end-to-end solutions with 2+ years of experience building scalable applications and leading development teams.
						</p>
						<p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
							Currently Graduate Assistant at the <span className="text-blue-400">Career Center </span> at{' '}
							<span className="text-purple-400">Texas A&M</span>
						</p>
					</div>
					<div className="flex flex-wrap justify-center gap-2 py-3 md:gap-3 mb-6 md:mb-8">
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/20 rounded-full text-blue-300 text-xs md:text-sm font-bold">TypeScript</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/20 rounded-full text-purple-300 text-xs md:text-sm font-bold">React & Next.js</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-500/20 rounded-full text-teal-300 text-xs md:text-sm font-bold">Node.js</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/20 rounded-full text-blue-300 text-xs md:text-sm font-bold">Python</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/20 rounded-full text-purple-300 text-xs md:text-sm font-bold">SQL</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-500/20 rounded-full text-teal-300 text-xs md:text-sm font-bold">Google Cloud</span>
					</div>


					{/* Contact Buttons */}
					<div className="flex flex-col sm:flex-row justify-center gap-4">
						<a
							href="mailto:kp1032@tamu.edu"
							className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
								<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
							</svg>
							Get in Touch
						</a>
						<a
							href="https://drive.google.com/file/d/1Vxv64ZCuco8sENnSlm3WGNTcZNjtxsBb/view?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
							className="px-8 py-3 bg-black border border-gray-800 rounded-lg font-medium hover:bg-gray-900 transition-colors inline-flex items-center justify-center gap-2"
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path
									fillRule="evenodd"
									d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
									clipRule="evenodd"
								/>
								<path fillRule="evenodd" d="M8 11a1 1 0 100 2h4a1 1 0 100-2H8zm0-4a1 1 0 100 2h4a1 1 0 100-2H8z" clipRule="evenodd" />
							</svg>
							View Resume
						</a>

					</div>

					{/* Contact Button */}
					{/* <button
						onClick={() => {
							const el = document.getElementById("contact");
							el?.scrollIntoView({ behavior: "smooth" });
						}}
						className="px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
					>
						Contact Me
					</button> */}



				</motion.div>

				{/* Interactive System Architecture */}
				<div className="w-full max-w-5xl mx-auto relative px-2 md:px-4">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-8"
					>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
							{/* Frontend Layer */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${selectedStack === 'frontend' ? 'bg-blue-500/20 border-blue-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
									}`}
								onMouseEnter={() => setSelectedStack('frontend')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-400">Frontend Development</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-300">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										Modern React Architectures
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										Performance Optimization
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										Responsive & Interactive UIs
									</li>
								</ul>
							</div>

							{/* Backend Layer */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${selectedStack === 'backend' ? 'bg-purple-500/20 border-purple-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
									}`}
								onMouseEnter={() => setSelectedStack('backend')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-purple-400">Backend Development</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-300">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										API Design & Development
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										Database Architecture
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										Real-time Systems
									</li>
								</ul>
							</div>

							{/* DevOps Layer */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${selectedStack === 'devops' ? 'bg-teal-500/20 border-teal-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
									}`}
								onMouseEnter={() => setSelectedStack('devops')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-teal-400">DevOps & Cloud</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-300">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										AWS Infrastructure
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										CI/CD Pipelines
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										Scalable Architecture
									</li>
								</ul>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
