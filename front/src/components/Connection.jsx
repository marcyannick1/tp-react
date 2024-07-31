// src/components/Connection.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faUserPlus, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import './Connection.css';
import chien from '../assets/chien5.jpeg';


export default function Connection() {
  return (
    <div className="containers">
      <div className="login">
        <div className="login-container">
          <h1>Log in</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" /><br />
          <input type="checkbox" /><span>Remember me</span>
          <a href="#">Forgot password?</a><br></br>
          <button>Log in</button>
          <hr />
          <p>Or Connect With</p>
          <hr />
          <ul className="social-icons">
            <li><FontAwesomeIcon icon={faFacebookF} size="2x" /></li>
            <li><FontAwesomeIcon icon={faTwitter} size="2x" /></li>
            <li><FontAwesomeIcon icon={faGithub} size="2x" /></li>
            <li><FontAwesomeIcon icon={faLinkedinIn} size="2x" /></li>
          </ul>
          <div className="clearfix"></div>
          <span className="copyright">&copy;2024</span>
        </div>
      </div>
    
      <img src={chien} alt='Description' className='image' />
        
 
    </div>
  );
}
