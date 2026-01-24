import { format, subMinutes, subDays } from "date-fns";

/**
 * 초단기실황용: 현재 시간에서 45분을 빼서 안전하게 가장 최근 정각 데이터를 가져옴
 */
export const getNcstTime = () => {
  const now = new Date();
  const safeTime = subMinutes(now, 45); // 40분 발표 지연 고려

  return {
    baseDate: format(safeTime, "yyyyMMdd"),
    baseTime: format(safeTime, "HH") + "00", // 분은 항상 00으로 고정
  };
};

/**
 * 단기예보용: 02, 05, 08... 중 현재보다 이전이면서 가장 가까운 시간 찾기
 */
export const getFcstTime = () => {
  const now = new Date();
  const hours = now.getHours();

  // 3시간 간격의 발표 시각 리스트
  const announceTimes = [2, 5, 8, 11, 14, 17, 20, 23];

  // 현재 시각보다 작거나 같은 발표 시각 중 가장 큰 수 찾기
  let targetHour = announceTimes.filter((t) => t <= hours).reverse()[0];
  let targetDate = format(now, "yyyyMMdd");

  // 만약 새벽 2시 이전이라면 -> 어제 날짜 밤 11시(23시) 리턴
  if (targetHour === undefined) {
    targetHour = 23;
    targetDate = format(subDays(now, 1), "yyyyMMdd");
  }

  return {
    baseDate: targetDate,
    baseTime: String(targetHour).padStart(2, "0") + "00",
  };
};
