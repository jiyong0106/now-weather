import Tabs from "@/shared/ui/tabs";
import LocationCardList from "@/entities/location/ui/location-card-list";
import { useState } from "react";

interface Props {}

const tabs = [
  { key: "region", label: "지역" },
  { key: "favorite", label: "즐겨찾기" },
];

const LocationBoard = () => {
  const [currentTab, setCurrentTab] = useState("region");

  return (
    <div className="flex flex-col gap-4">
      <Tabs tabs={tabs} currentTab={currentTab} onTabChange={setCurrentTab} />
      <LocationCardList />
    </div>
  );
};

export default LocationBoard;
