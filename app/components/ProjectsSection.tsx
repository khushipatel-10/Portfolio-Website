'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "./ProjectData";
// import { ProjectsSection } from "./Projects";

export default function ProjectsSection() {
	return (
		<section id="projects" className="py-16 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-12 text-center"
				>
					Projects
				</motion.h2>

				{/* Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((p) => (
						<Link
							key={p.slug}
							href={`/projects/${p.slug}`}
							className="group bg-purple-500/5 border border-purple-500/30 rounded-xl overflow-hidden hover:border-purple-400 transition-all"
						>
							{/* Thumbnail */}
							<div className="relative w-full h-44">
								<Image
									src={p.thumbnail}
									alt={p.title}
									fill
									className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
								/>
							</div>

							{/* Text */}
							<div className="p-5">
								<h3 className="text-lg font-bold text-purple-300 group-hover:text-purple-200 transition-colors">
									{p.title}
								</h3>
								<p className="text-sm text-gray-400 mt-1">{p.date}</p>
								<p className="text-sm text-gray-300 mt-3">
									{p.shortDescription}
								</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}

