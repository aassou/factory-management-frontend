import axiosInstance from '../axios';

export const createApartment = (apartment, token) => axiosInstance.post(`/api/apartment/create`, apartment, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
  
export const updateApartment = (apartment, id, token) => axiosInstance.patch(`/api/apartment/${id}`, apartment, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getApartmentsByProjectId = (projectId, token) => axiosInstance.get(`/api/apartment/project/${projectId}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
  
export const getApartment = (id, token) => axiosInstance.get(`/api/apartment/${id}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getApartments = (token) => axiosInstance.get(`/api/apartment`, {
  headers: {
    Authorization: `Bearer ${token}`
  },
});