/**
 * 1. 기상청 API 공통 응답 구조
 *
 */
export interface WeatherResponseType<T> {
  response: {
    header: {
      resultCode: string;
      resultMsg: string;
    };
    body: {
      dataType: "JSON" | "XML";
      pageNo: number;
      numOfRows: number;
      totalCount: number;
      items: {
        item: T[];
      };
    };
  };
}

/**
 * 2. 초단기실황(Ncst) 관련 타입
 */
export type NcstCategoryType =
  | "T1H"
  | "RN1"
  | "UUU"
  | "VVV"
  | "REH"
  | "PTY"
  | "VEC"
  | "WSD";
export interface NcstItemType {
  baseDate: string;
  baseTime: string;
  category: NcstCategoryType;
  nx: number;
  ny: number;
  obsrValue: string;
}
// 최종 응답 타입
export type NcstResponseType = WeatherResponseType<NcstItemType>;

/**
 * 2. 단기예보(Fcst) 관련 타입
 */
export type FcstCategoryType =
  | "POP"
  | "PTY"
  | "PCP"
  | "REH"
  | "SNO"
  | "SKY"
  | "TMP"
  | "TMN"
  | "TMX"
  | "UUU"
  | "VVV"
  | "WAV"
  | "VEC"
  | "WSD";
export interface FcstItemType {
  baseDate: string;
  baseTime: string;
  category: FcstCategoryType;
  fcstDate: string;
  fcstTime: string;
  fcstValue: string;
  nx: number;
  ny: number;
}
// 최종 응답 타입
export type FcstResponseType = WeatherResponseType<FcstItemType>;
