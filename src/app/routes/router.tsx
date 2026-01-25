import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/home/home-page";
import LocationDetailPage from "@/pages/location/location-detail-page";
import AppLayout from "@/widgets/layout/ui/app-layout";
import NotFoundPage from "@/pages/not-found-page/not-found-page";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="location/:locationName"
            element={<LocationDetailPage />}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
