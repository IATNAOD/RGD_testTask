import axios from 'axios';
import { baseUrl } from '../config';

axios.defaults.withCredentials = true;

export default class mainApi {
  static test = (data) => axios.post(`${baseUrl}/api/users/login`, data);
}