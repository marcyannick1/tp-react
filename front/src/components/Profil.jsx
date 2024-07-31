import React, { useState, useEffect } from "react";
import axios from "axios";
import "./profil.css";

export default function Profil() {
  const [data, setData] = useState(null);
  const [editingProfil, setEditingProfil] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/register")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  };
/** PROFIL */
  const startEditing = (profil) => {
    setEditingProfil({ ...profil });
  };

  const cancelEditing = () => {
    setEditingProfil(null);
  };

  const saveProfil = () => {
    if (editingProfil) {
      axios
        .put(`http://localhost:3000/register/${editingProfil.id}`, editingProfil)
        .then(() => {
          fetchData();
          setEditingProfil(null);
        })
        .catch((error) => console.log(error));
    }
  };

  const deleteProfil = (id) => {
    axios
      .delete(`http://localhost:3000/register/${id}`)
      .then(() => {
        fetchData();
        setEditingProfil(null);
      })
      .catch((error) => console.log(error));
  };


  /** ANIMAL */
    const [dataAnimal, setDataAnimal] = useState(null);
    const [editingAnimal, setEditingAnimal] = useState(null);

    useEffect(() => {
        fetchDataAnimal();
        }, []);

    const fetchDataAnimal = () => {
        axios
        .get("http://localhost:3000/animal")
        .then((response) => {
            setDataAnimal(response.data);
        })
        .catch((error) => console.log(error));
    };

    const startEditingAnimal = (animal) => {
        setEditingAnimal({ ...animal });
    }

    const cancelEditingAnimal = () => {
        setEditingAnimal(null);
    }

    const saveAnimal = () => {
        if (editingAnimal) {
            axios
            .put(`http://localhost:3000/animal/${editingAnimal.id}`, editingAnimal)
            .then(() => {
                fetchDataAnimal();
                setEditingAnimal(null);
            })
            .catch((error) => console.log(error));
        }
    }

    const deleteAnimal = (id) => {
        axios
        .delete(`http://localhost:3000/animal/${id}`)
        .then(() => {
            fetchDataAnimal();
            setEditingAnimal(null);
        })
        .catch((error) => console.log(error));
    }

  return (
    <div className="cont">
      <h2 className="title">Bienvenue sur votre profil</h2>
      <div className="profil">
        <h3>Voici les informations de votre profil</h3>
        {data ? (
          <div className="profil-info">
            <p>Nom: {data.nom}</p>
            <p>Prénom: {data.prenom}</p>
            <p>Email: {data.email}</p>
            <p>Téléphone: {data.phone}</p>
            {editingProfil ? (
              <div>
                <input
                  type="text"
                  value={editingProfil.nom || ''}
                  onChange={(e) => setEditingProfil({ ...editingProfil, nom: e.target.value })}
                />
                <input
                  type="text"
                  value={editingProfil.prenom || ''}
                  onChange={(e) => setEditingProfil({ ...editingProfil, prenom: e.target.value })}
                />
                <input
                  type="text"
                  value={editingProfil.email || ''}
                  onChange={(e) => setEditingProfil({ ...editingProfil, email: e.target.value })}
                />
                <input
                  type="text"
                  value={editingProfil.phone || ''}
                  onChange={(e) => setEditingProfil({ ...editingProfil, phone: e.target.value })}
                />
                <button onClick={saveProfil}>Enregistrer</button>
                <button onClick={cancelEditing}>Annuler</button>
              </div>
            ) : (
              <div>
                <button onClick={() => startEditing(data)}>Modifier</button>
                <button onClick={() => deleteProfil(data.id)}>Supprimer votre compte</button>
              </div>
            )}
            
            <div className="pet-info">
                <h3>Vos animaux</h3>
                {dataAnimal ? (
                    <div className="animal-info">
                        {dataAnimal.map((animal) => (
                            <div key={animal.id}>
                                <p>Nom: {animal.nom}</p>
                                <p>Age: {animal.age}</p>
                                <p>Genre: {animal.genre}</p>
                                {editingAnimal && editingAnimal.id === animal.id ? (
                                    <div>
                                        <input
                                            type="text"
                                            value={editingAnimal.nom || ''}
                                            onChange={(e) => setEditingAnimal({ ...editingAnimal, nom: e.target.value })}
                                        />
                                        <input
                                            type="text"
                                            value={editingAnimal.age || ''}
                                            onChange={(e) => setEditingAnimal({ ...editingAnimal, age: e.target.value })}
                                        />
                                        <input
                                            type="text"
                                            value={editingAnimal.genre || ''}
                                            onChange={(e) => setEditingAnimal({ ...editingAnimal, genre: e.target.value })}
                                        />
                                        <button onClick={saveAnimal}>Enregistrer</button>
                                        <button onClick={cancelEditingAnimal}>Annuler</button>
                                    </div>
                                ) : (
                                    <div>
                                        <button onClick={() => startEditingAnimal(animal)}>Modifier</button>
                                        <button onClick={() => deleteAnimal(animal.id)}>Supprimer</button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Aucun animal enregistré</p>
                )}
            </div>
          </div>
        ) : (
          <p>Aucune info disponibles, veuillez vous connecter</p>
        )}

      </div>
    </div>
  );
}
