  // src/components/ProtectedRoute.tsx
  import React from "react";
import { useSelector } from "react-redux";
  import { Navigate } from "react-router-dom";

  interface ProtectedRouteProps {
    element: React.ReactNode;
  }

  const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {

    const loginState = useSelector((state:any) =>state?.user?.loginState)

    if (!loginState) {
      return <Navigate to="/not-authorized" />;
    }

    return <>{element}</>;
  };

  export default ProtectedRoute;
