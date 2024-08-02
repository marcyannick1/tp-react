import React, {useContext, useState} from 'react';
import './header.css'
import Accueuil from "../Accueuil";
import Connection from '../Connection';
import AjoutCab from "../AjoutCab";
import Contact from "../Contact";
import { faHome,faConciergeBell } from '@fortawesome/free-solid-svg-icons';
import { faClinicMedical } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faUser, faSignInAlt, faSignOutAlt, faUserCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link, Route, Routes } from "react-router-dom";
import {AuthContext} from "../../context/authContext/index.jsx";

export default function Header() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const {logout, isAuthenticated} = useContext(AuthContext)
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
                    <li><Link to={"/accueil"}><FontAwesomeIcon icon={faHome} className="" />  Acceuil</Link></li>
                    <li><Link to={"/ajoutcab"}> <FontAwesomeIcon icon={faClinicMedical} className="clinic-icon" />  Cabinet</Link></li>

                    <li><a href="#"><FontAwesomeIcon icon={faConciergeBell} className="nav-icon" />  Services</a></li>
                    <li><Link to={"/contact"}><FontAwesomeIcon icon={faPhone} className="nav-icon" />  Contact</Link></li>
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
            {!isAuthenticated &&
              <div className="dropdown-item">
                <FontAwesomeIcon icon={faSignInAlt} />
                <Link className="nav-icons"  to={"/connection"}><span>Se Connecter</span></Link>
              </div>
            }
            {isAuthenticated &&
                <>
                  <div className="dropdown-item" onClick={logout}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span>Se déconnecter</span>
                  </div>
                  <div className="dropdown-item">
                    <FontAwesomeIcon icon={faUserCog} />
                    <Link to={"/#"}><span>Voir le profil</span></Link>
                  </div>
                </>
            }
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
