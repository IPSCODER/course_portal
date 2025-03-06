import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton: React.FC = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user?.name}!</p>
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Logout
          </button>
        </div>
      ) : (
        <button onClick={() => loginWithRedirect()}>Login with Auth0</button>
      )}
    </div>
  );
};

export default LoginButton;
