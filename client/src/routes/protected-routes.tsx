  // src/components/ProtectedRoute.tsx
  import React from "react";
import { useSelector } from "react-redux";
  import { Navigate } from "react-router-dom";
  import { useAuth0 } from "@auth0/auth0-react";
  interface ProtectedRouteProps {
    element: React.ReactNode;
  }

  const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {

    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    if (!isAuthenticated) {
      return <Navigate to="/not-authorized" />;
    }

    return <>{element}</>;
  };

  export default ProtectedRoute;
