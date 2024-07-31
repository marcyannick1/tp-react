import React, { useState, useEffect } from "react";
import "./ajoutcab.css";
import axios from "axios";

export default function AjoutCab() {
  const [data, setData] = useState([]);
  const [newCab, setNewCab] = useState({ nom: "", adresse: "" });
  const [editingCab, setEditingCab] = useState(null); 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/cabinet")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  };

  const addCab = () => {
    axios
      .post("http://localhost:3000/cabinet", newCab)
      .then(() => {
        fetchData();
        setNewCab({ nom: "", adresse: "" });
      })
      .catch((error) => console.log(error));
  };

  const deleteCab = (id) => {
    axios
      .delete(`http://localhost:3000/cabinet/${id}`)
      .then(() => {
        fetchData();
      })
      .catch((error) => console.log(error));
  };

  const startEditing = (cab) => {
    setEditingCab({ ...cab });
  };

  const cancelEditing = () => {
    setEditingCab(null);
  };

  const saveCab = (id) => {
    axios
      .put(`http://localhost:3000/cabinet/${id}`, editingCab)
      .then(() => {
        fetchData();
        setEditingCab(null);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="formCab">

      
<div className="add-form">
        <input
          type="text"
          placeholder="Nom"
          value={newCab.nom}
          onChange={(e) => setNewCab({ ...newCab, nom: e.target.value })}
        />
        <input
          type="text"
          placeholder="Adresse"
          value={newCab.adresse}
          onChange={(e) => setNewCab({ ...newCab, adresse: e.target.value })}
        />
        <button onClick={addCab}>Ajouter un cabinet</button>
      </div>
      <div className="card-container">
        {data.map((cab) => (
          <div className="card" key={cab.id}>
            {editingCab && editingCab.id === cab.id ? (
              <>
                <input
                  type="text"
                  value={editingCab.nom}
                  onChange={(e) =>
                    setEditingCab({ ...editingCab, nom: e.target.value })
                  }
                />
                <input
                  type="text"
                  value={editingCab.adresse}
                  onChange={(e) =>
                    setEditingCab({ ...editingCab, adresse: e.target.value })
                  }
                />
                <button onClick={() => saveCab(cab.id)}>Sauvegarder</button>
                <button onClick={cancelEditing}>Annuler</button>
              </>
            ) : (
              <>
                <p className="card-title">{cab.nom}</p>
                <p className="card-des">{cab.adresse}</p>
                <button onClick={() => startEditing(cab)}>Modifier</button>
                <button onClick={() => deleteCab(cab.id)}>Supprimer</button>
              </>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}
