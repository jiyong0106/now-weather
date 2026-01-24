import LocationCard from "./location-card";

interface Props {
  locations: string[];
  /** 각 카드에 주입할 액션 렌더러 */
  renderAction?: (location: string) => React.ReactNode;
}

const LocationCardList = ({ locations, renderAction }: Props) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-4 overflow-y-auto  lg:max-h-none p-5">
      {locations.map((location) => (
        <LocationCard
          key={location}
          location={location}
          action={renderAction?.(location)}
        />
      ))}
    </div>
  );
};

export default LocationCardList;
