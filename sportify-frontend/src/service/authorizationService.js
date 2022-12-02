import axios from 'axios'
const baseUrl = 'http://localhost:8080/authorization'


const login = () => {
    const request = axios.post(`${baseUrl}/login`);
    return request.then(response => response.data);
}

const changePassword = () => {
    const request = axios.post(`${baseUrl}/login/change/password`);
    return request.then(response => response.data);
}

const registerUser = () => {
    const request = axios.post(`${baseUrl}/register`);
    return request.then(response => response.data);
}

export { login, changePassword, registerUser };