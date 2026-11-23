import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";

const HistoryPage = lazy(() => import("../pages/HistoryPage"));
const RoutesPage = lazy(() => import("../pages/RoutesPage"));
const HorseTramPage = lazy(() => import("../pages/history/HorseTramPage"));
const SteamTramPage = lazy(() => import("../pages/history/SteamTramPage"));
const PetrolTramPage = lazy(() => import("../pages/history/PetrolTramPage"));
const RollingStockPage = lazy(() => import("../pages/RollingStockPage"));
const ArchivePage = lazy(() => import("../pages/ArchivePage"));
const MemoriesPage = lazy(() => import("../pages/MemoriesPage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const PrivacyPage = lazy(() => import("../pages/PrivacyPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const AppRoutes = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/history/horse" element={<HorseTramPage />} />
        <Route path="/history/steam" element={<SteamTramPage />} />
        <Route path="/history/petrol" element={<PetrolTramPage />} />
        <Route path="/routes" element={<RoutesPage />} />
        <Route path="/rolling-stock" element={<RollingStockPage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/memories" element={<MemoriesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;