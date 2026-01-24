import instance from "@/shared/api/axios";
import type { FcstResponseType, NcstResponseType } from "./weather-types";

// 공공데이터 포탈 버전
interface WeatherParams {
  nx: number;
  ny: number;
  base_date: string;
  base_time: string;
}
//  초단기 실황 =>당일 기온 조회
export const getNcstData = async (params: WeatherParams) => {
  const { data } = await instance.get<NcstResponseType>(`getUltraSrtNcst`, {
    params,
  });
  return data.response.body.items;
};

//  단기예보 => 시간대별 기온  및 최저 최고 기온
export const getFcstData = async (params: WeatherParams) => {
  const { data } = await instance.get<FcstResponseType>(`getVilageFcst`, {
    params,
  });
  return data.response.body.items;
};

// # getUltraSrtNcst	초단기실황조회
// # getUltraSrtFcst	초단기예보조회
// # getVilageFcst	단기예보조회
// # getFcstVersion	예보버전조회
