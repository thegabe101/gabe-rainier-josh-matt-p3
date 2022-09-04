import { NavLink } from 'react-router-dom'
import React from 'react'

const MainNav = () => {
	if (localStorage.getItem("isCoach", true)) {
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
				>
					Roster
				</NavLink>
			</div>
		)
	} else if (localStorage.getItem("isCoach", false)) {
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
			</div>
		)
	}
}

export default MainNav
