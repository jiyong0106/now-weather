import CommonCard from "@/shared/ui/common-card";
import type { FcstItemType } from "@/entities/weather/model/weather-types";

interface Props {
  items: FcstItemType[];
}

const HourlyForecastGrid = ({ items = [] }: Props) => {
  return (
    <CommonCard className="flex flex-col gap-4 bg-white/50 backdrop-blur-sm border-none shadow-sm">
      <h3 className="text-xl font-bold text-slate-800 px-2">시간대별 예보</h3>

      {/* Grid Layout: 모바일 3열, 태블릿/데스크탑 4~6열 */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 pr-1 pb-2 max-h-[400px] overflow-y-auto custom-scrollbar">
        {items.map((item, index) => (
          <div
            key={`${item.fcstDate}-${item.fcstTime}-${index}`}
            className="flex flex-col items-center justify-center bg-white rounded-2xl py-4 gap-2 shadow-sm border border-slate-100/50 hover:scale-105 transition-transform"
          >
            <span className="text-sm font-medium text-slate-500">
              {item.fcstTime.slice(0, 2)}시
            </span>
            {/* TODO: 아이콘 매핑 필요 */}
            <span className="text-2xl">☀️</span>
            <span className="text-lg font-bold text-slate-800">
              {item.fcstValue}°
            </span>
          </div>
        ))}
        {items.length === 0 && (
          <p className="col-span-full text-center text-slate-400 py-10">
            예보 데이터가 없습니다.
          </p>
        )}
      </div>
    </CommonCard>
  );
};

export default HourlyForecastGrid;
