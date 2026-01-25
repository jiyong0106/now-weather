interface WeatherSummaryData {
  temp?: string;
  wind?: string;
  humidity?: string;
  rainType?: string;
  min?: string;
  max?: string;
}

interface Props {
  data: WeatherSummaryData;
  locationName: string;
}

const WeatherSummary = ({ data, locationName }: Props) => {
  const { temp, wind, humidity, rainType, min, max } = data;

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-8 bg-[#E0F2FF] rounded-3xl w-full text-center shadow-sm">
      {/* 1. 지역 이름 및 메인 기온 섹션 */}
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-2xl font-bold text-slate-800">
          {locationName || "위치 정보 없음"}
        </h2>

        <div className="flex items-start justify-center pl-4">
          <span className="text-8xl font-light tracking-tighter text-slate-900">
            {temp ?? "--"}
          </span>
          <span className="text-4xl font-normal text-slate-600 mt-2">°C</span>
        </div>

        <div className="flex gap-4 text-lg font-medium text-slate-600">
          <span>
            최고 <span className="text-slate-800">{max ?? "--"}°</span>
          </span>
          <span className="text-slate-300">|</span>
          <span>
            최저 <span className="text-slate-800">{min ?? "--"}°</span>
          </span>
        </div>
      </div>

      {/* 2. 하단 상세 정보 타일 (풍속/습도/강수) */}
      <div className="grid grid-cols-3 gap-3 w-full px-4 mt-2">
        <DetailTile label="풍속" value={`${wind ?? "-"} m/s`} />
        <DetailTile label="습도" value={`${humidity ?? "-"} %`} />
        <DetailTile label="강수" value={rainType === "0" ? "없음" : "비/눈"} />
      </div>
    </div>
  );
};

const DetailTile = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col items-center justify-center bg-white/60 rounded-2xl py-4 gap-1">
    <span className="text-sm font-bold text-slate-500">{label}</span>
    <span className="text-lg font-bold text-slate-800">{value}</span>
  </div>
);

export default WeatherSummary;
