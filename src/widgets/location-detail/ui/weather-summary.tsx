import WeatherInfoCard from "@/entities/weather/ui/weather-info-card";
import CommonCard from "@/shared/ui/common-card";
import { IoWaterOutline, IoRainyOutline } from "react-icons/io5";
import { PiWindLight } from "react-icons/pi";
import type { WeatherSummaryType } from "@/entities/weather/model/weather-types";
import Badge from "@/shared/ui/badge";
import { formatAddress } from "@/entities/location/lib/location-formatter";
import { formatRainType } from "@/entities/weather/lib/weather-formatter";

interface Props {
  items: WeatherSummaryType;
  locationName: string;
}

const WeatherSummary = ({ items, locationName }: Props) => {
  const { temp, wind, humidity, rainType, min, max } = items;

  return (
    <CommonCard>
      {/*  지역 이름 및 메인 기온 섹션 */}
      <div className="flex flex-col items-center gap-5 mb-5">
        <h2 className="text-2xl font-bold ">
          {formatAddress(locationName) || "위치 정보 없음"}
        </h2>

        <div className="flex items-start justify-center pl-4">
          <span className="text-8xl font-light tracking-tighter text-slate-900">
            {temp ?? "--"}°
          </span>
        </div>

        <div className="flex gap-4 text-2xl ">
          <Badge
            label="최고"
            value={`${max ?? "--"}°`}
            labelColor="text-red-500"
          />
          <Badge
            label="최저"
            value={`${min ?? "--"}°`}
            labelColor="text-blue-500"
          />
        </div>
      </div>

      {/* 하단 상세 정보 타일 (풍속/습도/강수) */}
      <div className="grid grid-cols-3 gap-3 w-full px-4 mt-2">
        <WeatherInfoCard
          label="풍속"
          value={`${wind ?? "-"} m/s`}
          icon={<PiWindLight fontSize={20} />}
        />
        <WeatherInfoCard
          label="습도"
          value={`${humidity ?? "-"} %`}
          icon={<IoWaterOutline fontSize={20} />}
        />
        <WeatherInfoCard
          label="강수"
          value={formatRainType(rainType)}
          icon={<IoRainyOutline fontSize={20} />}
        />
      </div>
    </CommonCard>
  );
};

export default WeatherSummary;
