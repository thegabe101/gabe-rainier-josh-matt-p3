import { NavLink } from 'react-router-dom'
import { useEffect, useState } from "react"
import React from 'react'
import "../../styles/Mainnav.css";


const MainNav = () => {
	const [coachy, setCoachy] = useState("");

	const getData = async () => {
		try {
			const value = await localStorage.getItem("isCoach");
			console.log(value);
			if (value !== null) {
				setCoachy(value);
			}
		} catch (e) {
		}
	};

	useEffect(() => {
		getData();
	});
	if (coachy == "true") {
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
					to='/roster'
					exact
					className='nav-link'
					activeClassName='router-link-exact-active'
				>Roster</NavLink>
				<div class="container">
					<div className="btn"><a href="#"></a>liftr Coach</div>
				</div>
			</div>
		)
	} else {
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
		);
	}
}

export default MainNav