import {
  WiDaySunny,
  WiCloud,
  WiDayCloudy,
  WiRain,
  WiSnow,
  WiSleet,
} from "react-icons/wi";

/**
 * 날씨 아이콘 컴포넌트
 * skyCode: 하늘상태 (1:맑음, 3:구름많음, 4:흐림)
 * ptyCode: 강수형태 (0:없음, 1:비, 2:비/눈, 3:눈, 5:빗방울, 6:빗방울눈날림, 7:눈날림)
 */
interface Props {
  skyCode?: string;
  ptyCode?: string;
  className?: string;
}

const WeatherIcon = ({
  skyCode = "1",
  ptyCode = "0",
  className = "",
}: Props) => {
  // 1. 비나 눈이 오는 경우 (강수형태가 우선)
  if (ptyCode !== "0") {
    if (ptyCode === "1" || ptyCode === "5") {
      // 비, 빗방울
      return <WiRain className={`text-blue-500 ${className}`} />;
    }
    if (ptyCode === "3" || ptyCode === "7") {
      // 눈, 눈날림
      return <WiSnow className={`text-sky-300 ${className}`} />;
    }
    if (ptyCode === "2" || ptyCode === "6") {
      // 비/눈, 빗방울눈날림
      return <WiSleet className={`text-blue-300 ${className}`} />;
    }
  }

  // 2. 강수가 없을 때는 하늘 상태로 결정
  if (skyCode === "1") {
    // 맑음
    return <WiDaySunny className={`text-orange-500 ${className}`} />;
  }
  if (skyCode === "3") {
    // 구름많음
    return <WiDayCloudy className={`text-gray-400 ${className}`} />;
  }
  if (skyCode === "4") {
    // 흐림
    return <WiCloud className={`text-gray-500 ${className}`} />;
  }

  // 기본값 (맑음)
  return <WiDaySunny className={`text-orange-500 ${className}`} />;
};

export default WeatherIcon;
