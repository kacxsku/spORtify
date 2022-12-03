import axios from 'axios'
const baseUrl = 'http://localhost:8080/announcements'


const getAllAnnouncements =  () => {
    const request = axios.get(`${baseUrl}`);
    // const response = await request
    return request.then(response => response.data);
}

const getAllAnnouncementsCreatedByUser = (id) => {
    const request = axios.get(`${baseUrl}/${id}`);
    // const response = await request
    return request.then(response => response.data);
}

const getAllAnnouncementsForParticipant = async (participantId) => {
    const request = axios.get(`${baseUrl}/participant/${participantId}`);
    const response = await request
    return response.data
}

export default {getAllAnnouncements, getAllAnnouncementsCreatedByUser, getAllAnnouncementsForParticipant};