import React from "react";
import lifter1 from "../images/lifter.png";
import '../styles/Footer.css';

const Footer = () => (
  <footer className="bg-light p-3 text-center flex footy">
    <div />
    <img className="siteLogo" src={lifter1}></img>
    <p>
      Contact the team behind Coach App @ {" "}
    </p>
  </footer>
);

export default Footer;
