import 'server-only';

import { Octokit } from '@octokit/rest';
import { queryBuilder } from 'lib/planetscale';
import { cache } from 'react';

export const getRaindropBookmarks = cache(async () => {
	const url = 'https://api.raindrop.io/rest/v1/collection/34870461';

	const res = await fetch(url, {
		headers: {
			Authorization: `Bearer ${process.env.RAINDROP_TEST_TOKEN}`,
		},
	});

	const data = await res.json();

	return data.item.count;
});

export const getGithubFollowers = cache(async () => {
	const octokit = new Octokit({
		auth: process.env.GITHUB_TOKEN,
	});

	const req = await octokit.request('GET /users/{username}', {
		username: 'nurcinozer',
		headers: {
			'X-GitHub-Api-Version': '2022-11-28',
		},
	});

	return req.data.followers;
});
