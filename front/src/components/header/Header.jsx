import React from 'react'
import './header.css'
import Accueuil from "../Accueuil";
import AjoutCab from "../AjoutCab";
import Contact from "../Contact";

import { Link, Route, Routes } from "react-router-dom";

export default function Header() {
  return (
    <header>
        <div class="navbar">
            <div class="logo">
                <img src="https://www.veterinaireac.fr/wp-content/uploads/2022/11/LogoCarrel-1200x1200.png" alt="Waf waf"/>
                <span>DoctiVéto</span>
            </div>
            <nav>
                <ul>
                    <li><Link to={"/accueuil"}>Accueuil</Link></li>
                    <li><Link to={"/ajoutcab"}>AjoutCab</Link></li>
                    

                    <li><a href="#">Services</a></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                </ul>
            </nav>
            <div class="contact">
                <a href="tel:0123456789">01 23 45 67 89</a>
            </div>

        </div>
    </header>
    )
}
