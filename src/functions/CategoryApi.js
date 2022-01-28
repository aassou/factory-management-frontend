import axiosInstance from '../axios';

export const addCategory = (category, token) => axiosInstance.post(`/api/categories`, category, {
	headers: {
		Authorization: `Bearer ${token}`,
	}
});

export const putCategory = (category, token) => axiosInstance.put(`/api/categories/${category.id}`,
	category,
	{
		headers: {
			Authorization: `Bearer ${token}`
		}
	}
);

export const patchCategory = (category, token) => axiosInstance.patch(`/api/categories/${category.id}`,
	category,
	{
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/merge-patch+json"
		}
	}
);

export const getCategory = (id, token) => axiosInstance.get(`/api/categories/${id}`,
	{
		headers: {
			Authorization: `Bearer ${token}`
		}
	}
);

export const getCategories = (token) => axiosInstance.get(`/api/categories`,
	{
		headers: {
			Authorization: `Bearer ${token}`
		}  
	}
);

export const deleteCategory = (id, token) => axiosInstance.delete(`/api/categories/${id}`,
	{
		headers: {
			Authorization: `Bearer ${token}`  
		}
	}
);

export const searchCategory = (query, token) => axiosInstance.get(`/api/categories?page=1&name=${query}`,
	{
		headers: {
			Authorization: `Bearer ${token}`
		}
	}
);
