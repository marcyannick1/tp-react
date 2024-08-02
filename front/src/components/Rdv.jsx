import React, { useState } from 'react';
import './Rdv.css';

const Rdv = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    petName: '',
    petAge: '',
    vaccinated: false,
    appointmentDate: '',
    doctor: '',
    clinic: ''
  });

  const doctors = ['Dr. Doe', 'Dr. Smith', 'Dr. Brown'];
  const clinics = ['Clinique A', 'Clinique B', 'Clinique C'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Process form submission (e.g., send to API)
  };

  return (
    <div className="rdv-container">
      <h2>Prendre un Rendez-vous</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">Prénom</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Nom</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Téléphone</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Adresse</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="petName">Nom de votre compagnon</label>
          <input type="text" id="petName" name="petName" value={formData.petName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="petAge">Âge de l'animal</label>
          <input type="number" id="petAge" name="petAge" value={formData.petAge} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="vaccinated">
            <input type="checkbox" id="vaccinated" name="vaccinated" checked={formData.vaccinated} onChange={handleChange} />
            Vacciné
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="appointmentDate">Date du rendez-vous</label>
          <input type="date" id="appointmentDate" name="appointmentDate" value={formData.appointmentDate} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="doctor">Médecin</label>
          <select id="doctor" name="doctor" value={formData.doctor} onChange={handleChange} required>
            <option value="">Choisir un médecin</option>
            {doctors.map((doc) => (
              <option key={doc} value={doc}>{doc}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="clinic">Cabinet</label>
          <select id="clinic" name="clinic" value={formData.clinic} onChange={handleChange} required>
            <option value="">Choisir un cabinet</option>
            {clinics.map((clinic) => (
              <option key={clinic} value={clinic}>{clinic}</option>
            ))}
          </select>
        </div>
        <button type="submit">Prendre rendez-vous</button>
      </form>
    </div>
  );
};

export default Rdv;
