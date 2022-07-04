import axios from 'axios';

export const API_KEY = 'b97193ccd829d8b46f2dc8c92b121ca0';

const baseURL = 'https://api.openweathermap.org/data/2.5';

const config = {
  baseURL,
};

const api = axios.create(config);

export default api;
