import WeatherIcon from "./weather-icon";

/**
 * 날씨정보 상세 내용 넣는 컴포넌트 (풍속,습도,강수,풍향,날씨 등)
 */

interface Props {
  label: string;
  value: string;
  icon?: React.ReactNode;
  skyCode?: string; // 하늘상태 (있으면 날씨 아이콘 표시)
  ptyCode?: string; // 강수형태 (있으면 날씨 아이콘 표시)
}

const WeatherInfoCard = ({ label, value, icon, skyCode, ptyCode }: Props) => {
  // skyCode와 ptyCode가 있으면 날씨 아이콘 표시
  let displayIcon = icon;
  if (skyCode && ptyCode) {
    displayIcon = (
      <WeatherIcon skyCode={skyCode} ptyCode={ptyCode} className="text-4xl" />
    );
  }

  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-2xl py-4 gap-3">
      <span className="text-xl ">{label}</span>
      <div className="flex justify-center items-center gap-2">
        {displayIcon}
        <span className="text-2xl font-bold">{value}°</span>
      </div>
    </div>
  );
};

export default WeatherInfoCard;
