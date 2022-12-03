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


const getUserData = async (id) => {
    const request = axios.get(`${baseUrl}/${id}`);
    const response = await request
    return response.data
}

export default {updateUserDescription, updateUserPrivateData, getUserData};