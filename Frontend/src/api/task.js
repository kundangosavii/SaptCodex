import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
}
);

const getTask = () => {
  return API.get('/task/gettasks');
}

export { getTask }