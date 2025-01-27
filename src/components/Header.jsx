import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import HeroSection from "./HeroSection";
import ProductSection from "./pages/ProductSection";
import AboutSection from "./pages/AboutSection";
import DepartmentSection from "./pages/DepartmentSection";
import DoctorSection from "./pages/DoctorSection";
import ContactSection from "./pages/ContactSection";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const heroRef = useRef(null);
  const productRef = useRef(null);
  const aboutRef = useRef(null);
  const departmentRef = useRef(null);
  const doctorRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto py-4 flex justify-evenly items-center">
          <h1 className="text-3xl font-bold text-blue-800">Medi Care</h1>

          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-blue-800 hover:text-blue-500"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex uppercase text-sm">
            <ul className="flex space-x-6 text-blue-800 font-medium">
              <li>
                <Link
                  to="/"
                  onClick={() => scrollToSection(heroRef)}
                  className="hover:text-blue-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/department-section"
                  onClick={() => scrollToSection(departmentRef)}
                  className="hover:text-blue-500"
                >
                  Departments
                </Link>
              </li>
              <li>
                <Link
                  to="/about-section"
                  onClick={() => scrollToSection(aboutRef)}
                  className="hover:text-blue-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/product-section"
                  onClick={() => scrollToSection(productRef)}
                  className="hover:text-blue-500"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/doctor-section"
                  onClick={() => scrollToSection(doctorRef)}
                  className="hover:text-blue-500"
                >
                  Doctors
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-section"
                  onClick={() => scrollToSection(contactRef)}
                  className="hover:text-blue-500"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <nav className="lg:hidden absolute top-0 left-0 w-full bg-white shadow-md p-6">
              <ul className="space-y-4 text-center text-blue-800 font-medium">
                <li>
                  <Link
                    to="/"
                    onClick={() => scrollToSection(heroRef)}
                    className="hover:text-blue-500"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/department-section"
                    onClick={() => scrollToSection(departmentRef)}
                    className="hover:text-blue-500"
                  >
                    Departments
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-section"
                    onClick={() => scrollToSection(aboutRef)}
                    className="hover:text-blue-500"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/product-section"
                    onClick={() => scrollToSection(productRef)}
                    className="hover:text-blue-500"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/doctor-section"
                    onClick={() => scrollToSection(doctorRef)}
                    className="hover:text-blue-500"
                  >
                    Doctors
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-section"
                    onClick={() => scrollToSection(contactRef)}
                    className="hover:text-blue-500"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>

      {/* Sections */}
      <div ref={heroRef}>
        <HeroSection />
      </div>

      <div ref={productRef}>
        <ProductSection />
      </div>
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      {/* <div ref={departmentRef}>
        <DepartmentSection />
      </div>
      <div ref={doctorRef}>
        <DoctorSection />
      </div> */}
      <div ref={contactRef}>
        <ContactSection />
      </div>
    </>
  );
};

export default Header;
