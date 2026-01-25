import type { FcstItemType } from "../model/weather-types";

/**
 * 시간별 날씨 데이터 타입
 * - 하늘상태(SKY) 코드 : 맑음(1), 구름많음(3), 흐림(4)
 * - 강수형태(PTY) 코드 : (초단기) 없음(0), 비(1), 비/눈(2), 눈(3), 빗방울(5), 빗방울눈날림(6), 눈날림(7)
 * (단기) 없음(0), 비(1), 비/눈(2), 눈(3), 소나기(4)
 */

export interface HourlyForecastType {
  fcstDate: string; // 예보 날짜
  fcstTime: string; // 예보 시간
  tmp: string; // 기온
  sky: string; // 하늘상태 (1:맑음, 3:구름많음, 4:흐림)
  pty: string; // 강수형태 (0:없음, 1:비, 2:비/눈, 3:눈 등)
}

/**
 * 기상청 API 데이터를 시간별로 묶어서 UI에 맞게 변환
 *
 * 예: 14시 기온, 14시 하늘, 14시 비 -> { time: "14시", tmp: "10", sky: "1", pty: "0" }
 */
export const transformHourlyData = (
  items: FcstItemType[],
): HourlyForecastType[] => {
  if (!items || items.length === 0) return [];

  // 시간별 데이터 모음
  const grouped = new Map<string, HourlyForecastType>();

  // 각 데이터를 넣기
  items.forEach((item) => {
    const key = `${item.fcstDate}${item.fcstTime}`;

    // 없으면 새로 만들기
    if (!grouped.has(key)) {
      grouped.set(key, {
        fcstDate: item.fcstDate,
        fcstTime: item.fcstTime,
        tmp: "",
        sky: "1", // 기본값: 맑음
        pty: "0", // 기본값: 강수없음
      });
    }

    // 주머니 꺼내기
    const data = grouped.get(key)!;

    // 데이터 종류에 따라 알맞은 곳에 넣기
    if (item.category === "TMP") data.tmp = item.fcstValue;
    if (item.category === "SKY") data.sky = item.fcstValue;
    if (item.category === "PTY") data.pty = item.fcstValue;
  });

  // 기온 정보가 있는 것만 배열로 만들어서 반환
  return Array.from(grouped.values()).filter((d) => d.tmp !== "");
};
