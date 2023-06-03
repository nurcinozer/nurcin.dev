import Image from 'next/image';
import { name, about, bio, avatar } from 'lib/info';

export const revalidate = 60;

export default async function HomePage() {
	return (
		<section>
			<h1 className="font-bold text-3xl font-serif">{name}</h1>
			<div className="flex items-start my-8 flex-col md:flex-row gap-4">
				<Image
					alt={name}
					className="rounded-lg grayscale"
					src={avatar}
					placeholder="blur"
					width={100}
					priority
				/>
				<div className="max-w-[480px]">
					<p className="text-neutral-800 dark:text-neutral-200">
						{about()}
					</p>
					<p className="mt-5 text-neutral-800 dark:text-neutral-200">
						{bio()}
					</p>
				</div>
			</div>
		</section>
	);
}
