import React, { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import Video from "../../assets/video/Video2.mp4";

const Login = () => {
  const authContext = useContext(AuthContext);
  const { usuario, iniciarSesion } = authContext;

  //HOOK DE ESTADOS

  //FUNCION DE
  const [dashboard, setDashboard] = useState(false);

  const [usuarioLocal, setUsuario] = useState({
    email: "",
    password: "",
  });

  //OBJECT DESTRUCTURING
  const { email, password } = usuarioLocal; //EXTRAER PROPIEDAS DE USUARIO PARA QUITAR USUARIO.ALGO

  //HOOK DE EFECTO

  //LEER CAMBIOS EN INPUT
  const leerInputs = (e) => {
    setUsuario({
      //hace una COPIA DE USUARIO
      ...usuarioLocal,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault(); //EVITAR QE PAGINA RECARGE AL ENVIAR UN SUBMIT

    //VALIDAR CAMPOS VACIOS
    //.trim BORRA LOS ESPACIOS EN BLANCO PARA NO GENERAR ERRORES Y SEGURIDAD
    if (email.trim() === "" || password.trim() === "") {
      alert("Completa los Cambios");
      return;
    }

    //PASAR EL USUARIO AL ACTION

    iniciarSesion(usuarioLocal);
  };

  return (
    <>
      {dashboard ? (
        <Redirect to="/dashboard" />
      ) : (
        <div className="contenedorGeneralLogin">
          <video autoPlay="autoPlay" muted loop="loop" id="myVideo">
            <source src={Video} type="video/mp4" />
          </video>
          <div>
            <form className="login" onSubmit={submitForm}>
              <h3 className="tituloLogin">INICIAR SESION</h3>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="su correo"
                className="user"
                value={email}
                onChange={leerInputs}
                autoComplete="off"
              />
              <input
                type="password"
                id="password"
                name="password"
                className="password"
                placeholder="su contraseña"
                value={password}
                onChange={leerInputs}
                autoComplete="off"
              />
              <button className="btnLogin" type="submit">
                Entrar
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
