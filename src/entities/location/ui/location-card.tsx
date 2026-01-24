import CommonCard from "@/shared/ui/common-card";
import { useNavigate } from "react-router-dom";

interface Props {
  location: string;
  action?: React.ReactNode;
}

const LocationCard = ({ location, action }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(`/location/${location}`);

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
