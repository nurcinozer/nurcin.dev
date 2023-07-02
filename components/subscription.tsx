'use client';

import { FormEvent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function Subscription() {
	const [emailInput, setEmailInput] = useState('');

	const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!emailInput) {
			return toast('Please enter your email.', {
				icon: '❌',
				style: {
					borderRadius: '10px',
					background: '#333',
					color: '#fff',
				},
				position: 'bottom-center',
			});
		}
		try {
			const res = await fetch('/api/subscribe', {
				method: 'POST',
				body: JSON.stringify({ email: emailInput }),
			});
			const data = await res.json();
			if (data.success) {
				toast('Thanks for subscribing!', {
					icon: '👏',
					style: {
						borderRadius: '10px',
						background: '#333',
						color: '#fff',
					},
					position: 'bottom-center',
				});
			} else {
				throw new Error(
					data?.error ||
						'Something went wrong, please try again later',
				);
			}
		} catch (e) {
			toast((e as Error).message, {
				icon: '❌',
				style: {
					borderRadius: '10px',
					background: '#333',
					color: '#fff',
				},
				position: 'bottom-center',
			});
		}
		setEmailInput('');
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<div className="flex flex-col sm:flex-row gap-2 justify-center">
				<input
					value={emailInput}
					onChange={e => setEmailInput(e.target.value)}
					type="email"
					placeholder="Your email"
					className="border border-neutral-800 bg-transparent rounded-lg px-4 py-2 md:w-2/3 w-full outline-none placeholder-neutral-200"
					required
				/>
				<button
					type="submit"
					className="border border-neutral-200 dark:border-neutral-800 rounded-lg px-4 py-2 md:w-1/3 w-auto">
					Subscribe
				</button>
			</div>
			<Toaster />
		</form>
	);
}
