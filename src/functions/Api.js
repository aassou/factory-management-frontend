import axiosInstance from '../axios';

export const CheckToken = (token) => axiosInstance.get(`/api/checktoken`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const Login = (user) => axiosInstance.post(`/api/login`, {
  username: user.username,
  password: user.password,
});


