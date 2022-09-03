import React from "react";
import lifter1 from "../images/lifter.png";
import '../styles/Footer.css';
import { FaTwitter } from "react-icons/fa"

const Footer = () => (
  <footer className="bg-light p-3 text-center flex footy">
    <div />
    <img className="siteLogo" src={lifter1}></img>
    <p >
      Contact the team behind Coach App @  <a className="twitter" href="https://twitter.com/liftrWorldWide"><FaTwitter /> </a>
    </p>
  </footer >
);

export default Footer;
