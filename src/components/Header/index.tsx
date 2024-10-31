import Link from 'next/link';
import { useState } from 'react';
import LoginButton from '../LoginButton';

const Header = () => {
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

	return (
		<div className="border-b-2 border flex justify-between items-center p-4">
			<Link href="/"><div className="inline-block">WoW Loot Tracker</div></Link>
			<div className="inline-block">
				{isUserLoggedIn ? (
					<div className="inline-block">Account</div>
				) : (
					<div className="inline-block">
						<LoginButton />
						<Link href="/signup">
							<button className="ml-4">SignUp</button>
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
