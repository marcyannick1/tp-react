import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import AjoutCab from "../AjoutCab";


import { Link, Route, Routes } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
    <div className='foot'>
      <div className="foot1">
      <p className='gray'>© 2024 DoctiVéto</p>
      <p> Mentions</p>
      <p>CQ</p>
      <p>Tous droits reservés</p>
      </div>
      <div className="foot2">
      <FontAwesomeIcon className='faFacebook' icon={faFacebook} />
      <Link to={"/rdv"}>
      <FontAwesomeIcon className='faCalendarAlt' icon={faCalendarAlt} />
      </Link>
      </div>
    </div>
  </footer>

  );
};

export default Footer;