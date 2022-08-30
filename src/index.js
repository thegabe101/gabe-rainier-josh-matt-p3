import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import './index.css';
import config from "./auth_config.json";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Router>
    <Auth0Provider
      domain={"dev-mqb1gl1v.us.auth0.com"}
      clientId={"EjsIEs5zBt5nuAZu8mCPwOFySLRb19Rd"}
      redirectUri={window.location.origin}
      audience={'https://lftr/api'}
      scope="read:current_user update:current_user_metadata">
      <App />
    </Auth0Provider>
  </Router>,
  document.getElementById('root'),
);