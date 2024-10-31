import React, { useEffect } from 'react';
import Header from "../Header";
import { useAuth0 } from '@auth0/auth0-react';
import { useRouter } from 'next/router';

interface AuthenticatedWrapperProps {
    children: React.ReactNode[];
}

const AuthenticatedWrapper: React.FC<AuthenticatedWrapperProps> = ({children}) => {
    const { isAuthenticated, isLoading } = useAuth0();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push('/unauthenticated')
        }
    }, [isLoading, isAuthenticated, router])

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <Header />
            {...children}
        </div>
    )
};

export default AuthenticatedWrapper;