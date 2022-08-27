import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Login from './components/Login/Login.js';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
import useToken from './components/App/useToken.js';

//GMS the following two functions are for setting/getting token without using a hook. haven't finalized yet so please don't delete.

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

//GMS building basic login functionality for experimentation. For now we can just use a set token but can add the thing Joe demonstrated later.
//GMS for now we can enable login by serving a token from a mock API created w express.
//GMS for this we can install express as a devdependency but shouldnt install it as a dependency since wont use it for final build. 
//GMS with the routes set up in this manner, user should be directed to login page no matter what if there is no token. I think this is how we will want it in final. 

function App() {

  const { token, setToken } = useToken();

  // const token = getToken;
  //GMS please don't delete lines following and preceding- they are for a different type of token storage and im not sure which we want quite yet. 
  // const [token, setToken] = useState();
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
