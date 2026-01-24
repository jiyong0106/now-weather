import CommonCard from "@/shared/ui/common-card";
import type { FcstItemType } from "../model/weather-types";
import HourlyWeatherItem from "./hourly-weather-item";

interface Props {
  items: FcstItemType[];
}

const HourlyWeatherCard = ({ items = [] }: Props) => {
  return (
    <CommonCard className="flex flex-col gap-4 overflow-y-auto">
      <h3 className="text-2xl font-bold text-slate-800">시간대별 기온</h3>

      {/* 내부 스크롤 영역 */}
      <div className="flex flex-col gap-1  max-h-[320px] lg:max-h-[500px]  pr-2 ">
        {items.map((item, index) => (
          <HourlyWeatherItem
            key={`${item.fcstDate}-${item.fcstTime}-${index}`}
            item={item}
          />
        ))}
        {items.length === 0 && (
          <p className="text-center text-slate-400 py-10">데이터가 없습니다.</p>
        )}
      </div>
    </CommonCard>
  );
};

export default HourlyWeatherCard;
