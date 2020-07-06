import Axios from 'axios';

const clienteAxios = Axios.create({baseURL: "www.saicoma.cl" });
export default clienteAxios;