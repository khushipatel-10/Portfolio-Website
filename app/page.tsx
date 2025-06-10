'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import ExpSection  from './components/ExpSection';

export default function FullStackPortfolio() {
	return (
		<main className="min-h-screen text-white">
			<HeroSection />
			<ExpSection />
			<ProjectsSection />
			<ContactSection />
		</main>
	);
}
