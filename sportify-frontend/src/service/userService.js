import axios from 'axios'
const baseUrl = 'http://localhost:8080/user'

const updateUserDescription = (id, newDescription) => {
    const request = axios.put(`${baseUrl}/change/description/${id}`, newDescription);
    return request.then(response => response.data);
}


const updateUserPrivateData = (id, newData) => {
    const request = axios.put(`${baseUrl}/change/private/${id}`, newData);
    return request.then(response => response.data);
}


const getUserData = (id) => {
    const request = axios.get(`${baseUrl}/${id}`);
    return request.then(response => response.data);
}

export {updateUserDescription, updateUserPrivateData, getUserData};