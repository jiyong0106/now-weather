import type { FcstItemType } from "../model/weather-types";

interface Props {
  item: FcstItemType;
}

/**
 * 시간대별 날씨 개별 항목 컴포넌트
 * "1500" 형태의 시간을 "15시" 형태로 변환하여 표시합니다.
 */
const HourlyWeatherItem = ({ item }: Props) => {
  // fcstTime: "HHmm" -> "HH시" (예: "1500" -> "15시")
  // 좀 더 상세한 포맷팅(오전/오후)은 추후 유틸리티로 확장 가능합니다.
  const formattedTime = `${item.fcstTime.slice(0, 2)}시`;

  return (
    <div className="flex items-center justify-between py-3 border-b border-blue-100  px-1 ">
      <span className="text-xl">{formattedTime}</span>
      {/* TODO: 날씨 아이콘(SKY, PTY) 연동 로직 추가 예정 */}
      <span className="text-2xl">☀️</span>
      <span className="text-2xl font-bold  text-right">{item.fcstValue}°C</span>
    </div>
  );
};

export default HourlyWeatherItem;
