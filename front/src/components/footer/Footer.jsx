import React from 'react';
import './footer.css';
import AjoutCab from "../AjoutCab";

import { Link, Route, Routes } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
    <div>
      <p>© 2024 DoctiVéto. Tous droits réservés.</p>
      <p>
        <a href="mailto:support@doctiveto.com">Contactez-nous</a>
      </p>
      <p>
        Suivez-nous :
        <a href="https://www.github.com/doctiveto" target="_blank">Github</a> | 
        <a href="https://www.twitter.com/doctiveto" target="_blank"> Twitter</a> | 
        <a href="https://www.instagram.com/doctiveto" target="_blank"> Instagram</a>
      </p>
      <p>
      <Link to={"/ajoutCab"}>Ajouter un cabinet !</Link>


      </p>
    </div>
  </footer>

  );
};

export default Footer;