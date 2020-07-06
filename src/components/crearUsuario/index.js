import React from 'react';
import { Link } from 'react-router-dom';

const CrearUsuario = () => {
    return (
        <>
            <h1>Crear Usuario</h1>
            <br/>
            <form>
                <p>Nuevo Usuario <input 
                    type="text" 
                    placeholder="Usuario">  
                </input></p>
                <p>Contraseña <input 
                    type="password" 
                    placeholder="Password">

                </input></p>
                <p>Confirmar Contraseña <input 
                    type="password" 
                    placeholder="Confirmar Password">
                </input></p>
                <p>Email <input 
                    type="email" 
                    placeholder="tucorreo@email.cl">
                </input></p> 

                <button type="submit">Crear Usuario</button>

                <Link to="/dashboard">
                    <button type="button"> Volver </button>
                </Link>

            </form>
        </>
    );
};

export default CrearUsuario;