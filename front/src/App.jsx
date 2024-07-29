import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Accueuil from "./components/Accueuil";
import { Link, Route, Routes } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
      <Link to={"/accueuil"}>Accueuil</Link>

      <Routes>
        <Route path="/accueuil" element={<Accueuil />}/>
      </Routes>
    </>
  )
}

export default App
