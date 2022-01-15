import axiosInstance from '../axios';

export const addUser = (user, token) => axiosInstance.post(`api/user/create`, {
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
  
export const putUser = (user, token) => axiosInstance.put(`/api/users/${user.id}`, {
		status: user.status,
		profil: user.profil,
	}, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	},
);

export const patchUser = (user, token) => axiosInstance.patch(`/api/users/${user.id}`, {
    	status: user.status,
    	profil: user.profil,
  	}, {
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/merge-patch+json"
		}
  	}
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

export const getCurrentUser = (token) => axiosInstance.get(`/api/user/current`, {
	headers: {
		Authorization: `Bearer ${token}`
	}
});