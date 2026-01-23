import Tabs from "@/shared/ui/tabs";
import LocationCardList from "@/entities/location/ui/location-card-list";
import { useMemo, useState } from "react";
import districtsData from "@/shared/api/test.json";

interface Props {}

const tabs = [
  { key: "region", label: "지역" },
  { key: "favorite", label: "즐겨찾기" },
];

const LocationBoard = () => {
  // 탭 상태
  const [currentTab, setCurrentTab] = useState("region");

  // 탭에 따른 지역 데이터 필터링
  const filterLocation = useMemo(() => {
    if (currentTab === "region") {
      return districtsData;
    }
    return [];
  }, [currentTab]);

  return (
    <div className="flex flex-col gap-4">
      <Tabs tabs={tabs} currentTab={currentTab} onTabChange={setCurrentTab} />
      <LocationCardList locations={filterLocation} />
    </div>
  );
};

export default LocationBoard;
