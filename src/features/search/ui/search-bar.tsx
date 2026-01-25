import Input from "@/shared/ui/input";
import { LuSearch } from "react-icons/lu";
import useSearchStore from "../model/use-search-store";
import debounce from "lodash/debounce";
import { useMemo } from "react";

/**
 * 검색어 입력 컴포넌트
 */
const SearchBar = () => {
  const { setSearchValue } = useSearchStore();

  // lodash를 사용한 debounce 입력
  const debouncedSetSearch = useMemo(
    () => debounce((value: string) => setSearchValue(value), 300),
    [setSearchValue],
  );

  return (
    <Input
      placeholder="지역 검색"
      className="h-18 bg-slate-100/50 border-none rounded-xl pr-12 pl-4"
      onChange={(e) => debouncedSetSearch(e.target.value)}
      suffix={<LuSearch size={20} className="absolute right-4 top-4" />}
    />
  );
};

export default SearchBar;
