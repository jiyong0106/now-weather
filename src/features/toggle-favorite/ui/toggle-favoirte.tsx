import { useState } from "react";
import { GoStar, GoStarFill } from "react-icons/go";

interface Props {}

const ToggleFavorite = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggle = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <button type="button" onClick={handleToggle}>
      {isFavorite ? (
        <GoStarFill size={20} fill="#ffd94d" />
      ) : (
        <GoStar size={20} />
      )}
    </button>
  );
};

export default ToggleFavorite;
