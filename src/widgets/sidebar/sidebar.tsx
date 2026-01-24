import CurrentWeatherCard from "@/entities/weather/ui/current-weather-card";
import HourlyWeatherCard from "@/entities/weather/ui/hourly-weather-card";
import { useEffect, useState } from "react";
import { convertToGrid } from "@/entities/weather/model/convert-to-grid";
import { useQuery } from "@tanstack/react-query";
import {
  getNcstData,
  getFcstData,
} from "@/entities/weather/model/weather-apis";
import type {
  NcstItemType,
  FcstItemType,
} from "@/entities/weather/model/weather-types";
import { getFcstTime, getNcstTime } from "@/entities/weather/model/getBaseTime";

const Sidebar = () => {
  // lat 위도 lon 경도
  const [grid, setGrid] = useState<{ nx: number; ny: number } | null>(null);
  // 정각에 데이터 안나오는걸 대비해서 여유롭게 현재 시간에서 -10분
  const ncts = getNcstTime();
  const fcst = getFcstTime();
  // 1. 초단기 실황
  const { data: ncstdata } = useQuery<{ item: NcstItemType[] }>({
    queryKey: ["ncstDataKey", grid],
    queryFn: () =>
      getNcstData({
        nx: grid!.nx,
        ny: grid!.ny,
        base_date: ncts.baseDate,
        base_time: ncts.baseTime,
      }),
    enabled: !!grid,
  });

  // 2, 단기예보
  const { data: fcstData } = useQuery<{ item: FcstItemType[] }>({
    queryKey: ["fcstDataKey"],
    queryFn: () =>
      getFcstData({
        nx: grid!.nx,
        ny: grid!.ny,
        base_date: fcst.baseDate,
        base_time: fcst.baseTime,
        numOfRows: 290,
      }),
    enabled: !!grid,
  });

  // 1. 초단기실황에서 현재 기온(T1H) 찾기
  const t1hItem = ncstdata?.item.find((f) => f.category === "T1H");
  // 2. 단기예보에서 최저기온(TMN) 찾기
  const tmnItem = fcstData?.item.find((f) => f.category === "TMN");
  // 3. 단기예보에서 최고기온(TMX) 찾기
  const tmxItem = fcstData?.item.find((f) => f.category === "TMX");

  const combinedWeather = {
    current: t1hItem,
    min: tmnItem,
    max: tmxItem,
  };

  // 시간대별은
  // 카테고리가 TMP 인것만

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const gridResult = convertToGrid("toXY", latitude, longitude);
      setGrid({ nx: gridResult.nx, ny: gridResult.ny });
    });
  }, []);

  return (
    <aside className="p-10 h-full flex flex-col gap-6">
      <CurrentWeatherCard item={combinedWeather} />
      <HourlyWeatherCard />
    </aside>
  );
};

export default Sidebar;
