import SearchBar from "@/features/search/ui/search-bar";
import FloatButton from "@/shared/ui/float-button";
import LocationBoard from "@/widgets/location-board/location-board";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="lg:max-w-200">
        <SearchBar />
      </div>
      <LocationBoard />
      <FloatButton className="fixed bottom-20 right-20" />
    </div>
  );
};

export default HomePage;

// position객체값
// accuracy = 정확도
// altitude = 높이
// altitudeAccuracy = 높이 정확도
// heading = 방향
// latitude = 위도
// longitude = 경도
// speed = 속도
