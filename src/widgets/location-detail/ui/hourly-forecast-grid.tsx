import CommonCard from "@/shared/ui/common-card";
import WeatherInfoCard from "@/entities/weather/ui/weather-info-card";
import { formatForecastTime } from "@/entities/weather/lib/weather-formatter";
import type { HourlyForecastType } from "@/entities/weather/lib/transform-weather";

/**
 * 시간대별 기온 예보 그리드 컴포넌트
 */
interface Props {
  items: HourlyForecastType[];
}

const HourlyForecastGrid = ({ items }: Props) => {
  return (
    <CommonCard className="flex flex-col gap-4 shadow-sm ">
      <h3 className="text-2xl font-bold px-2">시간대별 기온</h3>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 px-5 py-3 max-h-[250px] lg:max-h-[500px] overflow-y-auto ">
        {items.map((item, index) => (
          <WeatherInfoCard
            key={`${item.fcstDate}-${item.fcstTime}-${index}`}
            label={formatForecastTime(item.fcstTime)}
            value={item.tmp}
            skyCode={item.sky}
            ptyCode={item.pty}
          />
        ))}
      </div>
      {items.length === 0 && (
        <p className=" text-2xl text-gray-500  text-center pb-10">
          예보 데이터가 없습니다.
        </p>
      )}
    </CommonCard>
  );
};

export default HourlyForecastGrid;
