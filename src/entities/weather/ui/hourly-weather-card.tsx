import CommonCard from "@/shared/ui/common-card";

const HourlyWeatherCard = () => {
  // 모의 데이터 (나중에 API 연동 예정)
  const hourlyData = [
    { time: "지금", temp: 25, icon: "☀️" },
    { time: "오후 3시", temp: 26, icon: "☀️" },
    { time: "오후 4시", temp: 26, icon: "⛅" },
    { time: "오후 5시", temp: 25, icon: "⛅" },
    { time: "오후 6시", temp: 23, icon: "☁️" },
    { time: "오후 7시", temp: 22, icon: "☁️" },
    { time: "오후 8시", temp: 21, icon: "🌙" },
    { time: "오후 9시", temp: 20, icon: "🌙" },
  ];

  return (
    <CommonCard className="flex flex-col gap-4">
      <h3 className="text-xl font-bold text-slate-800">시간대별 기온</h3>

      {/* 내부 스크롤 영역 */}
      <div className="flex flex-col gap-1 max-h-[320px] overflow-y-auto pr-2 custom-scrollbar">
        {hourlyData.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-3 border-b border-blue-100 last:border-0"
          >
            <span className="text-sm font-medium text-slate-500 w-16">
              {item.time}
            </span>
            <span className="text-2xl">{item.icon}</span>
            <span className="text-lg font-bold text-slate-800 w-16 text-right">
              {item.temp}°
            </span>
          </div>
        ))}
      </div>
    </CommonCard>
  );
};

export default HourlyWeatherCard;
