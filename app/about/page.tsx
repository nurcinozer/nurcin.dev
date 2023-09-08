import { ArrowIcon } from 'components/icons';

export default function AboutPage() {
	return (
		<section className="border border-neutral-200 dark:border-neutral-800 rounded-lg md:p-8 p-4">
			<h1 className="font-bold text-3xl font-serif">About Me</h1>
			<p className="my-5 text-neutral-800 dark:text-neutral-200">
				I am a meticulous software engineer with 3+ years experience
				working in high-growth startups that have been backed by firms
				like Accel. I love creating software that is beautiful outside
				and inside, for which I stay up to date with latest technologies
				and issues in our industry.
			</p>

			<p className="my-5 text-neutral-800 dark:text-neutral-200">
				If you'd like to learn more about how my skills can benefit your
				organization, please feel free to contact me with any questions
				or for further information.
			</p>

			<li className="list-none">
				<a
					className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
					rel="noopener noreferrer"
					target="_blank"
					href="mailto:nrcinozer@gmail.com">
					<ArrowIcon />
					<p className="h-7">Send me an email</p>
				</a>
			</li>
		</section>
	);
}
