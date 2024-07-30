import React, { useState } from 'react';
import './header.css'
import Accueuil from "../Accueuil";
import AjoutCab from "../AjoutCab";
import { faHome,faConciergeBell } from '@fortawesome/free-solid-svg-icons';
import { faClinicMedical } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faUser, faSignInAlt, faSignOutAlt, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link, Route, Routes } from "react-router-dom";

export default function Header() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => setDropdownVisible(true);
    const handleMouseLeave = () => setDropdownVisible(false);
  return (
    <header>
        <div class="navbar">
            <div class="logo">
                <img src="https://www.veterinaireac.fr/wp-content/uploads/2022/11/LogoCarrel-1200x1200.png" alt="Waf waf"/>
                <span>DoctiVéto</span>
            </div>
            <nav>
                <ul>
                    <li><Link to={"/accueuil"}><FontAwesomeIcon icon={faHome} className="" />  Acceuil</Link></li>
                    <li><Link to={"/ajoutcab"}> <FontAwesomeIcon icon={faClinicMedical} className="clinic-icon" />  Cabinet</Link></li>

                    <li><a href="#"><FontAwesomeIcon icon={faConciergeBell} className="nav-icon" />  Services</a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faPhone} className="nav-icon" />  Contact</a></li>
                </ul>
            </nav>
            <div className="info">
            <div class="user">
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
            <span>Se connecter</span>
          </div>
          <div className="dropdown-item">
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span>Se déconnecter</span>
          </div>
          <div className="dropdown-item">
            <FontAwesomeIcon icon={faUserCog} />
            <span>Voir le profil</span>
          </div>
        </div>
      )}
    </div>
            </div>
            <div class="contact">
                 <FontAwesomeIcon className='iconphone' icon={faPhone} size="2x" />
                <a className='telephone' href="tel:0123456789">01 23 45 67 89</a>
            </div>
            </div>
            
            

        </div>
    </header>
    )
}
