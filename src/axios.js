import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.FACTORY_MANAGEMENT_API_URI || `https://factory-management-api.herokuapp.com/`
});

export default axiosInstance;