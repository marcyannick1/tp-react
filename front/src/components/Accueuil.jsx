import React from 'react'
import chien from '../assets/chien.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; 
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { faClinicMedical } from '@fortawesome/free-solid-svg-icons';
import './Accueil.css';
export default function Accueuil() {
  return (
    <div className='container'>
      <div className='content'>
        <div className="header">
          <img src={chien} alt='Description' className='image' />
          <div className="titre">
          <div className="sous-titre">
            <h2>Le cabinet vétérinaire</h2>
          <h1>Paws & Whiskers Veterinary Clinic</h1>
          </div>
            <p>
              À la Clinique Vétérinaire Paws & Whiskers, nous nous engageons à fournir des soins exceptionnels à vos animaux de compagnie bien-aimés. <br></br><br></br>Notre équipe de vétérinaires expérimentés et de personnel compatissant est dédiée à assurer la santé et le bien-être de vos amis à fourrure. Que ce soit pour un examen de routine, des soins d'urgence ou un traitement spécialisé, nous sommes là pour offrir les meilleurs services médicaux avec une touche de douceur. Faites-nous confiance pour être votre partenaire dans le maintien d'une vie heureuse et en bonne santé pour vos animaux.<br></br><br></br>
            </p>
            <div className="navbar-location">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
              <span>25 Rue de la Clinique, 75012 Paris </span>
              
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
        <div className="sous-titre">
            <p className='slogan'>Le cabinet Vétérinaire DoctiVéto à Paris </p>
          </div>
        </div>

      </div>
    </div>
  );
}
