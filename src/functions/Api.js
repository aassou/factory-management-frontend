import axiosInstance from '../axios';

export const checkToken = (token) => axiosInstance.get(`/api/checktoken`, {
	headers: {
		Authorization: `Bearer ${token}`,
	},
});

export const login = (user) => axiosInstance.post(`/api/login`, {
	username: user.username,
	password: user.password,
});


