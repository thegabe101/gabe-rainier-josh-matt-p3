import React, { useEffect, useState } from 'react'
import { BrowserRouter as Routes, Switch, Route } from 'react-router-dom'
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
import Roster from './views/Roster.js'

function App() {
	// const [user, setUser] = useState({
	// 	id: 0,
	// 	email: ''
	// })
	// const [token, setToken] = useState("")

	// useEffect(() => {
	// 	const storedToken = localStorage.getItem("token");
	// 	API.checkToken(storedToken).then(res => {
	// 		if (!res.ok) {
	// 			console.log("invalid token!")
	// 			// localStorage.removeItem("token")
	// 		}
	// 		else {
	// 			console.log("valid token")
	// 			res.json().then(data => {
	// 				setToken(storedToken)
	// 				setUser({
	// 					id: data.id,
	// 					email: data.email
	// 				})
	// 			})
	// 		}
	// 	})
	// }, [])

	return (
		<Routes>
			<div id='app' className='d-flex flex-column h-100 color superApp'>
				<NavBar />
				<div className='container flex-grow-1'>
					<Switch>
						<Route exact path='/signup' component={SignUpContainer} />
						<Route exact path='/login' component={LoginForm} />
						<ProtectedRoute
							exact
							path='/home'
							component={Home}
						></ProtectedRoute>
						<ProtectedRoute
							exact
							path='/profile'
							component={Profile}
						></ProtectedRoute>
						<ProtectedRoute
							exact
							path='/workouts'
							component={Workouts}
						></ProtectedRoute>
						<ProtectedRoute
							exact
							path='/calendar'
							component={CalendarPage}
						></ProtectedRoute>
						<ProtectedRoute
							exact
							path='/roster'
							component={Roster}
						></ProtectedRoute>
					</Switch>
				</div>
				<Footer />
			</div>
		</Routes>
	)
}

export default App
