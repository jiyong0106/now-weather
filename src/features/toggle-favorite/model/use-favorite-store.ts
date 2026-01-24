import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoriteType {
  favorites: string[];
  toggleFavorite: (location: string) => void;
}

export const useFavoriteStore = create<FavoriteType>()(
  persist(
    (set) => ({
      // 즐겨찾기 담을 배열
      favorites: [],
      // location을 인자로 받음
      toggleFavorite: (location) =>
        // state=>favorite, toggleFovorite 담고있는 객체
        set((state) => {
          // 현재 location이 즐겨찾기 배열에 이미 있는지
          const isExist = state.favorites.includes(location);

          // 1. 이미 있으면 제거
          if (isExist) {
            return { favorites: state.favorites.filter((f) => f !== location) };
          }
          console.log(isExist);

          // 2. 없으면 추가 (최대 6개 제한)
          if (state.favorites.length >= 6) {
            alert("즐겨찾기는 최대 6개까지만 가능합니다");
            return state;
          }

          // ...state.favorites 기존 데이터 + 새 데이터
          return { favorites: [...state.favorites, location] };
        }),
    }),
    // storoage key name
    { name: "favorite-storage" },
  ),
);
