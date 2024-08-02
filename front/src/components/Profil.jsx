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
  console.log("IDDDD", user.id);
  const [animal, setAnimal] = useState({
    description: "",
    race: "",
    poids: 0.0,
    taille: 0.0,
    userId: user.id,
    cabinetId: null,
  });
  
  const [editingAnimal, setEditingAnimal] = useState(null); 
  const [data, setData] = useState([]);
  const [cabinets, setCabinets] = useState([]);

  useEffect(() => {
    fetchData();
    fetchCabinets();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/animal")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  };

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
  };
  
  const saveAnimal = (id) => {
    axios
      .put(`http://localhost:3000/animal/${id}`, editingAnimal)
      .then(() => {
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

  const fetchCabinets = () => {
    axios
      .get("http://localhost:3000/cabinet")
      .then((response) => {
        setCabinets(response.data);
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
