import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/nav/nav-bar.js'
import { Footer } from './components'
import { Profile, Workouts } from './views'
import CalendarPage from './views/CalendarPage.js'
import axios from 'axios';
import './App.css'
import API from './utils/API';
import { NextUIProvider } from '@nextui-org/react';
import Login from "../src/views/Login";
import SignUpContainer from "../src/utils/SignUpContainer";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";



const App = () => {
  return (
    <Router>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <div className="container flex-grow-1">
          <Switch>
            <MuiThemeProvider>
              <Route path="/" component={SignUpContainer} />
              <Route path="/login" component={Login} />
              <Route path="/profile" component={Profile} />
              <Route path="/workouts" component={Workouts} />
              <Route path='/calendar' component={CalendarPage} />
            </MuiThemeProvider>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App

