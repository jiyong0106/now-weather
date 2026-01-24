import Tabs from "@/shared/ui/tabs";
import LocationCardList from "@/entities/location/ui/location-card-list";
import { useEffect, useMemo, useRef, useState } from "react";
import districtsData from "@/shared/api/test.json";

const tabs = [
  { key: "region", label: "지역" },
  { key: "favorite", label: "즐겨찾기" },
];

const LocationBoard = () => {
  // 탭 상태
  const ref = useRef(null);
  const [currentTab, setCurrentTab] = useState<string>("region");
  // 한번에 자를 데이터의 수
  const [limit, setLimit] = useState<number>(100);

  // 지역 탭에 대한 데이터만 가져오기
  const filterLocationData = useMemo(() => {
    if (currentTab === "region") {
      return districtsData.slice(0, limit);
    }
    return [];
  }, [currentTab, limit]);

  useEffect(() => {
    // 1. Intersection Observer 선언
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 처음에 80개 렌더링
            setLimit((prev) => {
              // 이전값이 데이터 갯수보다 크거나 같으면 이전값 유지
              if (prev >= districtsData.length) return prev;
              // 아닐경우 +80
              return prev + 50;
            });
          }
        });
      },
      {
        root: document.getElementById("scroll-root"),
        rootMargin: "0px",
        threshold: 0.1,
      },
    );
    // 2. ref가 dom과 연결되었으면 관찰 대상으로 등록
    if (ref.current) {
      io.observe(ref.current);
    }
    // 3. 컴포넌트가 사라질 때 Observer 정리
    return () => io.disconnect();
  }, []);

  // new IntersectionObserver(callback, options);
  // callback => 첫번째 인자
  // =>callback (entries, observer)
  // =>entries
  // =>isIntersecting (대상 요소가 루트와 교차하는지)

  // opions => 두번째인자, IntersectionObserver() 생성자에 전달되는 options 객체
  // 콜백이 언제 호출되는지를 제어
  // root => 대상 가시성 체클르 위한 뷰포트로 사용, 반드시 상위 요소
  // rootmargin => 루트 주위의 여백
  // threshold => 임계점, 즉 어디까지 보여야 다음 데이터가 보이나

  // data에서 slice로 한번에 80개씩 불러오기,

  return (
    <div className="bg-red-400">
      <Tabs tabs={tabs} currentTab={currentTab} onTabChange={setCurrentTab} />
      <LocationCardList locations={filterLocationData} />
      <div ref={ref} />
    </div>
  );
};

export default LocationBoard;
