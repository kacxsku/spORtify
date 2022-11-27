import axios from 'axios'
const baseUrl = 'http://localhost:8080/announcement'

const createAnnouncement = (newAnnouncement) => {
    const request = axios.post(`${baseUrl}/add`, newAnnouncement);
    return request.then(response => response.data);
}

const deleteAnnouncement = (announcementToDeleteId) => {
    const request = axios.delete(`${baseUrl}/delete/${announcementToDeleteId}`);
    return request.then(response => response.data);
}

const getAnnouncement = (id) => {
    const request = axios.get(`${baseUrl}/${id}`);
    return request.then(response => response.data);
}

const updateAnnouncement = (announcementToUpdateId, updatedAnnouncement) => {
    const request = axios.put(`${baseUrl}/update/${announcementToUpdateId}`, updatedAnnouncement);
    return request.then(response => response.data);
}


const assignParticipantToAnnouncement = (announcementId, userId) => {
    const request = axios.put(`${baseUrl}/assign/${announcementId}/${userId}`);
    return request.then(response => response.data);
}