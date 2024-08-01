// src/components/Connection.jsx

import React, {useContext, useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faUserPlus, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import './Register.css';
import chien from '../assets/chien5.jpeg';
import {AuthContext} from "../context/authContext/index.jsx";
import {Link} from "react-router-dom";

export default function Register() {
    const {register, user} = useContext(AuthContext);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
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
        register(formData)
    }

    useEffect(()=>{
        console.log(user)
    }, [user])
    return (
        <div className="containe">
            <div className="login">
                <div className="login-container">
                    <h1>Inscription</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Prenom" name="firstName" onChange={handleChange} value={formData.firstName}/>
                        <input type="text" placeholder="Nom" name="lastName" onChange={handleChange} value={formData.lastName}/>
                        <input type="email" placeholder="Email" name="email" onChange={handleChange} value={formData.email}/>
                        <input type="password" placeholder="Password" name="password" onChange={handleChange}
                               value={formData.password}/><br/>
                        <Link to="/connection">Vous avez déjà un compte?</Link><br></br>
                        <button>S'inscrire</button>
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
