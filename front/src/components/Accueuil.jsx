// src/components/Accueuil.jsx

import React, { useContext } from 'react';
import chien from '../assets/chien.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faUser, faPaw, faClinicMedical } from '@fortawesome/free-solid-svg-icons'; 
import { faDog, faCat, faHorse, faSpider } from '@fortawesome/free-solid-svg-icons'; // Importez les icônes nécessaires
import './Accueil.css';
import medecineGenerale from '../assets/generale.jpeg'; // Importez les images pour chaque service
import medecineInterne from '../assets/interne.jpeg';
import hospitalisation from '../assets/hospitalisation.jpeg';
import badge from '../assets/badge.png';
import chirurgie from '../assets/chirurgie.jpeg';
import imagerie from '../assets/imagerie.jpeg';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import {faClock, faPhone } from '@fortawesome/free-solid-svg-icons';
import laboratoire from '../assets/laboratoire.jpeg';
import { AuthContext } from '../context/authContext';


export default function Accueuil() {
  // const {user} = useContext(AuthContext);
  // console.log(user);
  return (
    <div className='container'>
          <img src={badge} alt='Description' className='badge' />
      {/* <p>{user.firstName}</p> */}
      <div className='content'>
        <div className="header">
          <img src={chien} alt='Description' className='image' />
          <div className="titre">
            <div className="sous-titre">
              <h2>Le cabinet vétérinaire</h2>
              <h1>Paws & Whiskers Veterinary Clinic</h1>
            </div>
            <p>
              À la Clinique Vétérinaire Paws & Whiskers, nous nous engageons à fournir des soins exceptionnels à vos animaux de compagnie bien-aimés. <br/><br/>Notre équipe de vétérinaires expérimentés et de personnel compatissant est dédiée à assurer la santé et le bien-être de vos amis à fourrure. Que ce soit pour un examen de routine, des soins d'urgence ou un traitement spécialisé, nous sommes là pour offrir les meilleurs services médicaux avec une touche de douceur. Faites-nous confiance pour être votre partenaire dans le maintien d'une vie heureuse et en bonne santé pour vos animaux.<br/><br/>
            </p>
            <div className="navbar-location">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
              <span>25 Rue de la Clinique, 75012 Paris</span>
            </div>
            <div className="buttons">
              <button className="stylish-button">
                <FontAwesomeIcon icon={faPaw} className="paw-icon" />
                Prendre un RDV
              </button>
              <button className="add-clinic-button">
                <FontAwesomeIcon icon={faClinicMedical} className="clinic-icon" />
                Ajouter un cabinet
              </button>
            </div>
          </div>
        </div>
        <div className="deux">
          <div className="icon2">
            <img src="https://www.veterinaireac.fr/wp-content/uploads/2022/11/LogoCarrel-1200x1200.png" className='iconn' alt="Waf waf"/>
          </div>
          <div className="sous-titre2">
            <p className='slogan'>Le cabinet Vétérinaire DoctiVéto à Paris</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto facilis soluta repudiandae maxime, nulla at, voluptatem mollitia vero esse est doloremque ut aliquam rerum quaerat voluptates tempore quasi ad magni?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto facilis soluta repudiandae maxime, nulla at, voluptatem mollitia vero esse est doloremque ut aliquam rerum quaerat voluptates tempore quasi ad magni? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium deserunt labore aperiam minima enim ab molestiae omnis quo rem officia, deleniti quibusdam alias sequi delectus, expedita iusto asperiores laboriosam. Ab voluptate, quas laboriosam error nesciunt quisquam neque necessitatibus velit at incidunt perspiciatis ea, eveniet, libero quae. Voluptatibus quisquam adipisci veritatis tenetur excepturi, odio soluta voluptates magni. Eligendi, doloremque hic amet quia porro rem possimus esse sapiente voluptatem eaque at similique debitis aliquam saepe quos consequuntur animi culpa molestias voluptatum blanditiis tenetur recusandae. Ad fuga, dolorem incidunt asperiores a reiciendis, obcaecati ullam tempora recusandae consectetur amet voluptates enim sit dolorum in.</p>
            <div className='icons'>
              <FontAwesomeIcon icon={faDog} className='iconnn' />
              <FontAwesomeIcon icon={faCat} className='iconnn' />
              <FontAwesomeIcon icon={faHorse} className='iconnn' />
              <FontAwesomeIcon icon={faSpider} className='iconnn' />
            </div>
          </div>
        </div>
        <div className='services'>
          <div className="lescards">
          <div className='service-card' style={{ backgroundImage: `url(${medecineGenerale})` }}>
            <h3>Médecine Générale</h3>
          </div>
          <div className='service-card' style={{ backgroundImage: `url(${imagerie})` }}>
            <h3>Imagerie</h3>
          </div>
          <div className='service-card' style={{ backgroundImage: `url(${hospitalisation})` }}>
            <h3>Hospitalisation</h3>
          </div>
          <div className='service-card' style={{ backgroundImage: `url(${chirurgie})` }}>
            <h3>Chirurgie</h3>
          </div>
          <div className='service-card' style={{ backgroundImage: `url(${medecineInterne})` }}>
            <h3>Médecine Interne</h3>
          </div>
          
          <div className='service-card' style={{ backgroundImage: `url(${laboratoire})` }}>
            <h3>Laboratoire</h3>
          </div>
          </div>
        </div>
        <div className="sous-titre3">
            <p className='slogans'>Prenez soin de votre animal</p>
            <div className="card-section">
              <div className="car">
                <img src="https://i.pinimg.com/564x/ed/95/ba/ed95bac8511ccf5bead884ef348bc6a7.jpg" alt="Image 1" className="card-image" />
                <p className="card-text">Le furet</p>
              </div>
              <div className="car">
                <img src="https://i.pinimg.com/564x/7e/d6/e3/7ed6e32a45823f433d54e6b1b77e090c.jpg" alt="Image 2" className="card-image" />
                <p className="card-text">Les races de Chat</p>
              </div>
              <div className="car">
                <img src="https://i.pinimg.com/564x/07/49/72/074972b48c85a667344b7ecba36eb3f4.jpg" alt="Image 3" className="card-image" />
                <p className="card-text">La croissance de votre Chiot. Evitez les erreurs</p>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ducimus quasi architecto facere dolores laborum aperiam voluptate perferendis necessitatibus, enim eligendi? Officia minus obcaecati officiis odit nostrum recusandae, eum optio quas culpa omnis quasi aliquid totam maxime amet exercitationem, aliquam modi ullam eius esse qui nobis, atque repudiandae quaerat. Cumque tempore facilis molestias atque accusantium eos magni, et similique velit? Natus dolores cum sit tempore delectus nihil unde magni enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, expedita a est odit ex ea provident repellendus vitae quis natus commodi, recusandae laboriosam ducimus nesciunt vel accusamus harum officiis nihil!</p>


            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br> <br></br>Neque ducimus quasi architecto facere dolores laborum aperiam voluptate perferendis necessitatibus, enim eligendi? Officia minus obcaecati officiis odit nostrum recusandae, eum optio quas culpa omnis quasi aliquid totam maxime amet exercitationem, aliquam modi ullam eius esse qui nobis, atque repudiandae quaerat. Cumque tempore facilis molestias atque accusantium eos magni, et similique velit? Natus dolores cum sit tempore delectus nihil unde magni enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, expedita a est odit ex ea provident repellendus vitae quis natus commodi,  recusandae laboriosam ducimus nesciunt vel accusamus harum officiis nihil!</p>

          </div>
        <div className="info-section">
          <div className="informations">
          <div className="info-card card1">
          <FontAwesomeIcon icon={faClinicMedical} className="iconss" />
            <p>Cabinet Vétérinaire Doctivéto 25 Rue de la Clinique, 75012 Paris</p>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="iconss" />

          </div>
          <div className="info-card card2">
            <FontAwesomeIcon icon={faClock} className="iconss" />
            <p>Du lundi au vendredi de 8h30 à 12H30 et de 14h à 19h Le samedi de 8h30 à 18h sans interruption.</p>
            <p></p>
          </div>
          <div className="info-card card3">
            <FontAwesomeIcon icon={faPhone} className="iconss" />
            <p>Contacter par téléphone le cabinet Doctivéto au (+33) 01 23 45 67 89 et suivez nous sur nos Resaux</p>
            <FontAwesomeIcon icon={faFacebookF} className="iconss" />
          </div>
          </div>
        </div>
        <div className="back">
        <div className=" nous-suivre">
              <button className="end-button">
                01 234 567 89
              </button>
              <button className="end-button">
                Nous Suivre
              </button>
            </div>
        </div>
      </div>
     
    </div>
  );
}
