import axios from 'axios'
const baseUrl = 'http://localhost:8080/opinions'

const getAllOpinionsForUser = (id) => {
    const request = axios.get(`${baseUrl}/${id}`);
    return request.then(response => response.data);
}

export {getAllOpinionsForUser};