import ToggleFavorite from "@/features/toggle-favorite/ui/toggle-favoirte";
import CommonCard from "@/shared/ui/common-card";

interface Props {}

const LocationCard = () => {
  return (
    <CommonCard className="relative flex flex-col items-start justify-end min-h-[160px] !bg-[#E0F2FF] !rounded-[32px] p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20 group">
      {/* 즐겨찾기 버튼 - 우측 상단 배치 */}
      <div className="absolute top-6 right-6">
        <ToggleFavorite />
      </div>
      <h3 className="text-2xl font-bold">서울특별시 종로구 청운동</h3>
    </CommonCard>
  );
};

export default LocationCard;
