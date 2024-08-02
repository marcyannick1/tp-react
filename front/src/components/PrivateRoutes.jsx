import { Outlet, Navigate } from 'react-router-dom'
import {useContext} from "react";
import {AuthContext} from "../context/authContext/index.jsx";

const PrivateRoutes = () => {
    const {user} = useContext(AuthContext)
    return user ? <Outlet/> : <Navigate to="/connection"/>

}

export default PrivateRoutes