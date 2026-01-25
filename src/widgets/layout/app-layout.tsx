import Header from "../header/header";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/sidebar";

const AppLayout = () => {
  return (
    <div className="min-h-dvh lg:h-dvh flex flex-col overflow-x-hidden">
      <Header />
      <div className="flex-1 flex flex-col lg:flex-row lg:overflow-hidden">
        <div className="w-full lg:w-[400px] lg:border-r border-gray-200">
          <Sidebar />
        </div>

        <main
          className="flex-1 overflow-y-auto px-6 py-8 lg:px-20 lg:py-10"
          id="scroll-root"
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;

// lg : --
// => 1024 반응형 디자인
