import React from 'react';
import {Link} from "react-router-dom"

const RutaB = () => {
    return (
        <>
            <h1>desde ruta B</h1>
            <Link to="/dashboard">
                <button type="button" >Dashboard</button>
            </Link>
            <Link to="/rutaA">
                <button type="button" >Ruta A</button>
            </Link>
            <Link to="/rutaC">
                <button type="button">Ruta C</button>
            </Link>
        </>
    );
};

export default RutaB;