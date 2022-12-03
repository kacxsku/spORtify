import axios from 'axios'
const baseUrl = 'http://localhost:8080/notifications'

const getAllNotificationsForUser = (userId) => {
    const request = axios.get(`${baseUrl}/all/${userId}`);
    return request.then(response => response.data);
}


export default {getAllNotificationsForUser};