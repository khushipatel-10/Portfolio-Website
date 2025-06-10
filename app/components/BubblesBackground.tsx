'use client';

export default function BubblesBackground() {
	return (
		<div className="fixed inset-0 -z-0 overflow-hidden">
			<div className="absolute w-full h-full animate-bubbleMotion">
				{Array.from({ length: 30 }).map((_, i) => (
					<span
						key={i}
						className="absolute block w-2 h-2 bg-purple-500 rounded-full opacity-40 animate-float"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							animationDelay: `${Math.random() * 10}s`,
							animationDuration: `${6 + Math.random() * 10}s`,
						}}
					/>
				))}
			</div>
		</div>
	);
}
