import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import "./profil.css";
import { AuthContext } from '../context/authContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import hospitalisation from '../assets/hospitalisation.jpeg';

export default function Profil() {
  
  const { user } = useContext(AuthContext);

  const [animal, setAnimal] = useState({
    description: "",
    race: "",
    poids: 0.0,
    taille: 0.0,
    userId: user.id,
    cabinetId: null,
  });
  
  const [editingAnimal, setEditingAnimal] = useState(null); 
  const [editingProfil, setEditingProfil] = useState(null);
  const [data, setData] = useState([]);
  const [cabinets, setCabinets] = useState([]);

  const [localUser, setLocalUser] = useState(''); 

  useEffect(() => {
    fetchData();
    fetchCabinets();
    setLocalUser('');
    getProfil();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/animal")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  };

// PARTIE ANIMAUX
  const addAnimal = () => {
    axios
      .post("http://localhost:3000/animal", animal)
      .then(() => {
        fetchData();
        setAnimal({
          description: "",
          race: "",
          poids: 0.0,
          taille: 0.0,
          userId: user.id,
          cabinetId: null
        });
      })
      .catch((error) => console.log(error));
  };
  
  const startEditing = (animal) => {
    setEditingAnimal({ ...animal });
  };

  const cancelEditing = () => {
    setEditingAnimal(null);
    setEditingProfil(null);
  };
  
  const saveAnimal = (id) => {
    axios
      .put(`http://localhost:3000/animal/${id}`, editingAnimal)
      .then(() => {
        console.log('animal', editingAnimal);
        fetchData();
        setEditingAnimal(null);
      })
      .catch((error) => console.log(error));
  };

  const deleteAnimal = (id) => {
    axios
      .delete(`http://localhost:3000/animal/${id}`)
      .then(() => {
        fetchData();
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnimal({
      ...animal,
      [name]: name === "poids" || name === "taille" ? parseFloat(value) : value
    });
  };

// PARTIE CABINET
  const fetchCabinets = () => {
    axios
      .get("http://localhost:3000/cabinet")
      .then((response) => {
        setCabinets(response.data);
      })
      .catch((error) => console.log(error));
  };

// PARTIE PROFIL

  const getProfil = () => {
    axios .get(`http://localhost:3000/user/${user.id}`)
      .then((response) => {
        setLocalUser(response.data);
        console.log('user' , localUser);
      })
      .catch((error) => console.log(error));
  };


  const startEditingPro = (profil) => {
    setEditingProfil({ ...profil });
  };

  const saveProfil = (id) => {
    const { iat, exp, password, ...updatedProfil } = editingProfil;
    axios
      .put(`http://localhost:3000/user/${id}`, updatedProfil)
      .then((response) => {
        console.log('updated', editingProfil);
        setLocalUser(response.data); 
        console.log('localUser', localUser);
        getProfil();
        fetchData();
        setEditingProfil(updatedProfil);
      })
      .catch((error) => console.log('Erreur lors de la mise à jour du profil:', error));
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
              <h2 className="profile-name">{localUser.firstName}</h2>
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
              <input
                type="text"
                placeholder="Description"
                name="description"
                value={animal.description}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Race"
                name="race"
                value={animal.race}
                onChange={handleChange}
              />
              <p>Poids:
                <input
                  type="number"
                  placeholder="Poids"
                  name="poids"
                  value={animal.poids}
                  onChange={handleChange}
                />
              </p>
              <p>Taille:
              <input
                type="number"
                placeholder="Taille"
                name="taille"
                value={animal.taille}
                onChange={handleChange}
              />
              </p>
              <select
                name="cabinetId"
                value={animal.cabinetId || ""}
                onChange={(e) => setAnimal({ ...animal, cabinetId: parseInt(e.target.value) })}
              >
                <option value="">Sélectionner un cabinet</option>
                {cabinets.map((cabinet) => (
                  <option key={cabinet.id} value={cabinet.id}>
                    {cabinet.nom}
                  </option>
                ))}
              </select>
              <button className="add-animal-btn" onClick={addAnimal}>
                Ajouter un animal
              </button>
            </div>
            <div
              className="service-card"
              style={{ backgroundImage: `url(${hospitalisation})` }}
            ></div>
          </div>
          
          {data.filter(animal => animal.userId === user.id).map((animal) => (
          <div className="canin">
              <div className="" key={animal.id}>
                <div className="">
                  <h3>Compagnon Canin - {animal.race}</h3>
                  <p>Description: {animal.description}</p>
                  <p>Taille: {animal.taille}</p>
                  <p>Poids: {animal.poids}</p>
                  <p>Cabinet: {cabinets.find(cabinet => cabinet.id === animal.cabinetId)?.nom}</p>
                  <button onClick={() => startEditing(animal)}>Edit</button>
                </div>
                {editingAnimal && editingAnimal.id === animal.id && (
                  <div>
                    <input
                      type="text"
                      placeholder="Description"
                      name="description"
                      value={editingAnimal.description}
                      onChange={(e) => setEditingAnimal({ ...editingAnimal, description: e.target.value })}
                    />
                    <input
                      type="text"
                      placeholder="Race"
                      name="race"
                      value={editingAnimal.race}
                      onChange={(e) => setEditingAnimal({ ...editingAnimal, race: e.target.value })}
                    />
                    <p>Poids: 
                    <input
                      type="number"
                      placeholder="Poids"
                      name="poids"
                      value={editingAnimal.poids}
                      onChange={(e) => setEditingAnimal({ ...editingAnimal, poids: parseFloat(e.target.value) })}
                    />
                    </p>
                    <p>Taille: 
                    <input
                      type="number"
                      placeholder="Taille"
                      name="taille"
                      value={editingAnimal.taille}
                      onChange={(e) => setEditingAnimal({ ...editingAnimal, taille: parseFloat(e.target.value) })}
                    />
                    </p>
                    <p>Cabinet: 
                    <select
                      name="cabinetId"
                      value={editingAnimal.cabinetId || ""}
                      onChange={(e) => setEditingAnimal({ ...editingAnimal, cabinetId: parseInt(e.target.value) })}
                    >
                      <option value="">Sélectionner un cabinet</option>
                      {cabinets.map((cabinet) => (
                        <option key={cabinet.id} value={cabinet.id}>
                          {cabinet.nom}
                        </option>
                      ))}
                    </select>
                    </p>
                    <button onClick={() => saveAnimal(animal.id)}>Sauvegarder</button>
                    <button onClick={cancelEditing}>Annuler</button>
                    <button onClick={() => deleteAnimal(animal.id)}>Supprimer</button>
                  </div>
                )}
              </div>
          </div>
          ))}
        </div>

    <div className="form-container">
      <form>
        <div className="form-group">
          <label htmlFor="lastName">Nom</label>
          <input type="text" id="lastName" value={localUser.lastName} name="lastName" readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Prénom</label>
          <input type="text" id="firstName" value={localUser.firstName} name="firstName" readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={localUser.email} name="email" readOnly />
        </div>
        <button type="button" onClick={() => startEditingPro(localUser)}>Edit</button>
      </form>
      {editingProfil && editingProfil.id === localUser.id && (
        <div>
          <input
            type="text"
            placeholder="Nom"
            name="lastName"
            value={editingProfil.lastName}
            onChange={(e) => setEditingProfil({ ...editingProfil, lastName: e.target.value })}
          />
          <input
            type="text"
            placeholder="Prénom"
            name="firstName"
            value={editingProfil.firstName}
            onChange={(e) => setEditingProfil({ ...editingProfil, firstName: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={editingProfil.email}
            onChange={(e) => setEditingProfil({ ...editingProfil, email: e.target.value })}
          />
          <button onClick={() => saveProfil(localUser.id)}>Sauvegarder</button>
          <button onClick={cancelEditing}>Annuler</button>
        </div>
      )}
    </div>
      </div>
    </div>
  );
}
