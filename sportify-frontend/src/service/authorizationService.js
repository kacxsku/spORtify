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

const registerUser = (newUser) => {
    const request = axios.post(`${baseUrl}/register`, newUser);
    return request.then(response => response.data);
}

export default { login, changePassword, registerUser };