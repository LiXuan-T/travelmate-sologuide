import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AiFeed from "./pages/AiFeed";
import TripPlanning from "./pages/TripPlanning";
import LocationSharing from "./pages/LocationSharing";
import Emergency from "./pages/Emergency";
import TravelDiary from "./pages/TravelDiary";
import SocialMatching from "./pages/SocialMatching";
import AIAssistant from "./pages/AIAssistant";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<AiFeed />} />
            <Route path="/planning" element={<TripPlanning />} />
            <Route path="/location" element={<LocationSharing />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/diary" element={<TravelDiary />} />
            <Route path="/matching" element={<SocialMatching />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;