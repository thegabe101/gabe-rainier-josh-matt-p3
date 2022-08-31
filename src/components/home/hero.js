import React from "react";
import lifter from "../../images/lifter.png";
import '../../styles/Hero.css';

const Hero = () => (
  <div className="heroBody">
    {/* <img className="mb-3 siteLogo" src={lifter} alt="Weight lifting silhouette figure" width="120" /> */}
    <h1 className="mb-4 title">liftr</h1>
    <p className="lead">
      Welcome to liftr.
    </p>
  </div>
);

export default Hero;
