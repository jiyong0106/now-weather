import LocationCard from "./location-card";

interface Props {}

const LocationCardList = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
      <LocationCard />
    </div>
  );
};

export default LocationCardList;

// grid-template-columns: repeat(5, 1fr);
