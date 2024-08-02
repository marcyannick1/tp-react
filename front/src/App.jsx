import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Accueuil from "./components/Accueuil";
import Register from './components/Register';
import Connection from './components/Connection';
import AjoutCab from "./components/AjoutCab";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Contact from "./components/Contact";
import {Link, Route, Routes} from "react-router-dom";
import "./App.css";
import PrivateRoutes from "./components/PrivateRoutes.jsx";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route element={<PrivateRoutes/>}>
                    <Route path="/accueil" element={<Accueuil/>}/>
                    <Route path="/ajoutcab" element={<AjoutCab/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Route>
                <Route path="/Connection" element={<Connection/>}/>
                <Route path="/Register" element={<Register/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
