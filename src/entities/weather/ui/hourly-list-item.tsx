import type { FcstItemType } from "../model/weather-types";

/**
 * 시간대별 기온을 보여주는 리스트 단일 컴포넌트
 */

interface Props {
  item: FcstItemType;
}

const HourlyListItem = ({ item }: Props) => {
  const formattedTime = `${item.fcstTime.slice(0, 2)}시`;

  return (
    <div className="flex items-center justify-between py-3 border-b border-blue-100  px-1 ">
      <span className="text-xl w-20">{formattedTime}</span>
      {/*  아이콘(SKY, PTY) 추가 예정 */}
      <span className="text-2xl">☀️</span>
      <span className="text-2xl font-bold  text-right w-20">
        {item.fcstValue}°
      </span>
    </div>
  );
};

export default HourlyListItem;
