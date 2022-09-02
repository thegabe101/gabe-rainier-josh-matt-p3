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

function App() {
	// const [user, setUser] = useState({
	//   id: 0,
	//   email: ''
	// })

	// const submitLoginHandle = (email, password) => {
	//   API.login(email, password).then(res => {
	//     if (!res.ok) {
	//       setUser({ userId: 0, email: "" });
	//       // setToken("")
	//       return;
	//     }
	//     return res.json()
	//   }).then(data => {
	//     console.log(data)
	//     setUser({
	//       id: data.user.id,
	//       email: data.user.email
	//     })
	//     // setToken(data.token)
	//     // localStorage.setItem("token",data.token)
	//   })
	// }

	return (
		<Router>
			<div id='app' className='d-flex flex-column h-100 color superApp'>
				<NavBar />
				<div className='container flex-grow-1'>
					<Switch>
						<Route path='/home' component={Home} />
						<Route path='/signup' component={SignUpContainer} />
						<Route path='/login' component={LoginForm} />
						<Route path='/profile' component={Profile} />
						<Route path='/workouts' component={Workouts} />
						<Route path='/calendar' component={CalendarPage} />
					</Switch>
				</div>
				<Footer />
			</div>
		</Router>
	)
}

export default App
