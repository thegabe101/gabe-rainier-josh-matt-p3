import { NavLink } from 'react-router-dom'
import React from 'react'

const MainNav = ({ isCoach }) => {

	return (
		<div className='navbar-nav mr-auto'>
			<NavLink
				to='/home'
				exact
				className='nav-link'
				activeClassName='router-link-exact-active'
			>
				Home
			</NavLink>
			<NavLink
				to='/profile'
				exact
				className='nav-link'
				activeClassName='router-link-exact-active'
			>
				Profile
			</NavLink>
			<NavLink
				to='/workouts'
				exact
				className='nav-link'
				activeClassName='router-link-exact-active'
			>
				Workouts
			</NavLink>
			<NavLink
				to='/calendar'
				exact
				className='nav-link'
				activeClassName='router-link-exact-active'
			>
				Calendar
			</NavLink>
			<NavLink
				to='/roster'
				exact
				className='nav-link'
				activeClassName='router-link-exact-active'
			>Roster</NavLink>
		</div>
	)
}


export default MainNav


// {isCoach && <NavLink
// 	to='/roster'
// 	exact
// 	className='nav-link'
// 	activeClassName='router-link-exact-active'
// >Roster</NavLink>}



// else if (localStorage.getItem("isCoach", false)) {
// 	return (
// 		<div className='navbar-nav mr-auto'>
// 			<NavLink
// 				to='/home'
// 				exact
// 				className='nav-link'
// 				activeClassName='router-link-exact-active'
// 			>
// 				Home
// 			</NavLink>
// 			<NavLink
// 				to='/profile'
// 				exact
// 				className='nav-link'
// 				activeClassName='router-link-exact-active'
// 			>
// 				Profile
// 			</NavLink>
// 			<NavLink
// 				to='/workouts'
// 				exact
// 				className='nav-link'
// 				activeClassName='router-link-exact-active'
// 			>
// 				Workouts
// 			</NavLink>
// 			<NavLink
// 				to='/calendar'
// 				exact
// 				className='nav-link'
// 				activeClassName='router-link-exact-active'
// 			>
// 				Calendar
// 			</NavLink>
// 		</div>
// 	)