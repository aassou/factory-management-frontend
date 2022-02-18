import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.FACTORY_MANAGEMENT_API_URI || `http://localhost:8081`
});

export default axiosInstance;