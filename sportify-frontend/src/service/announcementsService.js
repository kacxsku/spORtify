import axios from 'axios'
const baseUrl = 'http://localhost:8080/announcements'


const getAllAnnouncements = async () => {
    const request = axios.post(`${baseUrl}`);
    const response = await request
    // return request.then(response => response.data);
    return response.data
}

const getAllAnnouncementsCreatedByUser = (id) => {
    const request = axios.post(`${baseUrl}/user/${id}`);
    return request.then(response => response.data);
}

const getAllAnnouncementsForParticipant = async (participantId) => {
    const request = axios.post(`${baseUrl}/user/participant/${participantId}`);
    const response = await request

    return response.data
}

export default {getAllAnnouncements, getAllAnnouncementsCreatedByUser, getAllAnnouncementsForParticipant};