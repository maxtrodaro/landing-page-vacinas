import axios from 'axios';

const api = axios.create({
  baseURL: 'https://abraceavida.com.br/api/v1',
});

export default api;
