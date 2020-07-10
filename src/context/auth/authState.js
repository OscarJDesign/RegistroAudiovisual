import React, {useReducer} from 'react';
import AuthReducer from './authReducer';
import AuthContext from './authContext';

import ClienteAxios from "../../config/clienteAxios";
import {
    LOGIN_EXITOSO,
    LOGIN_ERROR,
} from "../../types"

const AuthState = (props) =>{
//ESTADO INICIAL

const initialState = {
    usuario: null, 
}

//FUNCION PARA EL DISPACH (LO QUE VA MODIFICANDO EL STATE)
const [state, dispach] = useReducer(AuthReducer, initialState);
//FUNCIONES

//INICIAR SESION
const iniciarSesion =(datos) => {
    try {
        const respuesta = ClienteAxios.post("/login", datos);
        console.log(respuesta);
        dispach({
           type: LOGIN_EXITOSO,
           payload: respuesta 
        });
    } catch (error) {
        console.log(error);
    }
}




    return(
        <AuthContext.Provider
            value  {
                usuario : state.usuario,
                iniciarSesion,
            }
        >
            {props.children}
        </AuthContext.Provider>
    );

};

export default AuthState;