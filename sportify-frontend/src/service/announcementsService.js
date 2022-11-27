import axios from 'axios'
const baseUrl = 'http://localhost:8080/announcements'


const getAllAnnouncements = () => {
    const request = axios.post(`${baseUrl}`);
    return request.then(response => response.data);
}

const getAllAnnouncementsCreatedByUser = (id) => {
    const request = axios.post(`${baseUrl}/user/${id}`);
    return request.then(response => response.data);
}

const getAllAnnouncementsForParticipant = (participantId) => {
    const request = axios.post(`${baseUrl}/user/participant/${participantId}`);
    return request.then(response => response.data);
}