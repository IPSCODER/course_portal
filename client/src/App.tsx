import './App.css';
import Context from './context/context';

import { Auth0Provider } from "@auth0/auth0-react";
import AppRoutes from './routes/Index';



function App() {

  console.log(process.env.REACT_APP_AUTH_DOMAIN,"env")

  return (
    <>
     <Auth0Provider
      domain={process.env.REACT_APP_AUTH_DOMAIN || "" } 
      clientId={process.env.REACT_APP_AUTH_CLIENTID || "" } 
      authorizationParams={{ redirect_uri: window.location.origin }}>
    <Context>
    <AppRoutes/>
    </Context>
    </Auth0Provider>
    </>
  );
}

export default App;
