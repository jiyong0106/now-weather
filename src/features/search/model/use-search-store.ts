import { create } from "zustand";
/**
 * 검색어 전역 상태관리
 */

interface SearchType {
  searchValue: string;
  setSearchValue: (text: string) => void;
}

const useSearchStore = create<SearchType>((set) => ({
  searchValue: "",
  setSearchValue: (text: string) => set({ searchValue: text }),
}));

export default useSearchStore;
