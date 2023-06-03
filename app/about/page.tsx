import { ArrowIcon } from 'components/icons';

export default function AboutPage() {
	return (
		<section>
			<h1 className="font-bold text-3xl font-serif">About Me</h1>
			<p className="my-5 text-neutral-800 dark:text-neutral-200">
				I'm a Frontend Engineer at Winden where my role involves helping
				build a more efficient and user-friendly web experience.
			</p>

			<hr className="my-8 border-neutral-200 dark:border-neutral-700" />

			<p className="my-5 text-neutral-800 dark:text-neutral-200">
				From a young age, I've been immersed in the world of technology,
				starting with web designing at 11-12 years old. This naturally
				led me to coding, where I discovered my true passion for
				programming.
			</p>

			<p className="my-5 text-neutral-800 dark:text-neutral-200">
				I studied Software Engineering at Bahçeşehir University and
				gained a solid foundation in frontend development. I have
				expertise in technologies such as TypeScript, ReactJS, NextJS,
				and Tailwind CSS. Through internships and work experiences, I've
				honed my skills in hooks, state management,
				asynchronous/reactive programming, REST API, and GraphQL.
				Additionally, I have strong proficiency in system design and
				refactoring, ensuring efficient and scalable code.
			</p>

			<p className="my-5 text-neutral-800 dark:text-neutral-200">
				I have the opportunity to create practical and impactful
				solutions. For example, during my current role at Winden, I
				developed a system for managing contacts and generating
				invoices, streamlining workflows and enhancing efficiency.
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
					<p className="h-7">send me an email</p>
				</a>
			</li>
		</section>
	);
}
