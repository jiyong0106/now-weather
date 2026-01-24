/**
 * @description 뱃지 컴포넌트
 * @param label 뱃지의 라벨
 * @param value 뱃지의 값
 * @param labelColor 뱃지의 라벨 색상
 */

interface Props {
  label: string;
  value: string | number;
  labelColor: string;
}

const Badge = ({ label, value, labelColor }: Props) => (
  <div className="flex gap-2 items-center bg-white px-3 py-2 rounded-xl ">
    <span className={`font-bold text-xl ${labelColor}`}>{label}</span>
    <span className="font-bold text-2xl">{value}</span>
  </div>
);

export default Badge;
