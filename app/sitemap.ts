import { allBlogs } from 'contentlayer/generated';

export default async function sitemap() {
	const blogs = allBlogs.map(post => ({
		url: `https://nurcin.dev/weekly/${post.slug}`,
		lastModified: post.publishedAt,
	}));

	const routes = ['', '/about', '/weekly'].map(route => ({
		url: `https://nurcin.dev${route}`,
		lastModified: new Date().toISOString().split('T')[0],
	}));

	return [...routes, ...blogs];
}
