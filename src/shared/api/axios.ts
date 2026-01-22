import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;
const appeKey = import.meta.env.VITE_API_KEY;

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    appid: appeKey,
    units: "metric",
    lang: "kr",
  },
});

export default instance;

// 위도는 37.63675606877362,
// 경도는 127.01025617198242

// 위도(lat), 경도(lon)
