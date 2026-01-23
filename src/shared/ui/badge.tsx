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
  <div className="flex gap-2 items-center bg-white/50 px-3 py-2 rounded-2xl border border-white/20">
    <span className={`font-bold text-sm ${labelColor}`}>{label}</span>
    <span className="font-bold text-slate-700">{value}</span>
  </div>
);

export default Badge;
