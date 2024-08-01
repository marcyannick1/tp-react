import React, { useContext } from "react";
import "./profil.css";
import { AuthContext } from '../context/authContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import hospitalisation from '../assets/hospitalisation.jpeg';

export default function Profil() {
  const { user } = useContext(AuthContext);
  console.log(user)

  // Dummy animal data
  const animal = {
    name: "Buddy",
    age: 3,
    type: "Dog",
    breed: "Golden Retriever"
  };

  return (
    <div className="mon-container">
      <div className="section1">
        <div className="section2">
          <h1>Profil</h1>
          <div className="info-reseau">
            <div className="profile-header">
              <div className="profile-pic">
                <FontAwesomeIcon icon={faUser} className='user-icon' size="2x" />
              </div>
              <h2 className="profile-name">{user.firstName}</h2>
            </div>
            <div className="so">
              <div className="social-icons">
                <div className="rs">
                  <FontAwesomeIcon icon={faFacebookF} size="2x" />
                  <p>Add Facebook</p>
                </div>
                <div className="rs">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                  <p>Add Twitter</p>
                </div>
                <div className="rs">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                  <p>Add Github</p>
                </div>
                <div className="rs">
                  <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                  <p>Add LinkedIn</p>
                </div>
              </div>
            </div>
          </div>

          <div className="canin">
            <div className="">
            <h3>Compagnon Canin</h3>
            <p>Nom: {animal.name}</p>
            <p>Âge: {animal.age} ans</p>
            <p>Type: {animal.type}</p>
            <p>Race: {animal.breed}</p>
            <button className="add-animal-btn">Ajouter un animal</button>

            </div>
          <div className='service-card' style={{ backgroundImage: `url(${hospitalisation})` }}>
          </div>

          </div>
        </div>

        <div className="form-container">
          <form>
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input type="text" id="name" value={user.lastName} name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="name">Prénom</label>
              <input type="text" id="name" value={user.firstName} name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" value={user.email} name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="adresse">Location</label>
              <input type="text" id="location" value={"5 rue de la mandarine 77510 Rebais"} name="location" />
            </div>
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}
