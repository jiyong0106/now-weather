import instance from "@/shared/api/axios";

const baseParams = {
  appid: import.meta.env.VITE_API_KEY,
  units: "metric",
  lang: "kr",
};

// 위도(lat), 경도(lon)
// 현재 날씨
export const getCurrentWeather = async (lat: number, lon: number) => {
  const { data } = await instance.get(`weather`, {
    params: {
      ...baseParams,
      lat,
      lon,
    },
  });
  return data;
};

// 1일 이내의 날씨
export const getOneCallWeather = async (lat: number, lon: number) => {
  const { data } = await instance.get(`onecall`, {
    params: {
      ...baseParams,
      lat,
      lon,
    },
  });
  return data;
};
