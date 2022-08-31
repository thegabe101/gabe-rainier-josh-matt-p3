import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import NavBar from './components/nav/nav-bar.js'
import { Footer, Loading } from './components'
import { Home, Profile, ExternalApi, Workouts } from './views'
import ProtectedRoute from './auth/protected-route'
import CalendarPage from './views/CalendarPage.js'
import axios from 'axios';
import './App.css'
import API from './utils/API';




const App = () => {
  // const [loginEmail, loginSetEmail] = useState("");
  const { isLoading, isAuthenticated } = useAuth0()
  const myTimeout = setTimeout(postUser, getUser('sowa332@gmail.com'), 1000);
  const { user } = useAuth0()
  // const URL_PREFIX = "http://localhost:3001";


  function createUser(firstName, lastName, username, email, password) {
    const URL_PREFIX = "http://localhost:3001";
    axios.post(URL_PREFIX + "/api/coaches", {
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: password
    }).then(function (response) {
      console.log(response)
    })
  }

  function getUser(id) {
    const URL_PREFIX = "http://localhost:3001";
    axios.get(URL_PREFIX + `/api/coaches/${id}`
    ).then((response) => {
      console.log(response)
    })
  }


  //TODO: axios route that checks if the email matches a user in our database, gets one coach and one client here, then if no matching email exists, posts a new user to the database 
  function postUser() {
    if (isAuthenticated === true) {
      if (user.email === "theking2@gmail.com") {
        getUser(52);
      } else {
        createUser(user.name, "sowa", user.nickname, user.email, "whatever");
      }
      // console.log(user.name)
      // console.log(user.email)
      // console.log(user.nickname)
      // console.log(user.email_verified)
    }
  }


  // console.log(user.email)
  // const { last_login,
  //   name,
  //   picture,
  //   email,
  //   nickname,
  //   logins_count,
  // //   email_verified, } = user;
  // console.log(Profile.user);
  // console.log(Profile.email)
  // console.log(email);
  // console.log(user)


  if (isLoading) {
    return <Loading />
  }

  //GMS anything wrapped in protected route will return user to login page if login token is not detected
  // Switch is like <Routes> </Routes>
  //GMS not sure if we need api component or not yet
  //GMS navbar is broken into pieces- can combine
  //GMS protected route logic is in auth folder
  // TODO: RKD if statement if user == coach  return coach page
  // TODO: RKD else go to client page

  console.log(isAuthenticated)

  // function checkForUser(email) {
  //   if (isAuthenticated) {
  //     axios.get(URL_PREFIX + `/api/coaches/${email}`).then(response => response.json())
  //       .then(data => {
  //         console.log(data);
  //       })
  //   }
  // }


  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <Switch>
          {!isAuthenticated && <Route path="/" exact component={Home} />}
          {isAuthenticated && <Route path="/" exact component={Home} />}
          {isAuthenticated && <ProtectedRoute path="/profile" component={Profile} />}
          {isAuthenticated && <ProtectedRoute path="/workouts" component={Workouts} />}
          {isAuthenticated && <ProtectedRoute path="/external-api" component={ExternalApi} />}
          {isAuthenticated && <ProtectedRoute path='/calendar' component={CalendarPage} />}
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;