import axios from 'axios';

// API key
const API_KEY = '';
// API base URL
const BASE_URL = '';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
    },
});

const getUpcomingGames = () => {
    return api.get('/upcoming-games');
};

export {
    api,
    getUpcomingGames,
};