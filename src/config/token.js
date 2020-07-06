import clienteAxios from "./axios";

const tokenAuth = (token) => {
  if (token) {
    clienteAxios.defaults.headers.common["Authorization"] = `bearer ${token}`; //VERIFICAR EL TOKEN
  } else {
    delete clienteAxios.defaults.headers.common["Authorization"];
  }
};

export default tokenAuth;