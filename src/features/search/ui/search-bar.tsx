import Input from "@/shared/ui/input";
import { LuSearch } from "react-icons/lu";

const SearchBar = () => {
  return (
    <Input
      placeholder="지역 검색"
      className="h-18 bg-slate-100/50 border-none rounded-xl pr-12 pl-4"
      suffix={<LuSearch size={20} className="absolute right-4 top-4" />}
    />
  );
};

export default SearchBar;
