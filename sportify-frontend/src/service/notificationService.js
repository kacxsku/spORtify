import axios from 'axios'
const baseUrl = 'http://localhost:8080/notification'

const createNotificationForUser = (notification) => {
    const request = axios.post(`${baseUrl}`, notification);
    return request.then(response => response.data);
}

const deleteNotificationForUser = (userId, notificationToDeleteId) => {
    const request = axios.delete(`${baseUrl}/delete/${notificationToDeleteId}/user/${userId}`);
    return request.then(response => response.data);
}

export default { createNotificationForUser, deleteNotificationForUser};