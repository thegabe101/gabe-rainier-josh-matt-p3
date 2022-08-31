import React, { useEffect, Fragment } from "react";
// import { Hero, HomeContent } from "../components/home";
import Hero from '../components/home/hero.js';
import HomeContent from "../components/home/home-content.js";
// import '../styles/Home.css';

const Home = () => {

  return (<Fragment>
    <Hero />
    <hr />
    <HomeContent />
  </Fragment>
  )
};

export default Home;
