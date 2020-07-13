import Axios from 'axios';

const clienteAxios = Axios.create({baseURL: "https://ubb-grafico.herokuapp.com/"});
export default clienteAxios;