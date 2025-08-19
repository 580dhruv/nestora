import './index.css'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

const domain = "dev-v4xyltqxegoj05u5.us.auth0.com";
const clientId = "OP6RfFHaiIs6aCzocNd5RIuBFz5F7gjJ";

const root = document.getElementById('root');

createRoot(root).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin + window.location.pathname, 
    }}
    onRedirectCallback={(appState) => {
      window.history.replaceState(
        {},
        document.title,
        appState?.returnTo || window.location.pathname
      );
    }}
  >
    <App />
  </Auth0Provider>
);
