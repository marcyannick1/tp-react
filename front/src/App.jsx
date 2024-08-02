import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Accueuil from "./components/Accueuil";
import Register from "./components/Register";
import Connection from "./components/Connection";
import AjoutCab from "./components/AjoutCab";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Rdv from "./components/Rdv";
import { Link, Route, Routes } from "react-router-dom";
import Profil from "./components/Profil";
import "./App.css";
import PrivateRoutes from "./components/PrivateRoutes.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/accueil" element={<Accueuil />} />
          <Route path="/ajoutcab" element={<AjoutCab />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/service" element={<Service />} />
        <Route path="/rdv" element={<Rdv />} />


        <Route path="/Connection" element={<Connection />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Profil" element={<Profil />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
