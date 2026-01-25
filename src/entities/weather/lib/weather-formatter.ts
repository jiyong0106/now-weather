/*
 * 기상청 예보 시간("1500")을 읽기 좋은 형태("15시")로 변환
 */
export const formatForecastTime = (time: string): string => {
  return `${time.slice(0, 2)}시`;
};

/*
 * 강수형태
 */
export const formatRainType = (rainType?: string): string => {
  if (!rainType) return "알 수 없음";
  switch (rainType) {
    case "0":
      return "없음";
    case "1":
      return "비";
    case "2":
      return "비 / 눈";
    case "3":
      return "눈";
    case "5":
      return "빗방울";
    case "6":
      return "빗방울눈날림";
    case "7":
      return "눈날림";
    default:
      return "알 수 없음";
  }
};
