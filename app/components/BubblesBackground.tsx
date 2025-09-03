'use client';

import { useEffect, useState } from 'react';

export default function BubblesBackground() {
	const [bubbles, setBubbles] = useState<
		{ left: string; top: string; animationDelay: string; animationDuration: string }[]
	>([]);

	useEffect(() => {
		const generated = Array.from({ length: 30 }).map(() => ({
			left: `${Math.random() * 100}%`,
			top: `${Math.random() * 100}%`,
			animationDelay: `${Math.random() * 10}s`,
			animationDuration: `${6 + Math.random() * 10}s`,
		}));
		setBubbles(generated);
	}, []);

	return (
		<div className="fixed inset-0 -z-10 overflow-hidden">
			<div className="absolute w-full h-full animate-bubbleMotion">
				{bubbles.map((style, i) => (
					<span
						key={i}
						className="absolute block w-2 h-2 bg-purple-500 rounded-full opacity-40 animate-float"
						style={style}
					/>
				))}
			</div>
		</div>
	);
}
