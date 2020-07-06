import React from 'react';
import {Link} from "react-router-dom";
const RutaC = () => {
    return (
        <>
           <h1>dede ruta C</h1> 
           <Link to="/dashboard">
                <button type="button" >Dashboard</button>
            </Link>
           <Link to="/rutaA">
                <button type="button" >Ruta A</button>
            </Link>
            <Link to="/rutaB">
                <button type="button">Ruta B</button>
            </Link>
        </>
    );
};

export default RutaC;