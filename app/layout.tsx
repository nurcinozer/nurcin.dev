import './global.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Sidebar from '../components/sidebar';
import { Analytics } from '@vercel/analytics/react';
import Spotify from 'components/spotify';
import {
	ArrowIcon,
	BookmarkIcon,
	GitHubIcon,
	TwitterIcon,
	YoutubeIcon,
} from 'components/icons';
import { getRaindropBookmarks } from 'lib/metrics';

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
	let raindropBookmarks;

	try {
		[raindropBookmarks] = await Promise.all([getRaindropBookmarks()]);
	} catch (error) {
		console.error(error);
	}

	return (
		<html
			lang="en"
			className={clsx(
				'text-black bg-white dark:text-white dark:bg-[#111010]',
				kaisei.variable,
			)}>
			<body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
				<Sidebar />
				<Spotify />
				<div className="flex flex-col">
					<main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col border border-neutral-200 dark:border-neutral-800 rounded-lg p-4">
						{children}
						<Analytics />
					</main>
					<div className="flex flex-col md:flex-row gap-2 md:gap-2 mt-5">
						<a
							rel="noopener noreferrer"
							target="_blank"
							href="https://twitter.com/nurcinozer"
							className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between">
							<div className="flex items-center">
								<TwitterIcon />
								<div className="ml-3">My tweets</div>
							</div>
							<ArrowIcon />
						</a>
						<a
							rel="noopener noreferrer"
							target="_blank"
							href="https://github.com/nurcinozer"
							className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between">
							<div className="flex items-center">
								<GitHubIcon />
								<div className="ml-3">My projects</div>
							</div>
							<ArrowIcon />
						</a>
						<a
							rel="noopener noreferrer"
							target="_blank"
							href="https://raindrop.io/nurcin/nurcins-bookmarks-34870461"
							className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between">
							<div className="flex items-center">
								<BookmarkIcon />
								<div className="ml-3">
									{raindropBookmarks === 1
										? `${raindropBookmarks.toLocaleString()} bookmark`
										: `${raindropBookmarks.toLocaleString()} bookmarks`}
								</div>
							</div>
							<ArrowIcon />
						</a>
					</div>
				</div>
			</body>
		</html>
	);
}
