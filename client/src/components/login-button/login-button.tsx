import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "../../ui/button/Button";

const LoginButton: React.FC = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  
  if(isAuthenticated){
    console.log(isAuthenticated);
    
    return null
  }
  

  return (
    <li>
        <Button onClick={() =>loginWithRedirect()} >Login</Button>
    </li>
  );
};

export default LoginButton;
