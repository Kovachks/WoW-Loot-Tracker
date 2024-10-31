import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface LoginButtonProps {
  children?: string
}

const LoginButton: React.FC<LoginButtonProps> = ({ children }) => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>{children ? children : "Log In"}</button>
};

export default LoginButton;