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
