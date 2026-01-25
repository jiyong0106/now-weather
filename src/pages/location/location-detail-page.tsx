import { getCoordsFromAddress } from "@/entities/location/model/getCoordsFromAddress";
import { convertToGrid } from "@/entities/weather/model/convert-to-grid";
import { getFcstTime, getNcstTime } from "@/entities/weather/model/getBaseTime";
import {
  getFcstData,
  getNcstData,
} from "@/entities/weather/model/weather-apis";
import WeatherSummary from "@/widgets/weather-detail/ui/weather-summary";
import HourlyForecastGrid from "@/widgets/weather-detail/ui/hourly-forecast-grid";
import type {
  NcstItemType,
  FcstItemType,
} from "@/entities/weather/model/weather-types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const LocationDetailPage = () => {
  // LocationDetailPage.tsx 내부 예시
  const { locationName } = useParams(); // URL에서 주소 획득
  const [grid, setGrid] = useState<{ nx: number; ny: number } | null>(null);

  const ncts = getNcstTime();
  const fcst = getFcstTime();
  // 초단기 실황 (전체 데이터 조회, 쿼리키 다르게)
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
    queryKey: ["fcstDataKey", grid],
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

  // 4. 데이터 가공 (상세)
  const items = ncstdata?.item || [];
  const t1hItem = items.find((f) => f.category === "T1H"); // 기온
  const wsdItem = items.find((f) => f.category === "WSD"); // 풍속
  const rehItem = items.find((f) => f.category === "REH"); // 습도
  const ptyItem = items.find((f) => f.category === "PTY"); // 강수형태

  // 단기예보에서 최저/최고
  const tmnItem = fcstData?.item.find((f) => f.category === "TMN");
  const tmxItem = fcstData?.item.find((f) => f.category === "TMX");
  const hourlyData = fcstData?.item.filter((f) => f.category === "TMP") ?? [];

  // 통합 데이터 객체 (UI에 전달할 형태)
  const weatherSummary = {
    temp: t1hItem?.obsrValue,
    wind: wsdItem?.obsrValue,
    humidity: rehItem?.obsrValue,
    rainType: ptyItem?.obsrValue,
    min: tmnItem?.fcstValue,
    max: tmxItem?.fcstValue,
  };

  useEffect(() => {
    const fetchLocationWeather = async () => {
      try {
        //  카카오 API로 위경도 따기
        const coords = await getCoordsFromAddress(locationName!);

        if (coords) {
          //  기상청 격자로 변환
          const gridResult = convertToGrid("toXY", coords.lat, coords.lng);
          setGrid({ nx: gridResult.nx, ny: gridResult.ny });
        }
      } catch (error) {
        console.error("날씨 로드 실패:", error);
      }
    };
    if (locationName) fetchLocationWeather();
  }, [locationName]);

  return (
    <div className="flex flex-col gap-6 p-6 max-w-3xl mx-auto pb-24">
      <WeatherSummary data={weatherSummary} locationName={locationName || ""} />
      <HourlyForecastGrid items={hourlyData} />
    </div>
  );
};

export default LocationDetailPage;
