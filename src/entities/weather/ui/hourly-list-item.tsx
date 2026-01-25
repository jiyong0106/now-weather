import type { FcstItemType } from "../model/weather-types";
import { formatForecastTime } from "@/entities/weather/lib/weather-formatter";

/**
 * 시간대별 기온을 보여주는 리스트 단일 컴포넌트
 */

interface Props {
  item: FcstItemType;
}

const HourlyListItem = ({ item }: Props) => {
  const { fcstTime, fcstValue } = item;

  return (
    <div className="flex items-center justify-between py-3 border-b border-blue-100  px-1 ">
      <span className="text-xl w-20">{formatForecastTime(fcstTime)}</span>
      {/* 시간되면 데이터에따른 아이콘 넣어야함 */}
      <span className="text-2xl font-bold  text-right w-20">{fcstValue}°</span>
    </div>
  );
};

export default HourlyListItem;
