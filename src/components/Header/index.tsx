import Link from 'next/link';
import { useState } from 'react';
import LoginButton from '../LoginButton';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
	const { isAuthenticated } = useAuth0();

	return (
		<div className="border-b-2 border flex justify-between items-center p-4">
			<Link href="/"><div className="inline-block">WoW Loot Tracker</div></Link>
			<div className="inline-block">
				{isAuthenticated ? (
					<div className="inline-block">Account</div>
				) : (
					<div className="inline-block">
						<LoginButton />
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
