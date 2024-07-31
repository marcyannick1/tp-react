// src/components/Connection.jsx

import React, {useContext, useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faUserPlus, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import './Connection.css';
import chien from '../assets/chien5.jpeg';
import {AuthContext} from "../context/authContext/index.jsx";
import {Link} from "react-router-dom";

export default function Connection() {
    const {login, user} = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault()
        login(formData)
    }

    useEffect(()=>{
        console.log(user)
    }, [user])
  return (
    <div className="containers">
      <div className="login">
          <div className="login-container">
              <h1>Connexion</h1>
              <form onSubmit={handleSubmit}>
                  <input type="email" placeholder="Email" name="email" onChange={handleChange} value={formData.email}/>
                  <input type="password" placeholder="Password" name="password" onChange={handleChange}
                         value={formData.password}/><br/>
                  <Link to="/register">Vous n'avez pas de compte?</Link><br></br>
                  <button>Se connecter</button>
              </form>
              <hr/>
              <p>Or Connect With</p>
              <hr/>
              <ul className="social-icons">
                  <li><FontAwesomeIcon icon={faFacebookF} size="2x"/></li>
                  <li><FontAwesomeIcon icon={faTwitter} size="2x"/></li>
                  <li><FontAwesomeIcon icon={faGithub} size="2x"/></li>
                  <li><FontAwesomeIcon icon={faLinkedinIn} size="2x"/></li>
              </ul>
              <div className="clearfix"></div>
              <span className="copyright">&copy;2024</span>
          </div>
      </div>

        <img src={chien} alt='Description' className='image'/>


    </div>
  );
}
