import me from '../app/me.jpg';

export const name = 'Nurçin Özer';
export const avatar = me;
export const about = () => {
	return (
		<>
			Hey, I'm Nurçin. I'm a{' '}
			<b>
				Frontend Engineer at{' '}
				<a
					href="https://winden.co"
					target="_blank"
					rel="noopener noreferrer">
					Winden
				</a>
			</b>{' '}
			where my role involves helping build a more efficient and
			user-friendly web experience.
		</>
	);
};
export const bio = () => {
	return (
		<>
			When I'm not coding, I like to{' '}
			<a
				href="https://www.goodreads.com/user/show/53407202-nur-in"
				target="_blank"
				rel="noopener noreferrer">
				<b>read books</b>
			</a>{' '}
			and{' '}
			<a
				href="https://letterboxd.com/nurcin/"
				target="_blank"
				rel="noopener noreferrer">
				<b>watch movies</b>
			</a>
			. I also enjoy watching sports. When I have free time, I like to
			visit new places.
		</>
	);
};
