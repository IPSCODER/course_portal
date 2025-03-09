import './App.css';
import Context from './context/context';

import { Auth0Provider } from "@auth0/auth0-react";
import AppRoutes from './routes/Index';


function App() {


  return (
    <>
     <Auth0Provider
      domain="dev-qs40e6dasr66todq.us.auth0.com"
      clientId="WDVzyXqCBPJarITjol0Xope00gUD0CrO"
      authorizationParams={{ redirect_uri: window.location.origin }}>
    <Context>
    <AppRoutes/>
    </Context>
    </Auth0Provider>
    </>
  );
}

export default App;
