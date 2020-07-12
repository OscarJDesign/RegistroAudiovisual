import Axios from 'axios';

const clienteAxios = Axios.create({baseURL: "http://ubb-grafico.herokuapp.com/"});
export default clienteAxios;