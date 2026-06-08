import axios from 'axios';

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

const getUser = () => {
  return API.get('/user/getuser');
}

const onboardUser = (data) => {
  return API.post('/user/onboard', data);
};

export { getUser, onboardUser };