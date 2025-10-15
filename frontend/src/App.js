import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Packages from "./components/Packages";
import TourPackages from "./components/TourPackages";
import EventsWeddings from "./components/EventsWeddings";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import TermsConditions from "./components/TermsConditions";
import RefundPolicy from "./components/RefundPolicy";
import TravelInsurance from "./components/TravelInsurance";
import PackageDetail from "./components/PackageDetail";
import NotFound from "./components/NotFound";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Packages />
      <Testimonials />
      <Gallery />
      <Blog />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

// Tour Packages Page Component
const TourPackagesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <TourPackages />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

// Events & Weddings Page Component
const EventsWeddingsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <EventsWeddings />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tour-packages" element={<TourPackagesPage />} />
          <Route path="/events-weddings" element={<EventsWeddingsPage />} />
          <Route path="/terms-conditions" element={<><Header /><TermsConditions /><Footer /><WhatsAppButton /></>} />
          <Route path="/refund-policy" element={<><Header /><RefundPolicy /><Footer /><WhatsAppButton /></>} />
          <Route path="/travel-insurance" element={<><Header /><TravelInsurance /><Footer /><WhatsAppButton /></>} />
          <Route path="/package/:packageSlug" element={<><Header /><PackageDetail /><Footer /><WhatsAppButton /></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;