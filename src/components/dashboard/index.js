import React from 'react';
import {Link} from "react-router-dom"
const Dashboard = () => {
    return (
        <>
          <h1>Desde el Dashboard</h1>
            <Link to="/rutaA">
                <button type="button" >Ruta A</button>
            </Link>
            <Link to="/rutaB">
                <button type="button" >Ruta B</button>
            </Link>
            <Link to="/rutaC">
                <button type="button">Ruta C</button>
            </Link>
            <Link to="/crearUsuario">
                <button type="button">Crear Usuario</button>
            </Link>
            <Link to="/">
                <button type="buttom">Cerrar Sesion</button>
            </Link>
        </>
    );
};

export default Dashboard;