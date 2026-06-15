import axios from "axios";

const API = axios.create({
  baseURL: "https://volunteer-registration-backend.onrender.com/api",
});

export default API;