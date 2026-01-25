import { formatForecastTime } from "@/entities/weather/lib/weather-formatter";
import WeatherIcon from "./weather-icon";
import type { HourlyForecastType } from "@/entities/weather/lib/transform-weather";

/**
 * 시간대별 기온을 보여주는 리스트 단일 컴포넌트
 */

interface Props {
  item: HourlyForecastType;
}

const HourlyListItem = ({ item }: Props) => {
  const { fcstTime, tmp, sky, pty } = item;

  return (
    <div className="flex items-center justify-between py-3 border-b border-blue-100  px-1 ">
      <span className="text-xl w-20">{formatForecastTime(fcstTime)}</span>

      {/* 날씨 아이콘 */}
      <div className="text-3xl flex justify-center w-20">
        <WeatherIcon skyCode={sky} ptyCode={pty} />
      </div>

      <span className="text-2xl font-bold  text-right w-20">{tmp}°</span>
    </div>
  );
};

export default HourlyListItem;
