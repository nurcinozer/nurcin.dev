import Image from 'next/image';
import { name, about, bio, avatar } from 'lib/info';
import {
	TwitterIcon,
	ArrowIcon,
	GitHubIcon,
	BookmarkIcon,
} from 'components/icons';
import { getRaindropBookmarks } from 'lib/metrics';

export const revalidate = 60;

export default async function HomePage() {
	let raindropBookmarks;

	try {
		[raindropBookmarks] = await Promise.all([getRaindropBookmarks()]);
	} catch (error) {
		console.error(error);
	}

	return (
		<>
			<section className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-8">
				<h1 className="font-bold text-3xl font-serif">{name}</h1>
				<div className="flex items-start mt-8 flex-col md:flex-row gap-6">
					<Image
						alt={name}
						className="rounded-lg grayscale -z-10"
						src={avatar}
						placeholder="blur"
						width={110}
						priority
					/>
					<div className="w-full">
						<p className="text-neutral-800 dark:text-neutral-200">
							{about()}
						</p>
						<p className="mt-4 text-neutral-800 dark:text-neutral-200">
							{bio()}
						</p>
					</div>
				</div>
			</section>
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
							{`My ${raindropBookmarks.toLocaleString()} bookmarks`}
						</div>
					</div>
					<ArrowIcon />
				</a>
			</div>
		</>
	);
}
