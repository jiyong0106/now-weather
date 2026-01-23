import CurrentWeatherCard from "@/entities/weather/ui/current-weather-card";
import HourlyWeatherCard from "@/entities/weather/ui/hourly-weather-card";

const Sidebar = () => {
  return (
    <aside className="p-10 h-full flex flex-col gap-6">
      <CurrentWeatherCard />
      <HourlyWeatherCard />
    </aside>
  );
};

export default Sidebar;
