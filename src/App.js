import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/nav/nav-bar.js'
import { Footer } from './components'
import { Home, Profile, Workouts } from './views'
import CalendarPage from './views/CalendarPage.js'
import axios from 'axios'
import './App.css'
import API from './utils/API'
import { NextUIProvider } from '@nextui-org/react'
import LoginForm from './views/LoginForm'
import SignUpContainer from '../src/utils/SignUpContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SignUpForm from './views/Signup.js'
import ProtectedRoute from './utils/ProtectedRoute.js'

function App() {

	return (
		<Router>
			<div id='app' className='d-flex flex-column h-100 color superApp'>
				<NavBar />
				<div className='container flex-grow-1'>
					<Switch>
						<Route path='/signup' component={SignUpContainer} />
						<Route exact path='/login' component={LoginForm} />
						<ProtectedRoute exact path='/home' component={Home} />
						<ProtectedRoute exact path='/profile' component={Profile} />
						<ProtectedRoute exact path='/workouts' component={Workouts} />
						<ProtectedRoute exact path='/calendar' component={CalendarPage} />
					</Switch>
				</div>
				<Footer />
			</div>
		</Router>
	)
}

export default App
