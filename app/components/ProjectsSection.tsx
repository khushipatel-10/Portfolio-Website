'use client';

import { motion } from 'framer-motion';

export default function ProjectsSection() {
	return (
		<section className="py-8 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-16 text-center">
					Projects
				</motion.h2>

				<div className="space-y-16">
					{/* Insider Trading Detection */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-purple-500/5 border border-purple-500/30 rounded-xl overflow-hidden"
					>
						<div className="p-8">
							<h3 className="text-2xl font-bold text-purple-400 mb-2">Insider Trading Detection</h3>
							<p className='py-2 italic text-gray-400'>Jan 2025 - Apr 2025</p>
							<p className="text-gray-200 mb-6">
								Engineered a deep learning pipeline to detect anomalous trading behavior, achieving 95% accuracy in flagging stock price fluctuations.
							</p>
							<ul className="space-y-2 text-m text-gray-400">
								<li>• Developed anomaly detection graphs using Pandas and Matplotlib</li>
								<li>• Integrated LangChain with knowledge graphs to improve detection fidelity by 40%</li>
								<li>• Delivered precision score of 90% for identifying suspicious patterns</li>
							</ul>
						</div>
					</motion.div>

					{/* Virtual Pointer Project */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-purple-500/5 border border-purple-500/30 rounded-xl overflow-hidden"
					>
						<div className="p-8">
							<h3 className="text-2xl font-bold text-purple-400 mb-2">Virtual Pointer Using Mouse-less Navigation</h3>
							<p className='py-2 italic text-gray-400'>Nov 2024 - Dec 2024</p>
							<p className="text-gray-200 mb-6">
								Built a touchless virtual input system using OpenCV and CNNs to interpret hand gestures and control pointer movement.
							</p>
							<ul className="space-y-2 text-m text-gray-400">
								<li>• Applied skin color detection and background subtraction for motion isolation</li>
								<li>• Designed gesture recognition using contour analysis and thresholding</li>
								<li>• Enabled interactive navigation through webcam input without physical devices</li>
							</ul>
						</div>
					</motion.div>

					{/* Student Portal Website */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-purple-500/5 border border-purple-500/30 rounded-xl overflow-hidden"
					>
						<div className="p-8">
							<h3 className="text-2xl font-bold text-purple-400 mb-2">Student Portal Website</h3>
							<p className='py-2 italic text-gray-400'>Jan 2024 - May 2024</p>
							<p className="text-gray-200 mb-6">
								Developed a university-wide student portal for over 40,000 users to access academic resources and self-service tools.
							</p>
							<ul className="space-y-2 text-m text-gray-400">
								<li>• Built responsive frontend with modular React components and performance-optimized logic</li>
								<li>• Reduced codebase complexity by 30% through documentation and refactoring</li>
								<li>• Collaborated with backend and QA teams to deliver scalable, production-grade features</li>
							</ul>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}