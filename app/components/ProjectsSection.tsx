'use client';

import { motion } from 'framer-motion';

export default function ProjectsSection() {
	return (
		<section className="py-8 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-16 text-center"
				>
					Projects
				</motion.h2>

				<div className="space-y-16">

					{/* Omni AI Generative AI Platform */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-purple-500/5 border border-purple-500/30 rounded-xl overflow-hidden"
					>
						<div className="p-8">
							<h3 className="text-2xl font-bold text-purple-400 mb-2 flex items-center">
								<span>Omni AI Generative AI Platform</span>
								<a
									href="https://github.com/khushipatel-10/Omni-AI" 
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm text-purple-300 hover:text-purple-100 underline ml-3"
								>
									(GitHub)
								</a>
							</h3>
							<p className="py-2 italic text-gray-400">Jun 2025 – Present</p>
							<p className="text-gray-200 mb-6">
								Architected a modular PERN stack generative AI platform incorporating multiple services via a unified dashboard.
							</p>
							<ul className="space-y-2 text-m text-gray-400 mb-4">
								<li>• Designed modular React components and nested dynamic routing</li>
								<li>• Implemented role-based access with Clerk authentication</li>
								<li>• Delivered visually consistent UI to reduce bounce rate and improve user engagement</li>
							</ul>
						</div>
					</motion.div>

					{/* Insider Trading Detection */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-purple-500/5 border border-purple-500/30 rounded-xl overflow-hidden"
					>
						<div className="p-8">
							<h3 className="text-2xl font-bold text-purple-400 mb-2 flex items-center">
								<span>Insider Trading Detection</span>
								<a
									href="https://github.com/khushipatel-10/Insider-Trading"
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm text-purple-300 hover:text-purple-100 underline ml-3"
								>
									(GitHub)
								</a>
							</h3>
							<p className="py-2 italic text-gray-400">Jan 2025 – Apr 2025</p>
							<p className="text-gray-200 mb-6">
								Engineered a deep learning model, achieving 95% accuracy in detecting price fluctuations for risk assessment.
							</p>
							<ul className="space-y-2 text-m text-gray-400 mb-4">
								<li>• Generated anomaly detection graphs to flag potential insider trades with 90% precision</li>
								<li>• Leveraged LangChain to fetch knowledge graph data, improving insights fidelity by 40%</li>
								<li>• Built a scalable pipeline for anomaly detection in financial datasets</li>
							</ul>
						</div>
					</motion.div>

					{/* NutriNet Multimodal Meal Nutrition Analysis */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-purple-500/5 border border-purple-500/30 rounded-xl overflow-hidden"
					>
						<div className="p-8">
							<h3 className="text-2xl font-bold text-purple-400 mb-2 flex items-center">
								<span>NutriNet Multimodal Meal Nutrition Analysis</span>
								<a
									href="https://github.com/khushipatel-10/NutriNet" 
									target="_blank"
									rel="noopener noreferrer"
									className="text-sm text-purple-300 hover:text-purple-100 underline ml-3"
								>
									(GitHub)
								</a>
							</h3>
							<p className="py-2 italic text-gray-400">Jan 2025 – Apr 2025</p>
							<p className="text-gray-200 mb-6">
								Developed a multimodal deep learning model integrating CGM, demographic, microbiome, and meal image data to estimate caloric intake.
							</p>
							<ul className="space-y-2 text-m text-gray-400 mb-4">
								<li>• Achieved RMSRE of 0.3035 on validation dataset</li>
								<li>• Built preprocessing pipelines for time-series, categorical, and image data</li>
								<li>• Improved model performance with dimensionality reduction and normalization techniques</li>
							</ul>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
