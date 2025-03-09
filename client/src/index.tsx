import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from'react-router-dom';
import { Provider } from 'react-redux';
import { store , persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();
root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
  <Provider store={store} >
    <PersistGate loading={null}  persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>
</QueryClientProvider>
  </BrowserRouter>
);

