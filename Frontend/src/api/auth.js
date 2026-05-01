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

const signup = (data) => {
  const { consent, confirmPassword, ...signupData } = data;
  return API.post('/auth/signup', signupData);
};

const signin = (data) => API.post('/auth/login', data);

export { signup, signin };