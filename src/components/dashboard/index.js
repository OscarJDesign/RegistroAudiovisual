import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const Dashboard = () => {
  const authContext = useContext(AuthContext);
  const { cerrarSesion } = authContext;

  return (
    <>
      <h1>Desde el Dashboard</h1>
      <Link to="/rutaA">
        <button type="button">Ruta A</button>
      </Link>
      <Link to="/rutaB">
        <button type="button">Ruta B</button>
      </Link>
      <Link to="/rutaC">
        <button type="button">Ruta C</button>
      </Link>
      <Link to="/registro">
        <button type="button">Crear Usuario</button>
      </Link>
      <Link to="/">
        <button type="buttom" onClick={() => cerrarSesion()}>
          Cerrar Sesion
        </button>
      </Link>
    </>
  );
};

export default Dashboard;
