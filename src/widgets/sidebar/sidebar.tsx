import CurrentWeatherCard from "@/entities/weather/ui/current-weather-card";
import HourlyWeatherLists from "@/entities/weather/ui/hourly-weather-Lists";
import { useEffect, useState } from "react";
import { convertToGrid } from "@/entities/weather/model/convert-to-grid";
import { useQuery } from "@tanstack/react-query";
import {
  getNcstData,
  getFcstData,
} from "@/entities/weather/model/weather-apis";
import type { FcstItemType } from "@/entities/weather/model/weather-types";
import {
  getFcstTime,
  getNcstTime,
  getDailyBaseTime,
} from "@/entities/weather/lib/getBaseTime";
import { getAddressFromCoords } from "@/entities/location/model/getAddressFromCoords";

const Sidebar = () => {
  // lat 위도 lon 경도
  const [grid, setGrid] = useState<{ nx: number; ny: number } | null>(null);
  const [location, setLocation] = useState<string>("");

  // 정각에 데이터 안나오는걸 대비해서 여유롭게 현재 시간에서 -10분
  const ncts = getNcstTime();
  const fcst = getFcstTime();
  const daily = getDailyBaseTime();

  // 1. 초단기 실황
  const { data: ncstdata } = useQuery({
    queryKey: ["currentData", "ncst", grid],
    queryFn: () =>
      getNcstData({
        nx: grid!.nx,
        ny: grid!.ny,
        base_date: ncts.baseDate,
        base_time: ncts.baseTime,
      }),
    enabled: !!grid,
    select: (data) => data.item.find((f) => f.category === "T1H"),
  });

  // 2. 단기예보 (시간대별 - 최신 기준)
  const { data: fcstData } = useQuery<{ item: FcstItemType[] }>({
    queryKey: ["currentData", "fcst", grid],
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

  // 3.  단기예보 / 일일 최고, 최저기온 (일일 요약 - 02:00 기준)
  const { data: dailyFcstData } = useQuery<{ item: FcstItemType[] }>({
    queryKey: ["currentData", "dailyFcst", grid],
    queryFn: () =>
      getFcstData({
        nx: grid!.nx,
        ny: grid!.ny,
        base_date: daily.baseDate,
        base_time: daily.baseTime,
        numOfRows: 290,
      }),
    enabled: !!grid,
  });

  //  데이터 가공
  // 단기예보에서 최저/최고
  const tmnItem = dailyFcstData?.item.find((f) => f.category === "TMN");
  const tmxItem = dailyFcstData?.item.find((f) => f.category === "TMX");
  // 3. 데이터 합치기
  const combinedWeather = {
    temp: ncstdata?.obsrValue,
    min: tmnItem?.fcstValue,
    max: tmxItem?.fcstValue,
  };

  const hourlyData = fcstData?.item.filter((f) => f.category === "TMP") ?? [];

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      const gridResult = convertToGrid("toXY", latitude, longitude);
      setGrid({ nx: gridResult.nx, ny: gridResult.ny });

      // 주소 변환
      const addressData = await getAddressFromCoords(latitude, longitude);
      if (addressData) setLocation(addressData);
    });
  }, []);

  return (
    <aside className="p-10 h-full flex flex-col gap-6">
      <CurrentWeatherCard items={combinedWeather} location={location} />
      <HourlyWeatherLists items={hourlyData} />
    </aside>
  );
};

export default Sidebar;
