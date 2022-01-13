import axiosInstance from '../axios';

export const addCustomer = (customer, token) => axiosInstance.post(`/api/customers`, customer, {
	headers: {
		Authorization: `Bearer ${token}`,
	}
});

export const putCustomer = (customer, token) => axiosInstance.put(`/api/customers/${customer.id}`,
	customer,
	{
		headers: {
			Authorization: `Bearer ${token}`
		}
	}
);

export const patchCustomer = (customer, token) => axiosInstance.patch(`/api/customers/${customer.id}`,
	customer,
	{
		headers: {
		Authorization: `Bearer ${token}`,
			"Content-Type": "application/merge-patch+json"
		}
	}
);

export const getCustomer = (id, token) => axiosInstance.get(`/api/customers/${id}`,
	{
    	headers: {
        	Authorization: `Bearer ${token}`
    	}
  	}
);

export const getCustomers = (token) => axiosInstance.get(`/api/customers`,
	{
    	headers: {
    		Authorization: `Bearer ${token}`
    	}  
  	}
);

export const deleteCustomer = (id, token) => axiosInstance.delete(`/api/customers/${id}`,
	{
    	headers: {
      		Authorization: `Bearer ${token}`  
    	}
  	}
);