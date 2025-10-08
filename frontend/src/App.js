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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tour-packages" element={<TourPackages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;