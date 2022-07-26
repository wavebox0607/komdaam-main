import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://demo4.wavebox.net/api/v1/',
    // timeout: 10000

});
export const token = JSON.parse(localStorage.getItem("persist:root"))?.auth ? JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.auth)?.user?.token : null

// Add a request interceptor
axiosInstance.interceptors.request.use((config) => {
    // Do something before request is sent
    // config.params = config.params || {}
    // config.params['auth'] = 'iazadur'
    // console.log(config);
    // console.log(config);
    config.headers['Authorization'] = "iazadur"
    config.headers['Accept-Language'] = localStorage.getItem("lan") || 'en'
    // config.headers['Authorization'] = token ? 'Bearer ' + token : null
    return config;
});

export default axiosInstance