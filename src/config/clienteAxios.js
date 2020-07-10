import Axios from 'axios';

const clienteAxios = Axios.create({baseURL: "https://www.saicoma.cl"});
export default clienteAxios;