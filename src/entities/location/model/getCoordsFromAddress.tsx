import axios from "axios";
import { formatAddress } from "@/entities/location/lib/location-formatter";

/**
 * 주소를 좌표로 변환
 */

export const getCoordsFromAddress = async (address: string) => {
  // 1. 하이픈(-)을 공백으로 치환
  const cleanAddr = formatAddress(address);

  // 카카오 맵 api
  const response = await axios.get(
    `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(cleanAddr)}`,
    {
      headers: {
        Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_REST_API_KEY}`,
      },
    },
  );

  // 2. 결과가 있으면 위경도 리턴, 없으면 null
  if (response.data.documents.length > 0) {
    const { x, y } = response.data.documents[0];
    return { lat: y, lng: x };
  }
  return null;
};
