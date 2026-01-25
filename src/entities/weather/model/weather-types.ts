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
 * 2. 초단기실황 관련 타입
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
 * 3. 단기예보 관련 타입
 */
export type FcstCategoryType =
  | "POP"
  | "PTY"
  | "PCP"
  | "REH"
  | "SNO"
  | "SKY"
  | "TMP" //1시간 단위 기온
  | "TMN" //일 최저기온
  | "TMX" //일 최고기온
  | "UUU"
  | "VVV"
  | "WAV"
  | "VEC"
  | "WSD";
export interface FcstItemType {
  baseDate: string; //예보 발표 날짜
  baseTime: string; //예보 발표 시각:
  category: FcstCategoryType; //각 카테고리 종류
  fcstDate: string; //예보 대상 날짜
  fcstTime: string; //예보 대상 시각
  fcstValue: string; //예보 기온
  nx: number;
  ny: number;
}
// 최종 응답 타입
export type FcstResponseType = WeatherResponseType<FcstItemType>;

/**  "baseDate": "20260124",
 *   "baseTime": "2300",
 *   "category": "TMP",
 *   "fcstDate": "20260125",
 *   "fcstTime": "0000",
 *   "fcstValue": "-8",
 *
 * => 26년 1월 24일 23시에 발표된 26년 1월 25일 00시00분의 온도는 -8도다
 * FCST에 대한 데이터는 최대 5일 까지 보여줌
 * baseTime : 0200, 0500, 0800, 1100, 1400, 1700, 2000, 2300 (1일 8회)
 * 이 시간들만 넣어야 조회 가능
 *
 * FCST PARAMS => numOfRows :290 넣으면 하루치 데이터만 조회 가능
 *
 * 갱신 기준
 *
 * ex)
 * 24일 02:00 발표 기준 → 24일 06:00 TMP 예보 = 예측값 1
 * 24일 05:00 발표 기준 → 24일 06:00 TMP 예보 = 예측값 2 (새롭게 계산된 값)
 * 즉 같은 fcstDate/Time(예보 시점)이라도 발표 시점(baseTime)에 따라 예보 값이 계속 업데이트.
 * baseDate + baseTime 기준 데이터를 최신 발표 기준으로 선택해야함.
 *
 */

/**
 * 4. WeatherSummary 사용할 데이터 타입
 */
export interface WeatherSummaryType {
  temp?: string;
  wind?: string;
  humidity?: string;
  rainType?: string;
  min?: string;
  max?: string;
}
