import Header from '@/components/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Auth0Provider } from '@auth0/auth0-react';

export default function App({ Component, pageProps }: AppProps) {

	return (
		<div>
			<Auth0Provider
				domain='dev-n7z4i3ymoq03ixp2.us.auth0.com'
				clientId='VD1ZXtAtRjhUHs50SsQKSp7EwcYLiMSh'
				authorizationParams={{
					redirect_uri: 'http://localhost:3000'
				}}
			>
				<Header />
				<Component {...pageProps} />;
			</Auth0Provider>
			
		</div>
	);
}
