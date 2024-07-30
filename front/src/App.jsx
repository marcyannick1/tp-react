import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Accueuil from "./components/Accueuil";
import Register from './components/Register';
import Connection from './components/Connection';
import AjoutCab from "./components/AjoutCab";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <Link to={"/accueuil"}>Accueuil</Link>
        <Link to={"/ajoutcab"}>AjoutCab</Link>
        <Link to={"/Connection"}>Connection</Link>
        <Link to={"/Register"}>Register</Link>


      </nav>
      
      <main>
        <Routes>
          <Route path="/accueuil" element={<Accueuil />}/>
          <Route path="/ajoutcab" element={<AjoutCab />}/>
          <Route path="/Connection" element={<Connection />}/>
          <Route path="/Register" element={<Register />}/>


        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
