import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://localhost:7081/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getPets = () => apiClient.get('/Pets');
export const getPetById = (petId) => apiClient.get(`/Pets/${petId}`);
export const createPet = (pet) => apiClient.post('/Pets', pet);
