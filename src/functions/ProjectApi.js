import axiosInstance from '../axios';

export const createProject = (project, token) => axiosInstance.post(`/api/project/create`, project, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const updateProject = (project, token) => axiosInstance.patch(`/api/project/${project.id}`, project, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getProject = (id, token) => axiosInstance.get(`/api/project/${id}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getProjects = (token) => axiosInstance.get(`/api/project`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

