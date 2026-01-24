import Badge from "@/shared/ui/badge";
import CommonCard from "@/shared/ui/common-card";
import type { NcstItemType, FcstItemType } from "../model/weather-types";

interface Props {
  items?: { current?: NcstItemType; min?: FcstItemType; max?: FcstItemType };
}

const CurrentWeatherCard = ({ items = {} }: Props) => {
  const { current, min, max } = items;
  return (
    <CommonCard className="flex flex-col gap-6 !p-8 shadow-sm border border-blue-100/50">
      {/* 제목과 아이콘 */}
      <h3 className="text-2xl ">현재 날씨</h3>

      {/* 메인 기온 및 상태 */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1">
          <span className="text-8xl font-black tracking-tighter text-slate-800">
            {current?.obsrValue ?? "--"}
          </span>
          <span className="text-4xl font-bold text-slate-600">°C</span>
        </div>
      </div>

      {/*  구분선  */}
      <div className="h-px bg-blue-200/50 w-full" />

      {/* 위치 및 상세 기온 */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 text-slate-600 font-medium ml-1">
          <span className="text-lg">📍</span>
          <span>대한민국, 서울특별시</span>
        </div>

        <div className="flex gap-4">
          <Badge
            label="최저"
            value={`${min?.fcstValue ?? "--"}°`}
            labelColor="text-blue-500"
          />
          <Badge
            label="최고"
            value={`${max?.fcstValue ?? "--"}°`}
            labelColor="text-red-500"
          />
        </div>
      </div>
    </CommonCard>
  );
};

export default CurrentWeatherCard;
