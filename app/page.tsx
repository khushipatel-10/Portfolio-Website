'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import ExpSection from './components/ExpSection';
import ScrollReset from './components/ScrollReset';

export default function FullStackPortfolio() {
	return (
		<main className="min-h-screen text-white">
			<ScrollReset />
			<HeroSection />
			<ExpSection />
			<ProjectsSection />
			<ContactSection />
		</main>
	);
}
