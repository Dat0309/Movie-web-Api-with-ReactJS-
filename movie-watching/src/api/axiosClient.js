import axios from "axios";
import queryString from 'query-string';
import apiConfig from "./apiConfig";

// Get HTTP request to REST API 
const axiosClient = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        'Content-Type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify({...params, api_key: apiConfig.apiKey})
});

/**
 * defind request
 */
axiosClient.interceptors.request.use(async (config) => config);
/**
 * defind response
 */
axiosClient.interceptors.response.use((response) => {
    if(response && response.data){
        return response.data;
    }

    return response;
}, (error) =>{
    throw error;
});

export default axiosClient;