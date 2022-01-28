import axiosInstance from '../axios';

export const addProvider = (provider, token) => axiosInstance.post(`/api/providers/create`, provider, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const updateProvider = (provider, token) => axiosInstance.patch(`/api/providers/${provider.id}`, 
  provider, 
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
});

export const getProvider = (id, token) => axiosInstance.get(`/api/providers/${id}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getProviders = (token) => axiosInstance.get(`/api/providers`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});