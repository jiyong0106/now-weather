import CommonCard from "@/shared/ui/common-card";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <CommonCard className="flex flex-col items-center gap-6 p-10 text-center">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-6xl font-bold text-blue-500">404</h1>
          <h2 className="text-2xl font-bold">페이지를 찾을 수 없습니다</h2>
        </div>

        <Link
          to="/"
          className="px-6 py-3 bg-blue-500 text-white rounded-xl text-2xl"
        >
          홈으로 돌아가기
        </Link>
      </CommonCard>
    </div>
  );
};

export default NotFoundPage;
