import React, { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import ProductSection from "./components/pages/ProductSection";
import DoctorSection from "./components/pages/DoctorSection";
import AboutSection from "./components/pages/AboutSection";
import ContactSection from "./components/pages/ContactSection";
import DepartmentSection from "./components/pages/DepartmentSection";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <HeroSection />
        <div ref={ref}>
          <ProductSection />
        </div>
        <AboutSection />
        <DepartmentSection />
        <DoctorSection />
        <ContactSection /> */}

        <Routes>
          {/* <Route path="/" element={<HeroSection />} />
          <Route path="/department-section" element={<DepartmentSection />} />
          <Route path="/about-section" element={<AboutSection />} />
          <Route path="/product-section" element={<ProductSection />} />
          <Route path="/doctor-section" element={<DoctorSection />} />
          <Route path="/contact-section" element={<ContactSection />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
