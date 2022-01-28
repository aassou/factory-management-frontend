import axiosInstance from '../axios';

export const addProduct = (product, token) => axiosInstance.post(`/api/products`, product, {
	headers: {
		Authorization: `Bearer ${token}`,
	}
});

export const putProduct = (product, token) => axiosInstance.put(`/api/products/${product.id}`,
	product,
	{
		headers: {
			Authorization: `Bearer ${token}`
		}
	}
);

export const patchProduct = (product, token) => axiosInstance.patch(`/api/products/${product.id}`,
	product,
	{
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/merge-patch+json"
		}
	}
);

export const getProduct = (id, token) => axiosInstance.get(`/api/products/${id}`,
	{
		headers: {
			Authorization: `Bearer ${token}`
		}
	}
);

export const getProducts = (token) => axiosInstance.get(`/api/products`,
	{
		headers: {
			Authorization: `Bearer ${token}`
		}  
	}
);

export const deleteProduct = (id, token) => axiosInstance.delete(`/api/products/${id}`,
	{
		headers: {
			Authorization: `Bearer ${token}`  
		}
	}
);