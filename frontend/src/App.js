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
import PackageDetail from "./components/PackageDetail";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

// Events & Weddings CTA Section Component
const EventsWeddingsCta = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Dream Weddings & Corporate Events
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          From Himalayan ceremonies to Rajasthani royal weddings, we create unforgettable moments
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="/events-weddings"
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            💒 Plan Your Wedding
          </a>
          <a
            href="https://wa.me/918679333355?text=Hello!%20I%20want%20to%20plan%20a%20wedding%20or%20event.%20Please%20help%20me."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            🎉 Corporate Events
          </a>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Packages />
      <EventsWeddingsCta />
      <Testimonials />
      <Gallery />
      <Blog />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

// Layout component for other pages
const PageLayout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
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
          <Route path="/tour-packages" element={<PageLayout><TourPackages /></PageLayout>} />
          <Route path="/events-weddings" element={<PageLayout><EventsWeddings /></PageLayout>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;