import CommonCard from "@/shared/ui/common-card";
import HourlyListItem from "./hourly-list-item";
import type { HourlyForecastType } from "@/entities/weather/lib/transform-weather";
import NotData from "@/shared/ui/not-data";

/**
 * sidebar에서 시간대별 기온을 보여주는 리스트형식  컴포넌트
 */

interface Props {
  items: HourlyForecastType[];
  isLoading?: boolean;
  isError?: boolean;
}

const HourlyWeatherLists = ({ items, isLoading, isError }: Props) => {
  return (
    <CommonCard className="flex flex-col gap-4 overflow-y-auto shadow-sm ">
      <h3 className="text-2xl font-bold text-slate-800">시간대별 기온</h3>

      {/* 내부 스크롤 영역 */}
      <div className="flex flex-col gap-1 max-h-[320px] lg:max-h-[400px] lg:min-h-[400px]  pr-2 ">
        {isLoading ? (
          <NotData message="데이터를 불러오는 중입니다." />
        ) : isError ? (
          <NotData message="데이터를 불러올 수 없습니다." />
        ) : (
          <>
            {items.map((item, index) => (
              <HourlyListItem
                key={`${item.fcstDate}-${item.fcstTime}-${index}`}
                item={item}
              />
            ))}
            {items.length === 0 && (
              <NotData message="예보 데이터가 없습니다." />
            )}
          </>
        )}
      </div>
    </CommonCard>
  );
};

export default HourlyWeatherLists;
