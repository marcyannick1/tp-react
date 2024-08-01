import React, { useContext, useState } from 'react';
import './header.css'
import Accueuil from "../Accueuil";
import Service from '../Service';
import Connection from '../Connection';
import AjoutCab from "../AjoutCab";
import Contact from "../Contact";
import { faHome,faConciergeBell } from '@fortawesome/free-solid-svg-icons';
import { faClinicMedical } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faUser, faSignInAlt, faSignOutAlt, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link, Route, Routes } from "react-router-dom";
import { AuthContext } from '../../context/authContext';

export default function Header() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const {logout} = useContext(AuthContext)
    const handleMouseEnter = () => setDropdownVisible(true);
    const handleMouseLeave = () => setDropdownVisible(false);
  return (
    <header>
        <div className="navbar">
            <div className="logo">
                <img src="https://www.veterinaireac.fr/wp-content/uploads/2022/11/LogoCarrel-1200x1200.png" alt="Waf waf"/>
                <span>DoctiVéto</span>
            </div>
            <nav>
                <ul>
                    <li><Link to={"/accueuil"}><FontAwesomeIcon icon={faHome} className="" />  Acceuil</Link></li>
                    <li><Link to={"/ajoutcab"}> <FontAwesomeIcon icon={faClinicMedical} className="clinic-icon" />  Cabinet</Link></li>

                    <li><Link to={"/Service"}><FontAwesomeIcon icon={faConciergeBell} className="nav-icon" />  Services</Link></li>
                    <li><Link to={"/contact"}><FontAwesomeIcon icon={faPhone} className="nav-icon" />  Contact</Link></li>
                </ul>
            </nav>
            <div className="info">
            <div className="user">
            <div 
      className="user-bubble" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <FontAwesomeIcon icon={faUser} className='user-icon' size="2x" />
      {isDropdownVisible && (
        <div className="dropdown-menu">
          <div className="dropdown-item">
            <FontAwesomeIcon icon={faSignInAlt} />
            <Link className="nav-icons"  to={"/connection"}><span>Se Connecter</span></Link>
          </div>
          <div className="dropdown-item" onClick={logout}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span>Se déconnecter</span>
          </div>
          <div className="dropdown-item">
          <FontAwesomeIcon icon={faUserCog} />

          <Link to={"/profil"} className="nav-icons" >
           <span>Voir le profil</span>
            </Link>
          </div>
        </div>
      )}
    </div>
            </div>
            <div className="contact">
                 <FontAwesomeIcon className='iconphone' icon={faPhone} size="2x" />
                <a className='telephone' href="tel:0123456789">01 23 45 67 89</a>
            </div>
            </div>
            
            

        </div>
    </header>
    )
}
