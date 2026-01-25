import CommonCard from "@/shared/ui/common-card";
import WeatherInfoCard from "@/entities/weather/ui/weather-info-card";
import { formatForecastTime } from "@/entities/weather/lib/weather-formatter";
import type { HourlyForecastType } from "@/entities/weather/lib/transform-weather";
import NotData from "@/shared/ui/not-data";

/**
 * 시간대별 기온 예보 그리드 컴포넌트
 */
interface Props {
  items: HourlyForecastType[];
  isLoading?: boolean;
  isError?: boolean;
}

const HourlyForecastGrid = ({ items, isLoading, isError }: Props) => {
  return (
    <CommonCard className="flex flex-col gap-4 shadow-sm ">
      <h3 className="text-2xl font-bold px-2">시간대별 기온</h3>

      {isLoading ? (
        <NotData message="데이터를 불러오는 중입니다." />
      ) : isError ? (
        <NotData message="데이터를 불러올 수 없습니다." />
      ) : items.length === 0 ? (
        <NotData message="예보 데이터가 없습니다." />
      ) : (
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 px-5 py-3 max-h-[300px] lg:max-h-[500px]  overflow-y-auto ">
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
      )}
    </CommonCard>
  );
};

export default HourlyForecastGrid;
