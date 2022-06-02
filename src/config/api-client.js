import axios from 'axios';

const api_client = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Accept': '*/*'
  }
});

api_client.interceptors.request.use(
  config => {
    if (localStorage.getItem('token')) {
      config.headers['authorization'] = localStorage.getItem('token');
      return config;
    } else {
      return config;
    }
  },
  error => {
    return Promise.reject(error);
  }
)

export default api_client;
