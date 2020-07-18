import axios from 'axios';
import { baseUrl } from '../config';

axios.defaults.withCredentials = true;

export default class mainApi {
  static buyTickets = (data) => axios.post(`${baseUrl}/`, data, { headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' } });
}