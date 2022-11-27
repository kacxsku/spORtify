import axios from 'axios'
const baseUrl = 'http://localhost:8080/opinion'


const createOpinion = (opinion) => {
    const request = axios.post(`${baseUrl}/create`, opinion)
    return request.then(response => response.data);
}
