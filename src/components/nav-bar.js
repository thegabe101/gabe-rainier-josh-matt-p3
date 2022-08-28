import React from 'react';
import MainNav from './main-nav';
import AuthNav from './auth-nav';
import { Link } from 'react-router-dom';
import '../styles/Nav-bar.css';
import lifter1 from '../images/lifter.png';

const NavBar = () => {
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <div />
          <Link to='/'><img src={lifter1} alt="logo" className='headerLogo' /></Link>
          <MainNav />
          <AuthNav />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;  