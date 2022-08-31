import { NavLink } from 'react-router-dom'
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const MainNav = () => {
	const { isLoading, isAuthenticated } = useAuth0()
	return (
		<div className='navbar-nav mr-auto'>
			<NavLink
				to='/'
				exact
				className='nav-link'
				activeClassName='router-link-exact-active'
			>
				Home
			</NavLink>
			{isAuthenticated && <NavLink
				to='/profile'
				exact
				className='nav-link'
				activeClassName='router-link-exact-active'
			>
				Profile
			</NavLink>}
			{isAuthenticated && <NavLink
				to='/workouts'
				exact
				className='nav-link'
				activeClassName='router-link-exact-active'
			>
				Workouts
			</NavLink>}
			{isAuthenticated && <NavLink
				to='/external-api'
				exact
				className='nav-link'
				activeClassName='router-link-exact-active'
			>
				External API
			</NavLink>}
			{isAuthenticated && <NavLink
				to='/calendar'
				exact
				className='nav-link'
				activeClassName='router-link-exact-active'
			>
				Calendar
			</NavLink>}
		</div>
	)
}

export default MainNav
