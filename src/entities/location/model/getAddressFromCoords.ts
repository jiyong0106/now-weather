import axios from "axios";

export const getAddressFromCoords = async (lat: number, lng: number) => {
  try {
    const response = await axios.get(
      `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lng}&y=${lat}`,
      {
        headers: {
          Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_REST_API_KEY}`,
        },
      },
    );

    if (response.data.documents.length > 0) {
      const address = response.data.documents[0].address;
      const region1 = address?.region_1depth_name;
      const region2 = address?.region_2depth_name;
      const region3 = address?.region_3depth_name;

      return `${region1} ${region2} ${region3}`;
    }
    return null;
  } catch (error) {
    console.error("주소 변환 실패:", error);
    return null;
  }
};
