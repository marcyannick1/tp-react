import React, { useState, useEffect } from "react";
import "./ajoutcab.css";
import axios from "axios";

export default function AjoutCab() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/cabinet")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="formCab">
      <div className="card-container">
        {data.map((cab) => (
          <div className="card" key={cab.id}>
            <p className="card-title">{cab.nom}</p>
            <p className="card-des">{cab.adresse}</p>
          </div>
        ))}
      </div>
    </div>

  );
}
