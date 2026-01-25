import LocationCardItem from "./location-card-item";

interface Props {
  locations: string[];
  // 각 카드에 주입할 액션 렌더
  renderAction?: (location: string) => React.ReactNode;
}

const LocationCardLists = ({ locations, renderAction }: Props) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-4 overflow-y-auto  lg:max-h-none p-5">
      {locations.map((location) => (
        <LocationCardItem
          key={location}
          location={location}
          action={renderAction?.(location)}
        />
      ))}
    </div>
  );
};

export default LocationCardLists;
