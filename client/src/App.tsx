import './App.css';
import Context from './context/context';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Auth0Provider } from "@auth0/auth0-react";
import AppRoutes from './routes/Index';


const queryClient = new QueryClient();

function App() {
  return (
    <>
     <Auth0Provider
      domain="dev-qs40e6dasr66todq.us.auth0.com"
      clientId="cXUpKtBHQ30Z8JiDEaEPHrwrzPeN09wn"
      authorizationParams={{ redirect_uri: window.location.origin }}>
    <QueryClientProvider client={queryClient}>
    <Context>
    <AppRoutes/>
    </Context>
    </QueryClientProvider>
    </Auth0Provider>
    </>
  );
}

export default App;
