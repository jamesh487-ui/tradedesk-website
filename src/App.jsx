import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import FeaturesPage from "./pages/FeaturesPage"
import HowItWorksPage from "./pages/HowItWorksPage"
import PricingPage from "./pages/PricingPage"
import AboutPage from "./pages/AboutPage"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import Terms from "./pages/Terms"
import Cookies from "./pages/Cookies"
import Contact from "./pages/Contact"
import ScrollToHash from "./components/ScrollToHash"

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/support" element={<Navigate to="/features" replace />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
