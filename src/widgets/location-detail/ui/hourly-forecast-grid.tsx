import CommonCard from "@/shared/ui/common-card";
import type { FcstItemType } from "@/entities/weather/model/weather-types";
import HourlyGridItem from "@/entities/weather/ui/hourly-grid-item";

/**
 * 시간대별 기온 예보 그리드 컴포넌트
 */
interface Props {
  items: FcstItemType[];
}

const HourlyForecastGrid = ({ items }: Props) => {
  return (
    <CommonCard className="flex flex-col gap-4 ">
      <h3 className="text-2xl font-bold px-2">시간대별 기온</h3>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 px-5 py-3 max-h-[250px] lg:max-h-[500px] overflow-y-auto ">
        {items.map((item, index) => (
          <HourlyGridItem
            key={`${item.fcstDate}-${item.fcstTime}-${index}`}
            item={item}
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
