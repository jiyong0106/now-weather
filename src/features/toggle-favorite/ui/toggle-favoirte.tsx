import { GoStar, GoStarFill } from "react-icons/go";
import { useFavoriteStore } from "../model/use-favorite-store";

/**
 * 즐겨찾기 버튼 컴포넌트
 */
interface Props {
  data: string;
}

const ToggleFavorite = ({ data }: Props) => {
  const favorites = useFavoriteStore((s) => s.favorites);
  const toggleFavorite = useFavoriteStore((s) => s.toggleFavorite);

  // 현재 이 카드가 즐겨찾기 상태인지 확인
  const isFavorite = favorites.includes(data);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(data);
  };

  return (
    <button onClick={handleToggle}>
      {isFavorite ? (
        <GoStarFill color="#ffd94d" size={20} />
      ) : (
        <GoStar size={20} />
      )}
    </button>
  );
};

export default ToggleFavorite;
