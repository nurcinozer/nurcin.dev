import type { Metadata } from 'next';
import Link from 'next/link';
import { allBlogs } from 'contentlayer/generated';
import { ArrowIcon } from 'components/icons';

export const metadata: Metadata = {
	title: 'Blog',
	description: 'Read my thoughts on software development, design, and more.',
};

export default async function BlogPage() {
	return (
		<section className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-8">
			<h1 className="font-bold text-3xl font-serif">Weekly</h1>
			<p className="my-5 text-neutral-800 dark:text-neutral-200">
				Every week I write a short post about what I've been reading,
				watching, and learning. I also share some of my favorite links
				from around the web.
			</p>
			<hr className="my-8 border-neutral-200 dark:border-neutral-700" />
			{allBlogs
				.sort((a, b) => {
					if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
						return -1;
					}
					return 1;
				})
				.map(post => (
					<Link
						key={post.slug}
						className="flex space-y-1 mb-4"
						href={`/weekly/${post.slug}`}>
						<div className="w-full flex items-center">
							<ArrowIcon />
							<p>{post.title}</p>
						</div>
					</Link>
				))}
		</section>
	);
}
