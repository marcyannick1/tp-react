import React, { useState } from 'react';
import './contact.css';
import MapComponent from './MapComponent';

import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Contact() {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:3000/message',
            data:{
                nom,
                prenom,
                email,
                telephone: parseInt(phone),
                message,
            }
        }).then((response) => {
            console.log(response);
            setNom('')
            setPrenom('')
            setEmail('')
            setPhone('')
            setMessage('')
        })
    };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Nous écrire</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">Nom</label>
            <input
              type="text"
              id="firstName"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Prénom</label>
            <input
              type="text"
              id="lastName"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Adresse email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Téléphone</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group full-width">
            <label htmlFor="message">Comment pouvons-nous vous aider ?</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
      <div className="map-container">
        <MapComponent />
      </div>
    </div>
  );
}
