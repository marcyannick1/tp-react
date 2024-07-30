import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Accueuil from "./components/Accueuil";
import AjoutCab from "./components/AjoutCab";
import Footer from "./components/footer/Footer";
import { Link, Route, Routes } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
      <nav>
        <Link to={"/accueuil"}>Accueuil</Link>
        <Link to={"/ajoutcab"}>AjoutCab</Link>
      </nav>
      
      <main>
        <Routes>
          <Route path="/accueuil" element={<Accueuil />}/>
          <Route path="/ajoutcab" element={<AjoutCab />}/>
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
