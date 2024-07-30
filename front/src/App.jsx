import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Accueuil from "./components/Accueuil";
import AjoutCab from "./components/AjoutCab";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/accueuil" element={<Accueuil />} />
        <Route path="/ajoutcab" element={<AjoutCab />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
