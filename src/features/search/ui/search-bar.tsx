import Input from "@/shared/ui/input";
import { LuSearch } from "react-icons/lu";

const SearchBar = () => {
  return (
    <div>
      <Input
        placeholder="지역검색"
        className="h-14 bg-slate-100/50 border-none rounded-2xl pr-12 pl-4"
        suffix={<LuSearch size={20} className="absolute right-2 top-3" />}
      />
    </div>
  );
};

export default SearchBar;
