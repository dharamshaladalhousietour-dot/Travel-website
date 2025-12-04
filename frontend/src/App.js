// import React from "react";
// import "./App.css";
// import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Services from "./components/Services";
// import Packages from "./components/Packages";
// import TourPackages from "./components/TourPackages";
// import EventsWeddings from "./components/EventsWeddings";
// import Testimonials from "./components/Testimonials";
// import Gallery from "./components/Gallery";
// import Blog from "./components/Blog";
// import BlogPost from "./components/BlogPost";
// import BlogPreview from "./components/BlogPreview";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import WhatsAppButton from "./components/WhatsAppButton";
// import TermsConditions from "./components/TermsConditions";
// import RefundPolicy from "./components/RefundPolicy";
// import TravelInsurance from "./components/TravelInsurance";
// import PackageDetail from "./components/PackageDetail";
// import NotFound from "./components/NotFound";

// const Home = () => {
//   React.useEffect(() => {
//     // Handle hash navigation
//     const hash = window.location.hash;
//     if (hash === '#contact') {
//       setTimeout(() => {
//         const contactSection = document.getElementById('contact');
//         if (contactSection) {
//           contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
//         }
//       }, 100);
//     }
//   }, []);

//   return (
//     <div className="min-h-screen">
//       <Header />
//       <Hero />
//       <About />
//       <Services />
//       <Packages />
//       <Testimonials />
//       <Gallery />
//       <BlogPreview />
//       <Contact />
//       <Footer />
//       <WhatsAppButton />
//     </div>
//   );
// };

// // Tour Packages Page Component
// const TourPackagesPage = () => {
//   return (
//     <div className="min-h-screen">
//       <Header />
//       <TourPackages />
//       <Footer />
//       <WhatsAppButton />
//     </div>
//   );
// };

// // Events & Weddings Page Component
// const EventsWeddingsPage = () => {
//   return (
//     <div className="min-h-screen">
//       <Header />
//       <EventsWeddings />
//       <Footer />
//       <WhatsAppButton />
//     </div>
//   );
// };

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/tour-packages" element={<TourPackagesPage />} />
//           <Route path="/events-weddings" element={<EventsWeddingsPage />} />
//           <Route path="/blog" element={<><Header /><Blog /><Footer /><WhatsAppButton /></>} />
//           <Route path="/blog/:slug" element={<><Header /><BlogPost /><Footer /><WhatsAppButton /></>} />
//           <Route path="/terms-conditions" element={<><Header /><TermsConditions /><Footer /><WhatsAppButton /></>} />
//           <Route path="/refund-policy" element={<><Header /><RefundPolicy /><Footer /><WhatsAppButton /></>} />
//           <Route path="/travel-insurance" element={<><Header /><TravelInsurance /><Footer /><WhatsAppButton /></>} />
//           <Route path="/package/:packageSlug" element={<><Header /><PackageDetail /><Footer /><WhatsAppButton /></>} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;


import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContentProtection from "./components/ContentProtection";
import PayNowButton from "./components/PayNowButton";
import FloatingCTAButtons from "./components/FloatingCTAButtons";

// Lazy load components for better code splitting
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const Packages = lazy(() => import("./components/Packages"));
const TourPackages = lazy(() => import("./components/TourPackages"));
const EventsWeddings = lazy(() => import("./components/EventsWeddings"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Gallery = lazy(() => import("./components/Gallery"));
const Blog = lazy(() => import("./components/Blog"));
const BlogPost = lazy(() => import("./components/BlogPost"));
const BlogPreview = lazy(() => import("./components/BlogPreview"));
const Contact = lazy(() => import("./components/Contact"));
const TermsConditions = lazy(() => import("./components/TermsConditions"));
const RefundPolicy = lazy(() => import("./components/RefundPolicy"));
const TravelInsurance = lazy(() => import("./components/TravelInsurance"));
const PackageDetail = lazy(() => import("./components/PackageDetail"));
const NotFound = lazy(() => import("./components/NotFound"));
const FilteredPackages = lazy(() => import("./components/FilteredPackages"));

// Import AI Chatbot (not lazy loaded for instant availability)
import AIChatbot from "./components/AIChatbot";

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
  </div>
);

// Home Component with optional scrollTo section
const Home = ({ scrollTo }) => {
  React.useEffect(() => {
    if (scrollTo) {
      const section = document.getElementById(scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [scrollTo]);

  return (
    <div className="min-h-screen">
      <Header />
      <Suspense fallback={<LoadingFallback />}>
        <Hero />
        <About />
        <Services />
        <Packages />
        <Testimonials />
        <Gallery />
        <BlogPreview />
        <Contact />
      </Suspense>
      <PayNowButton />
      <Footer />
    </div>
  );
};

// Tour Packages Page
const TourPackagesPage = () => (
  <div className="min-h-screen">
    <Header />
    <Suspense fallback={<LoadingFallback />}>
      <TourPackages />
    </Suspense>
    <PayNowButton />
    <Footer />
  </div>
);

// Events & Weddings Page
const EventsWeddingsPage = () => (
  <div className="min-h-screen">
    <Header />
    <Suspense fallback={<LoadingFallback />}>
      <EventsWeddings />
    </Suspense>
    <PayNowButton />
    <Footer />
  </div>
);

// Filtered Packages Page
const FilteredPackagesPage = () => (
  <div className="min-h-screen">
    <Header />
    <Suspense fallback={<LoadingFallback />}>
      <FilteredPackages />
    </Suspense>
    <PayNowButton />
    <Footer />
  </div>
);

function App() {
  return (
    <div className="App">
      <ContentProtection />
      <FloatingCTAButtons />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home scrollTo="about" />} />
          <Route path="/services" element={<Home scrollTo="services" />} />
          <Route path="/packages" element={<FilteredPackagesPage />} />
          <Route path="/contact" element={<Home scrollTo="contact" />} />
          <Route path="/gallery" element={<Home scrollTo="gallery" />} />
          <Route path="/tour-packages" element={<TourPackagesPage />} />
          <Route path="/events-weddings" element={<EventsWeddingsPage />} />
          <Route path="/blog" element={<><Header /><Suspense fallback={<LoadingFallback />}><Blog /></Suspense><PayNowButton /><Footer /></>} />
          <Route path="/blog/:slug" element={<><Header /><Suspense fallback={<LoadingFallback />}><BlogPost /></Suspense><PayNowButton /><Footer /></>} />
          <Route path="/terms-conditions" element={<><Header /><Suspense fallback={<LoadingFallback />}><TermsConditions /></Suspense><PayNowButton /><Footer /></>} />
          <Route path="/refund-policy" element={<><Header /><Suspense fallback={<LoadingFallback />}><RefundPolicy /></Suspense><PayNowButton /><Footer /></>} />
          <Route path="/travel-insurance" element={<><Header /><Suspense fallback={<LoadingFallback />}><TravelInsurance /></Suspense><PayNowButton /><Footer /></>} />
          <Route path="/package/:packageSlug" element={<><Header /><Suspense fallback={<LoadingFallback />}><PackageDetail /></Suspense><PayNowButton /><Footer /></>} />
          <Route path="*" element={<Suspense fallback={<LoadingFallback />}><NotFound /></Suspense>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
