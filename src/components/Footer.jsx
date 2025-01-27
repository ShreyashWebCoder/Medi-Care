import React from "react";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Reach Us</h3>
              <address className="not-italic">
                <p>123 Medical Center Drive</p>
                <p>Healthcare City, HC 12345</p>
                <p>Phone: (123) 456-7890</p>
                <p>Email: info@medicare.com</p>
              </address>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about-section" className="hover:text-blue-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/doctor-section" className="hover:text-blue-300">
                    Our Doctors
                  </Link>
                </li>
                <li>
                  <Link
                    to="/department-section"
                    className="hover:text-blue-300"
                  >
                    Departments
                  </Link>
                </li>
                <li>
                  <Link to="/contact-section" className="hover:text-blue-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="" className="hover:text-blue-300">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/about-section" className="hover:text-blue-300">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/about-section" className="hover:text-blue-300">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/about-section" className="hover:text-blue-300">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="mb-4">
                Subscribe to our newsletter for updates and health tips.
              </p>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-300 p-2 rounded border-blue-700 text-black placeholder:text-gray-400"
                />
                <button className="p-2 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                  Subscribe
                </button>
              </div>
              <div className="flex space-x-4 mt-6">
                <Link to="" className="hover:text-blue-300">
                  <Facebook size={20} />
                </Link>
                <Link to="" className="hover:text-blue-300">
                  <Twitter size={20} />
                </Link>
                <Link to="" className="hover:text-blue-300">
                  <Instagram size={20} />
                </Link>
                <Link to="" className="hover:text-blue-300">
                  <Mail size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-emerald-800 mt-12 pt-8 text-center">
            <p>
              &copy; {new Date().getFullYear()} MediCare. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
