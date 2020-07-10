import React, { useState, useContext, useEffect }from 'react';
import { Redirect } from 'react-router-dom';
import AuthContext from '../../auth/authContext';




const Login = () => {

    const authContext = useContext(AuthContext);
    const [usuario, iniciarSesion] = authContext;

    //HOOK DE ESTADOS

    //FUNCION DE 
    const [dashboard, setDashboard] = useState(false);

    const [usuarioLocal, setUsuario] = useState({
        email: "",
        password:""
    });

    //OBJECT DESTRUCTURING
    const {email, password} = usuarioLocal; //EXTRAER PROPIEDAS DE USUARIO PARA QUITAR USUARIO.ALGO


    //HOOK DE EFECTO
    

    //LEER CAMBIOS EN INPUT
    const leerInputs = (e) =>{

        
        setUsuario({
            //hace una COPIA DE USUARIO
            ...usuarioLocal,
            [e.target.name] : e.target.value,
        })
    }

    const submitForm =(e) =>{
        e.preventDefault(); //EVITAR QE PAGINA RECARGE AL ENVIAR UN SUBMIT
        
        //VALIDAR CAMPOS VACIOS
        //.trim BORRA LOS ESPACIOS EN BLANCO PARA NO GENERAR ERRORES Y SEGURIDAD
        if(email.trim() === "" || password.trim() ===""){
            alert("Completa los Cambios");
            return;
        }

        //PASAR EL USUARIO AL ACTION

        iniciarSesion(usuarioLocal);

    }

    return (
        <>
    {dashboard ? <Redirect to="/dashboard" /> :
    
       
        <form onSubmit={submitForm}>  
                <input 
                type="text" 
                placeholder="correo@ejemplo.cl"
                name="email"
                value={email} //QUITAR USUARIO
                onChange={leerInputs}
                >

                </input>
                <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={leerInputs}
                ></input>
                
                    <button type="submit">Ingresar</button>
                
            </form>
    
    }


        
        </>
    );
};

export default Login;