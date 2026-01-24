import CommonCard from "@/shared/ui/common-card";

interface Props {
  location: string;
  /** FSD Slot: 카드 우측에 표시할 액션 요소들 */
  action?: React.ReactNode;
}

const LocationCard = ({ location, action }: Props) => {
  const handleClick = () => console.log(`${location} 상세페이지 이동`);

  return (
    <CommonCard
      onClick={handleClick}
      className="flex items-center justify-between bg-[#E0F2FF] rounded-xl p-5 hover:scale-[1.02] transition-all cursor-pointer"
    >
      <h3 className="text-xl font-bold">{location}</h3>
      <div className="flex items-center gap-2">{action}</div>
    </CommonCard>
  );
};

export default LocationCard;
