import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
});

const signup = (data) => {
  const { consent, confirmPassword, ...signupData } = data;
  return API.post('/auth/signup', signupData);
};

const signin = (data) => API.post('/auth/login', data);

export { signup, signin };