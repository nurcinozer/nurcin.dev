import './global.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Sidebar from '../components/sidebar';
import { Analytics } from '@vercel/analytics/react';
import Spotify from 'components/spotify';

const kaisei = localFont({
	src: '../public/fonts/kaisei-tokumin-latin-700-normal.woff2',
	weight: '700',
	variable: '--font-kaisei',
	display: 'swap',
});

export const metadata: Metadata = {
	title: {
		default: 'Nurçin Özer',
		template: '%s | Nurçin Özer',
	},
	description: 'Frontend engineer with a passion for building products.',
	openGraph: {
		title: 'Nurçin Özer',
		description: 'Frontend engineer with a passion for building products.',
		url: 'https://nurcin.dev',
		siteName: 'Nurçin Özer',
		images: [
			{
				url: 'https://nurcin.dev/og.jpg',
				width: 1920,
				height: 1080,
			},
		],
		locale: 'en-US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	twitter: {
		title: 'Nurçin Özer',
		card: 'summary_large_image',
	},
	icons: {
		shortcut: '/favicon.ico',
	},
	verification: {
		google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
		yandex: '14d2e73487fa6c71',
	},
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={clsx(
				'text-black bg-white dark:text-white dark:bg-[#111010]',
				kaisei.variable,
			)}>
			<body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-20 lg:mx-auto">
				<Sidebar />
				{/* <Spotify /> */}
				<div className="flex flex-col">
					<main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col">
						{children}
						<Analytics />
					</main>
				</div>
			</body>
		</html>
	);
}
