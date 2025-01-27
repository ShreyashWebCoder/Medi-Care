import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <>
      <section className="py-20 w-full">
        <div className="max-w-7xl mx-auto h-[60vh] py-20 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.Akc8pGJBngWbCjHHoASopwHaE8&pid=Api&P=0&h=180"
                alt="Doctor"
                className="w-3/4 md:w-full max-w-md lg:max-w-lg drop-shadow-lg rounded-lg shadow-lg animat"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                ABOUT US
              </h2>
              <div className="w-20 h-1 bg-blue-900 mb-6" />
              <p className="text-gray-600 mb-6">
                With years of experience and a team of highly qualified medical
                professionals, we are committed to providing exceptional
                healthcare services to our community. Our state-of-the-art
                facilities and patient-centered approach ensure that you receive
                the best possible care.
              </p>

              <button className="bg-blue-900 w-44 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
