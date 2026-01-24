import type { FcstItemType } from "../model/weather-types";

interface Props {
  item: FcstItemType;
}

const HourlyWeatherItem = ({ item }: Props) => {
  const formattedTime = `${item.fcstTime.slice(0, 2)}시`;

  return (
    <div className="flex items-center justify-between py-3 border-b border-blue-100  px-1 ">
      <span className="text-xl w-20">{formattedTime}</span>
      {/* TODO: 날씨 아이콘(SKY, PTY) 연동 로직 추가 예정 */}
      <span className="text-2xl">☀️</span>
      <span className="text-2xl font-bold  text-right w-20">
        {item.fcstValue}°C
      </span>
    </div>
  );
};

export default HourlyWeatherItem;
