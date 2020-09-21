import axios from 'axios';

const api = axios.create({ baseUrl: "https://api.github.com/users" });

export default api;