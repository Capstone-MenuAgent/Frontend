import axios from "axios";

const Api = axios.create({
    baseURL: '',
    timeout: 10000,
    params: {},
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

Api.interceptors.request.use(
    function (config) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('accesstoken')}`
        return config;
    },
    function(error){
        return Promise.reject(error);
    }    
)

// Api.interceptors.response.use(
//     function(res){

//     }
// )

export default Api;