import './globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import BubblesBackground from './components/BubblesBackground';
import Script from 'next/script'; // 👈 add this

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

				<Script id="disable-scroll-restoration" strategy="beforeInteractive">
					{`try { if ('scrollRestoration' in history) history.scrollRestoration = 'manual'; } catch(e) {}`}
				</Script>

				<Script id="strip-initial-hash" strategy="beforeInteractive">
					{`try { if (location.hash) history.replaceState(null, '', location.pathname + location.search); } catch(e) {}`}
				</Script>

				<div className="relative z-10">{children}</div>
				<BubblesBackground />
			</body>
		</html>
	);
}
