import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@/widgets/layout/app-layout";
import HomePage from "@/pages/home/home-page";
import LocationDetailPage from "@/pages/location/location-detail-page";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="location/:id" element={<LocationDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
