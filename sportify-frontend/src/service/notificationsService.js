import axios from 'axios'
const baseUrl = 'http://localhost:8080/notification'

const getAllNotificationsForUser = (userId) => {
    const request = axios.get(`${baseUrl}/all/${userId}`);
    return request.then(response => response.data);
}

const createNotificationForUser = (userId, notification) => {
    const request = axios.post(`${baseUrl}/create/user/${userId}`, notification);
    return request.then(response => response.data);
}

const deleteNotificationForUser = (userId, notificationToDeleteId) => {
    const request = axios.delete(`${baseUrl}/delete/${notificationToDeleteId}/user/${userId}`);
    return request.then(response => response.data);
}