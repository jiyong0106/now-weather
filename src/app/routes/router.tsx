import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@/widgets/layout/app-layout";
import HomePage from "@/pages/home/home-page";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;