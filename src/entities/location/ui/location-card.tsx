import ToggleFavorite from "@/features/toggle-favorite/ui/toggle-favoirte";
import CommonCard from "@/shared/ui/common-card";

interface Props {}

const LocationCard = () => {
  return (
    <CommonCard className="flex items-center justify-between bg-[#E0F2FF] rounded-xl p-5 hover:scale-[1.02]  cursor-pointer">
      <h3 className="text-xl font-bold whitespace-nowrap truncate mr-4">
        서울특별시 종로구 청운동
      </h3>
      <div className="shrink-0">
        <ToggleFavorite />
      </div>
    </CommonCard>
  );
};

export default LocationCard;
