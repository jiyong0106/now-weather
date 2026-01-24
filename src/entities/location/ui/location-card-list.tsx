import LocationCard from "./location-card";

interface Props {
  locations: string[];
}

const LocationCardList = ({ locations }: Props) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-4 overflow-y-auto max-h-[300px] lg:max-h-none p-5">
      {locations.map((location) => (
        <LocationCard key={location} location={location} />
      ))}
    </div>
  );
};

export default LocationCardList;
