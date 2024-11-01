import React, { useEffect } from 'react';
import Header from "../Header";
import { useAuth0 } from '@auth0/auth0-react';
import { useRouter } from 'next/router';
import { ReactChildren } from '../../../types/reactTypes';

const AuthenticatedWrapper: React.FC<ReactChildren> = ({ children }) => {
    const childrenArray = React.Children.toArray(children);
    const { isAuthenticated, isLoading, loginWithRedirect, error } = useAuth0();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !isAuthenticated || error) {
            loginWithRedirect();
        }
    }, [isLoading, isAuthenticated, router, error])

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <Header />
            {...childrenArray}
        </div>
    )
};

export default AuthenticatedWrapper;