import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import NavBar from './components/nav/nav-bar.js';
import { Footer, Loading } from './components';
import { Home, Profile, ExternalApi, Workouts } from './views';
import ProtectedRoute from './auth/protected-route';

import './App.css';

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }


  //GMS anything wrapped in protected route will return user to login page if login token is not detected 
  // Switch is like <Routes> </Routes>
  //GMS not sure if we need api component or not yet
  //GMS navbar is broken into pieces- can combine 
  //GMS protected route logic is in auth folder 
  // TODO: RKD if statement if user == coach  return coach page
  // TODO: RKD else go to client page


  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/workouts" component={Workouts} />
          <Route path="/external-api" component={ExternalApi} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;