import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;
const ServiceKey = import.meta.env.VITE_API_KEY;
const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  // 고정값들
  params: {
    ServiceKey,
    dataType: "JSON",
  },
});

export default instance;
