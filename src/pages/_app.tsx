import Header from '@/components/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Auth0Provider } from '@auth0/auth0-react';

export default function App({ Component, pageProps }: AppProps) {

	return (
		<div>
			<Auth0Provider
				domain='dev-n3yhjibqsks4ztas.us.auth0.com'
				clientId='H4ZSwcJLYshzmEO5YOuHTVTflC41LPqJ'
				authorizationParams={{
					redirect_uri: 'http://localhost:3000'
				}}
			>
				<Component {...pageProps} />;
			</Auth0Provider>
			
		</div>
	)
};
