import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 3000
});


axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        return error.response;
    }
);

export async function login(username: string, password: string) {
    return await axiosInstance.post('/user/login', {
        username, password
    });
}

export async function registerCaptcha(email: string) {
    return await axiosInstance.get('/user/register-captcha', {
        params: {
            address: email
        }
    });
}

export async function register(registerUser) {
    return await axiosInstance.post('/user/register', registerUser);
}