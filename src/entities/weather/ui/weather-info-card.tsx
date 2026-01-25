/**
 * 날씨정보 상세 내용 넣는 컴포넌트 (풍속,습도,강수,풍향,날씨 등)
 */

interface Props {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

const WeatherInfoCard = ({ label, value, icon }: Props) => (
  <div className="flex flex-col items-center justify-center bg-white rounded-2xl py-4 gap-3">
    <span className="text-xl ">{label}</span>
    <div className="flex items-center gap-2">
      {icon}
      <span className="text-2xl font-bold">{value}</span>
    </div>
  </div>
);

export default WeatherInfoCard;
