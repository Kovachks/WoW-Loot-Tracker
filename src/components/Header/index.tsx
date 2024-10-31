import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
	const someVariable = 'test';

	return (
		<div className="border-b-2 border flex justify-between items-center p-4">
			<div className="inline-block">WoW Loot Tracker</div>
			<div className="inline-block">
				{isUserLoggedIn ? (
					<div>Account</div>
				) : (
					<div>
						<Link href="/login">
							<button>Login</button>
                            <p>
                            </p>
						</Link>
						<Link href="/signup">
							<button className="ml-4">SignUp</button>
						</Link>
						<p>TEST</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
