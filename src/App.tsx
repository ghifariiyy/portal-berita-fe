
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddNews from "./pages/AddNews";
import EditNews from "./pages/EditNews";
import NewsDetail from "./pages/NewsDetail";
import CategoryPage from "./pages/CategoryPage";
import TrendingPage from "./pages/TrendingPage";
import LeaguePage from "./pages/LeaguePage";
import TentangKami from "./pages/TentangKami";
import HubungiKami from "./pages/HubungiKami";
import KebijakanPrivasi from "./pages/KebijakanPrivasi";
import SyaratDanKetentuan from "./pages/SyaratDanKetentuan";
import Karir from "./pages/Karir";
import Iklan from "./pages/Iklan";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-news" element={<AddNews />} />
          <Route path="/edit-news/:id" element={<EditNews />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/kategori/:category" element={<CategoryPage />} />
          <Route path="/trending/:slug" element={<TrendingPage />} />
          <Route path="/liga/:league" element={<LeaguePage />} />
          
          {/* Static Pages - Quick Links */}
          <Route path="/tentang-kami" element={<TentangKami />} />
          <Route path="/hubungi-kami" element={<HubungiKami />} />
          <Route path="/kebijakan-privasi" element={<KebijakanPrivasi />} />
          <Route path="/syarat-dan-ketentuan" element={<SyaratDanKetentuan />} />
          <Route path="/karir" element={<Karir />} />
          <Route path="/iklan" element={<Iklan />} />
          
          {/* Static Pages - Footer Links */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
