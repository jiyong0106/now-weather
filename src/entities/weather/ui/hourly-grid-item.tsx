import type { FcstItemType } from "../model/weather-types";
import { formatForecastTime } from "@/entities/weather/lib/weather-formatter";

/**
 *  시간대별 기온을 보여주는 그리드 단일 컴포넌트
 */
interface Props {
  item: FcstItemType;
}

const HourlyGridItem = ({ item }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-2xl py-4 gap-2 border-gray-200 border">
      <span className="text-lg text-gray-500">
        {formatForecastTime(item.fcstTime)}
      </span>
      <span className="text-2xl">☀️</span>
      <span className="text-2xl font-bold">{item.fcstValue}°</span>
    </div>
  );
};

export default HourlyGridItem;
