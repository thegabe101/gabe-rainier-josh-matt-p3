import React from "react";
import lifter from "../../images/lifter.png";
import '../../styles/Hero.css';

const Hero = () => (
  <div className="heroBody">
    {/* <img className="mb-3 siteLogo" src={lifter} alt="Weight lifting silhouette figure" width="120" /> */}
    <h1 className="mb-4 title">Coach App</h1>
    <p className="lead">
      This will be our home landing page{" "}
    </p>
  </div>
);

export default Hero;
