import React, { useState, useEffect }from 'react';
import { Redirect } from 'react-router-dom';




const Login = () => {

    //HOOK DE ESTADOS

    //FUNCION DE 
    const [dashboard, setDashboard] = useState(false);

    const [usuario, setUsuario] = useState({
        nombreUsuario: "",
        passUsuario:""
    });

    //OBJECT DESTRUCTURING
    const {nombreUsuario, passUsuario} = usuario; //EXTRAER PROPIEDAS DE USUARIO PARA QUITAR USUARIO.ALGO


    //HOOK DE EFECTO
    

    //LEER CAMBIOS EN INPUT
    const leerInputs = (e) =>{

        
        setUsuario({
            //hace una COPIA DE USUARIO
            ...usuario,
            [e.target.name] : e.target.value,
        })
    }

    const submitForm =(e) =>{
        e.preventDefault(); //EVITAR QE PAGINA RECARGE AL ENVIAR UN SUBMIT
        
        //VALIDAR CAMPOS VACIOS
        //.trim BORRA LOS ESPACIOS EN BLANCO PARA NO GENERAR ERRORES Y SEGURIDAD
        if(nombreUsuario.trim() === "" || passUsuario.trim() ===""){
            alert("Completa los Cambios");
            return;
        }

        //PASAR EL USUARIO AL ACTION
    }

    return (
        <>
    {dashboard ? <Redirect to="/dashboard" /> :
    
       
        <form onSubmit={submitForm}>  
                <input 
                type="text" 
                placeholder="correo@ejemplo.cl"
                name="nombreUsuario"
                value={nombreUsuario} //QUITAR USUARIO
                onChange={leerInputs}
                >

                </input>
                <input
                type="password"
                placeholder="Password"
                name="passUsuario"
                value={passUsuario}
                onChange={leerInputs}
                ></input>
                
                    <button type="submit">Ingresar</button>
                
            </form>
    
    }


        
        </>
    );
};

export default Login;