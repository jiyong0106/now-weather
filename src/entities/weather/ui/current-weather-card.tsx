import Badge from "@/shared/ui/badge";
import CommonCard from "@/shared/ui/common-card";
import type { WeatherSummaryType } from "../model/weather-types";
import { LuMapPin } from "react-icons/lu";

/**
 * siebar에 현재 날씨를 보여주는 컴포넌트
 */

interface Props {
  items?: WeatherSummaryType;
  location?: string;
}

const CurrentWeatherCard = ({ items = {}, location }: Props) => {
  const { temp, min, max } = items;
  return (
    <CommonCard className="flex flex-col gap-6 p-8 shadow-sm ">
      {/* 제목과 아이콘 */}
      <h3 className="text-2xl ">현재 날씨</h3>

      {/* 메인 기온 및 상태 */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1">
          <span className="text-8xl font-black tracking-tighter text-slate-800">
            {temp ?? "--"}°
          </span>
        </div>
      </div>

      {/*  구분선  */}
      <div className="h-px bg-blue-200/50 w-full" />

      {/* 위치 및 상세 기온 */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <LuMapPin size={15} />
          <span className="text-gray-500 text-xl">
            {location || "위치 확인 중..."}
          </span>
        </div>

        <div className="flex gap-4">
          <Badge
            label="최저"
            value={`${min ?? "--"}°`}
            labelColor="text-blue-500"
          />
          <Badge
            label="최고"
            value={`${max ?? "--"}°`}
            labelColor="text-red-500"
          />
        </div>
      </div>
    </CommonCard>
  );
};

export default CurrentWeatherCard;
