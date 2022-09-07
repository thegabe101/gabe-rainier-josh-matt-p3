import { NavLink } from 'react-router-dom'
import { useEffect, useState } from "react"
import React from 'react'
import "../../styles/Mainnav.css";
import { CgProfile } from "react-icons/cg"
import { IoHomeOutline } from "react-icons/io5"
import { GiWeightLiftingUp } from "react-icons/gi"
import { RiTeamLine } from "react-icons/ri"
import { BsCalendarCheck } from "react-icons/bs"

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
			<div className='navbar-nav mr-auto rIcons'>
				<NavLink
					to='/home'
					exact
					className='nav-link'
					activeClassName='router-link-exact-active'
				>	<IoHomeOutline />
					Home
				</NavLink>
				<NavLink
					to='/profile'
					exact
					className='nav-link'
					activeClassName='router-link-exact-active'
				>	<CgProfile />
					Profile
				</NavLink>
				<NavLink
					to='/workouts'
					exact
					className='nav-link'
					activeClassName='router-link-exact-active'
				>	<GiWeightLiftingUp />
					Workouts
				</NavLink>
				<NavLink
					to='/roster'
					exact
					className='nav-link'
					activeClassName='router-link-exact-active'
				><RiTeamLine />Roster</NavLink>
				<a class="square" href="#">
					<div class="burgerwrap">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</a>

				<h4>
					Welcome, coach
				</h4>
				{/* <div class="container">
					<div className="btn"><a href="#"></a>Welcome, Coach</div>
				</div> */}
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
				><IoHomeOutline />
					Home
				</NavLink>
				<NavLink
					to='/profile'
					exact
					className='nav-link'
					activeClassName='router-link-exact-active'
				><CgProfile />
					Profile
				</NavLink>
				<NavLink
					to='/workouts'
					exact
					className='nav-link'
					activeClassName='router-link-exact-active'
				>
					<GiWeightLiftingUp />
					Workouts
				</NavLink>
				<NavLink
					to='/calendar'
					exact
					className='nav-link'
					activeClassName='router-link-exact-active'
				> <BsCalendarCheck />
					Calendar
				</NavLink>
				<h4>
					Welcome, liftr
				</h4>
				{/* <div class="container">
					<div className="btn"><a href="#"></a>Welcome, liftr</div>
				</div> */}
			</div>
		);
	}
}

export default MainNav