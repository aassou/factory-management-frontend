import axiosInstance from '../axios';

export const addSupplier = (supplier, token) => axiosInstance.post(`/api/suppliers`, supplier, {
	headers: {
		Authorization: `Bearer ${token}`,
	}
});

export const putSupplier = (supplier, token) => axiosInstance.put(`/api/suppliers/${supplier.id}`,
	supplier,
	{
		headers: {
			Authorization: `Bearer ${token}`
		}
	}
);

export const patchSupplier = (supplier, token) => axiosInstance.patch(`/api/suppliers/${supplier.id}`,
	supplier,
	{
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/merge-patch+json"
		}
	}
);

export const getSupplier = (id, token) => axiosInstance.get(`/api/suppliers/${id}`,
	{
		headers: {
			Authorization: `Bearer ${token}`
		}
	}
);

export const getSuppliers = (token) => axiosInstance.get(`/api/suppliers`,
	{
		headers: {
			Authorization: `Bearer ${token}`
		}  
	}
);

export const deleteSupplier = (id, token) => axiosInstance.delete(`/api/suppliers/${id}`,
	{
		headers: {
			Authorization: `Bearer ${token}`  
		}
	}
);