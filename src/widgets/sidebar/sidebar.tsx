import CurrentWeatherCard from "@/entities/weather/ui/current-weather-card";
import HourlyWeatherCard from "@/entities/weather/ui/hourly-weather-card";
import { useEffect, useState } from "react";
import { convertToGrid } from "@/entities/weather/model/convert-to-grid";
import { useQuery } from "@tanstack/react-query";
import {
  getNcstData,
  getFcstData,
} from "@/entities/weather/model/weather-apis";
import { format, subMinutes } from "date-fns";
import type {
  NcstItemType,
  FcstItemType,
} from "@/entities/weather/model/weather-types";

const Sidebar = () => {
  // lat 위도 lon 경도
  const [grid, setGrid] = useState<{ nx: number; ny: number } | null>(null);
  const now = new Date();
  // 정각에 데이터 안나오는걸 대비해서 여유롭게 현재 시간에서 -10분
  const safeTime = subMinutes(now, 10);
  const base_date = format(safeTime, "yyyyMMdd");
  const base_time = format(safeTime, "HHmm");

  // 1. 초단기 실황
  const { data: ncstdata } = useQuery<{ item: NcstItemType[] }>({
    queryKey: ["ncstDataKey", grid],
    queryFn: () =>
      getNcstData({
        nx: grid!.nx,
        ny: grid!.ny,
        base_date,
        base_time,
      }),
    enabled: !!grid,
  });

  const t1hItem = ncstdata?.item.find((f) => f.category === "T1H");

  // 2, 단기예보
  const { data: fcstData } = useQuery<{ item: FcstItemType[] }>({
    queryKey: ["fcstDataKey"],
    queryFn: () =>
      getFcstData({
        nx: grid!.nx,
        ny: grid!.ny,
        base_date,
        base_time,
      }),
    enabled: !!grid,
  });
  console.log(fcstData);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const gridResult = convertToGrid("toXY", latitude, longitude);
      setGrid({ nx: gridResult.nx, ny: gridResult.ny });
    });
  }, []);

  return (
    <aside className="p-10 h-full flex flex-col gap-6">
      <CurrentWeatherCard item={t1hItem} />
      <HourlyWeatherCard />
    </aside>
  );
};

export default Sidebar;
