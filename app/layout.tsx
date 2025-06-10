import './globals.css';
// import VantaBackground from './components/BgParticles';
import { Geist, Geist_Mono } from 'next/font/google';
import BubblesBackground from './components/BubblesBackground';


const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<div className="relative z-10">{children}</div>
				<BubblesBackground />
			</body>
		</html>
	);
}
