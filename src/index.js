import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import './index.css';
import config from "./auth_config.json";

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory
      domain={config.domain}
      clientId={config.clientId}
      audience={config.audience}>
      <App />
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById('root'),
);