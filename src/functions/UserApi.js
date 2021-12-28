import axiosInstance from '../axios';

export const createUser = (user, token) => axiosInstance.post(`/api/users/create`, {
    username: user.username,
    status: user.status,
    profil: user.profil,
    password: user.password,
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  },
);

export const deleteUser = (id, token) => axiosInstance.delete(`/api/users/${id}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
  
export const updateUser = (user, token) => axiosInstance.patch(`/api/users/${user.id}`, {
    status: user.status,
    profil: user.profil,
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  },
);

export const getUser = (id, token) => axiosInstance.get(`/api/users/${id}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getUsers = (token) => axiosInstance.get(`/api/users`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});