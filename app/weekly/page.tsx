import type { Metadata } from 'next';
import Link from 'next/link';
import { allBlogs } from 'contentlayer/generated';
import { ArrowIcon } from 'components/icons';
import { useRef, useState } from 'react';
import Subscription from 'components/subscription';

export const metadata: Metadata = {
	title: 'Weekly',
	description:
		'I am sharing a short post on what I’ve been reading, watching, and learning as well as a few favourite links from the web every week.',
};

export default async function BlogPage() {
	return (
		<>
			<section className="border border-neutral-200 dark:border-neutral-800 rounded-lg md:p-8 p-4">
				<h1 className="font-bold text-3xl font-serif">Weekly</h1>
				<p className="my-5 text-neutral-800 dark:text-neutral-200">
					I am sharing a short post on what I’ve been reading,
					watching, and learning as well as a few favourite links from
					the web every week.
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
			<section className="mt-8 border border-neutral-200 dark:border-neutral-800 rounded-lg md:p-8 p-4">
				<h1 className="font-bold text-3xl font-serif">Subscribe</h1>
				<p className="my-5 text-neutral-800 dark:text-neutral-200">
					Subscribe to my newsletter to get notified when I publish a
					new post.
				</p>
				<hr className="my-8 border-neutral-200 dark:border-neutral-700" />
				<Subscription />
			</section>
		</>
	);
}
