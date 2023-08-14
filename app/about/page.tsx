import { ArrowIcon } from 'components/icons';

export default function AboutPage() {
	return (
		<section className="border border-neutral-200 dark:border-neutral-800 rounded-lg md:p-8 p-4">
			<h1 className="font-bold text-3xl font-serif">About Me</h1>
			<p className="my-5 text-neutral-800 dark:text-neutral-200">
				I'm a <b>Frontend Engineer</b>, and my role involves helping to
				build a more efficient and user-friendly web experience.
			</p>

			<hr className="my-8 border-neutral-200 dark:border-neutral-700" />

			<p className="my-5 text-neutral-800 dark:text-neutral-200">
				Since I was young, I've been deeply involved in the world of
				technology, beginning with web designing when I was 11-12 years
				old. This naturally led me to coding, where I found my genuine
				love for programming.
			</p>

			<p className="my-5 text-neutral-800 dark:text-neutral-200">
				I studied Software Engineering at Bahçeşehir University and
				gained a solid foundation in frontend development. I have
				expertise in technologies such as <b>TypeScript</b>,{' '}
				<b>ReactJS</b>, <b>NextJS</b>, and <b>Tailwind CSS</b>. Through
				internships and work experiences, I've honed my skills in{' '}
				<b>hooks</b>, <b>state management</b>,{' '}
				<b>asynchronous/reactive programming</b>, <b>REST API</b>, and{' '}
				<b>GraphQL</b>. Additionally, I have strong proficiency in{' '}
				<b>system design</b> and <b>refactoring</b>, ensuring efficient
				and scalable code.
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
