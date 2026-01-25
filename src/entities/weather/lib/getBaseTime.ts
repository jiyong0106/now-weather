import { subDays, format } from "date-fns";

/**
 * 초단기실황 (getUltraSrtNcst)
 * 매시간 정시, 30분마다 발표
 * -> 현재 시간이 40분을 지났으면 현재 시간을, 아니면 1시간 전을 baseTime으로 사용
 */
export const getNcstTime = () => {
  const now = new Date();
  const minutes = now.getMinutes();

  // 40분 이전이면 1시간 전 데이터
  if (minutes < 40) {
    now.setHours(now.getHours() - 1);
  }

  return {
    baseDate: format(now, "yyyyMMdd"),
    baseTime: format(now, "HH") + "00",
  };
};

/**
 * 단기예보 (getVilageFcst) - 시간대별 예보용
 * base_time : 0200, 0500, 0800, 1100, 1400, 1700, 2000, 2300 (1일 8회)
 * API 제공 시간: 각 base_time + 10분 뒤
 */
export const getFcstTime = () => {
  const now = new Date();
  const hour = now.getHours();

  // 발표 시각 리스트
  const times = [2, 5, 8, 11, 14, 17, 20, 23];
  let baseTimeHour = 2; // 기본값 (새벽 2시)

  // 현재 시간보다 이전인 가장 가까운 발표 시각 찾기
  for (let i = times.length - 1; i >= 0; i--) {
    if (hour >= times[i]) {
      baseTimeHour = times[i];
      break;
    }
  }

  // 만약 새벽 2시보다 이르다면 어제 23시 데이터를 봐야 함
  if (hour < 2) {
    const yesterday = subDays(now, 1);
    return {
      baseDate: format(yesterday, "yyyyMMdd"),
      baseTime: "2300",
    };
  }

  return {
    baseDate: format(now, "yyyyMMdd"),
    baseTime: String(baseTimeHour).padStart(2, "0") + "00",
  };
};

/**
 * 단기예보 - 일일 요약용, 일일 최고기온 최저기온 조회용 (TMP, TMX 조회를 위해 강제 02:00 고정)
 * 무조건 오늘 날짜의 0200을 반환.
 */
export const getDailyBaseTime = () => {
  const now = new Date();
  const hour = now.getHours();

  // 만약 새벽 2시 10분 전이라면 02:00 데이터가 아직 안 나왔을 수 있으니 어제 23시 데이터 사용
  // 여유있게 3시기준
  if (hour < 3) {
    const yesterday = subDays(now, 1);
    return {
      baseDate: format(yesterday, "yyyyMMdd"),
      baseTime: "2300",
    };
  }

  return {
    baseDate: format(now, "yyyyMMdd"),
    baseTime: "0200",
  };
};

// 조회값
// base_date: 20260124
// base_time: 0200
// 24일 06시에 최저기온 -11.0 / 24일 15시에 최고기온 -2.0,

// 조회값
// base_date: 20260124
// base_time: 0500
// 24일  최저기온 조회안됨 / 24일 15시에 최고기온 -2.0

// 조회값
// base_date: 20260124
// base_time: 0800
// 25일  0600시에 최저기온 -12 / 24일 15시에 최고기온 -2.0

// 조회값
// base_date: 20260124
// base_time: 1100
// 25일  0600시에 최저기온 -12 / 24일 15시에 최고기온 -2.0

// 조회값
// base_date: 20260124
// base_time: 1400
// 25일  0600시에 최저기온 -12 / 24일 최고기온 조회안됨

// 조회값
// base_date: 20260124
// base_time: 1700
// 25일  0600시에 최저기온 -12 / 25일 15시에 최고기온 -3

// 조회값
// base_date: 20260124
// base_time: 2000
// 25일  0600시에 최저기온 -12 / 25일 15시에 최고기온 -3

// 조회값
// base_date: 20260124
// base_time: 2300
// 25일  0600시에 최저기온 -12 / 25일 15시에 최고기온 -3

// 조회값
// base_date: 20260125
// base_time: 0200
// 25일  0600시에 최저기온 -12 / 25일 15시에 최고기온 -3
