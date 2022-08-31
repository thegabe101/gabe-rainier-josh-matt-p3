import React, { useEffect, Fragment } from "react";
// import { Hero, HomeContent } from "../components/home";
import Hero from '../components/home/hero.js';
import HomeContent from "../components/home/home-content.js";
import { useAuth0 } from '@auth0/auth0-react'
// import '../styles/Home.css';

const Home = () => {
  const { user } = useAuth0();

  // useEffect(() => {
  //   //check if user is logged in
  //   //if yes do a get route find user from auth0
  //   //else post a user with stuff from auth0 Because its a new user
  //   console.log(user.email);

  // }, [])

  return (<Fragment>
    <Hero />
    <hr />
    <HomeContent />
  </Fragment>
  )
};

export default Home;
