import { useFavoriteStore } from "@/features/toggle-favorite/model/use-favorite-store";
import CommonCard from "@/shared/ui/common-card";
import { useNavigate } from "react-router-dom";

interface Props {
  location: string;
  action?: React.ReactNode;
}

const LocationCardItem = ({ location, action }: Props) => {
  const navigate = useNavigate();
  const nicknames = useFavoriteStore((state) => state.nicknames);
  // 별칭이 있으면 별칭 사용
  const displayName = nicknames[location] || location;

  const handleClick = () => navigate(`/location/${location}`);

  return (
    <CommonCard
      onClick={handleClick}
      className="flex items-center justify-between bg-[#E0F2FF] rounded-xl p-5 hover:scale-[1.02] transition-all cursor-pointer"
    >
      <h3 className="text-xl font-bold">{displayName}</h3>
      <div className="flex items-center gap-2">{action}</div>
    </CommonCard>
  );
};

export default LocationCardItem;
