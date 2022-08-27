import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Login from './components/Login/Login.js';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';

//GMS building basic login functionality for experimentation. For now we can just use a set token but can add the thing Joe demonstrated later.
//GMS for now we can enable login by serving a token from a mock API created w express.
//GMS for this we can install express as a devdependency but shouldnt install it as a dependency since wont use it for final build. 
//GMS with the routes set up in this manner, user should be directed to login page no matter what if there is no token. I think this is how we will want it in final. 


function App() {
  const [token, setToken] = useState();
  if (!token) {
    return <Login setToken={setToken} />
  }


  return (
    <div className="wrapper">
      <h1>Application</h1>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
