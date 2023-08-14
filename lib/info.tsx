import me from '../app/me.jpg';

export const name = 'Nurçin Özer';
export const avatar = me;
export const about = () => {
	return (
		<>
			Hey, I'm Nurçin. I'm a <b>Frontend Engineer</b>, and my role
			involves helping to build a more efficient and user-friendly web
			experience.
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
			. I also enjoy watching sports. My favorite teams are{' '}
			<a
				href="https://www.galatasaray.org/en/Homepage"
				target="_blank"
				rel="noopener noreferrer">
				<b>Galatasaray</b>
			</a>
			,{' '}
			<a
				href="https://www.eczacibasisporkulubu.org.tr/en"
				target="_blank"
				rel="noopener noreferrer">
				<b>Eczacıbaşı</b>
			</a>
			, and{' '}
			<a
				href="https://www.arsenal.com/women"
				target="_blank"
				rel="noopener noreferrer">
				<b>Arsenal Women</b>
			</a>
			.
		</>
	);
};
