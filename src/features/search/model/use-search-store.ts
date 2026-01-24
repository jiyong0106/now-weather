import { create } from "zustand";
/**
 * searchbar 전역 상태관리
 */

interface Props {
  searchValue: string;
  setSearchValue: (text: string) => void;
}

const useSearchStore = create<Props>((set) => ({
  searchValue: "",
  setSearchValue: (text: string) => set({ searchValue: text }),
}));

export default useSearchStore;
