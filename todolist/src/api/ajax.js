import axios from "axios";

let requests =  axios.create({
    baseURL:"/api",
    timeout:5000,
})

requests.interceptors.request.use(
    config => {
        config.headers['Content-Type'] = 'text/plain'
        return config
    }, err => {
        return Promise.reject(err)
    }
)


export default requests