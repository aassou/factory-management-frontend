import axiosInstance from '../axios';

export const getHistory = (token) => axiosInstance.get(`/api/history`, {
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

export const getHistoryByMonth = (month, year, token) => axiosInstance.get(`/api/history/${month}/${year}`, {
	headers: {
		Authorization: `Bearer ${token}`,
	},
});


