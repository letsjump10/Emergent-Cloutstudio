import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { HelmetProvider } from "react-helmet-async";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import About from "./pages/About";
import Work from "./pages/Work";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Contact from "./pages/Contact";

// Layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileCtaBar from "./components/MobileCtaBar";

function App() {
  return (
    <HelmetProvider>
      <div className="App min-h-screen bg-[#030303] text-white">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:caseStudySlug" element={<CaseStudyDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <MobileCtaBar />
          <Toaster position="top-right" theme="dark" />
        </BrowserRouter>
      </div>
    </HelmetProvider>
  );
}

export default App;
