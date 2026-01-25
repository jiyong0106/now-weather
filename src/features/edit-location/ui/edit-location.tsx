import { useFavoriteStore } from "@/features/toggle-favorite/model/use-favorite-store";
import { LuPencil } from "react-icons/lu";

/**
 * 즐겨찾기 별칭 수정 컴포넌트
 */
interface Props {
  location: string;
}

const EditLocation = ({ location }: Props) => {
  const setNickname = useFavoriteStore((state) => state.setNickname);

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    const currentName =
      useFavoriteStore.getState().nicknames[location] || location;
    const newName = window.prompt(
      `'${currentName}'의 새로운 별칭을 입력하세요`,
    );

    if (newName && newName.trim()) {
      setNickname(location, newName);
    }
  };

  return (
    <button
      onClick={handleEdit}
      className="hover:text-blue-600 transition-colors p-1"
      title="이름 수정"
    >
      <LuPencil size={20} />
    </button>
  );
};

export default EditLocation;
