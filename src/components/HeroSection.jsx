import React from "react";
import landingPageImg from "../assets/landing_img.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <>
      <div className="h-[90vh] flex items-center justify-center bg-blue-50 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <motion.div
            className="text-center md:text-left md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900">
              Health Care <br /> For Whole Family
            </h1>
            <p className="text-gray-700 mt-4 text-lg md:text-xl">
              In the healthcare sector, service excellence is the facility of
              the hospital as a healthcare service provider to consistently.
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
              Book an Appointment
            </button>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={landingPageImg}
              alt="Doctor"
              className="w-3/4 md:w-full max-w-md lg:max-w-lg drop-shadow-lg animat"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

// {/* <section className="relative bg-blue-50 w-full h-[80vh] flex items-center justify-center px-6 sm:px-12 md:px-16 lg:px-24">
//   {/* Content Section */}
//   <div className="flex flex-wrap items-center justify-center lg:justify-between w-full">
//     {/* Text Section */}
//     <div className="text-center lg:text-left w-full lg:w-1/2 mb-8 lg:mb-0">
//       <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight mb-4">
//         Health Care <br /> For Whole Family
//       </h1>
//       <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
//         In healthcare sector, service excellence is the facility of the hospital
//         as healthcare service provider to consistently.
//       </p>
//       <button className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-6 rounded-lg shadow-md transition duration-300">
//         Check Our Services
//       </button>
//     </div>

//     {/* Image Section */}

//     <div className="w-full lg:w-1/2 flex items-center justify-center">
//       <img
//         src={landingPageImg}
//         alt="Doctor and patient"
//         className="rounded-lg shadow-lg max-w-full h-auto border-4 border-none"
//       />
//     </div>
//   </div>
// </section>; */}

// {/* <div className="flex flex-col lg:flex-row bg-gray-100 py-10 px-6 lg:px-16 w-full h-auto rounded-lg shadow-lg">
//   {/* Left Section */}
//   <div className="relative flex-1 items-center justify-center rounded-lg overflow-hidden mb-6 lg:mb-0">
//     <img
//       src="https://www.kanakkupillai.com/learn/wp-content/uploads/2023/10/Opening-a-Medical-Store-in-India.jpg"
//       alt="Medical Store"
//       className="w-full h-[40vh] lg:w-[40vw] lg:h-[45vh] rounded-lg object-cover"
//     />
//   </div>

//   {/* Right Section */}
//   <div className="flex-1 bg-blue-200 text-black p-6 rounded-lg flex flex-col justify-center items-center">
//     <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-center">
//       World-Class Healthcare: Healing and Heritage, Together
//     </h2>
//     <p className="text-base mb-6 px-4 lg:px-20 text-center">
//       "Vital Global Care" is your gateway to comprehensive medical solutions,
//       combining exceptional healthcare with a seamless travel experience. Our
//       goal is to provide the highest quality services, ensuring excellence in
//       every step of your medical journey.
//     </p>
//     <button className="bg-emerald-600 w-full lg:w-[20vw] hover:bg-emerald-500 text-black font-medium py-2 px-4 rounded-lg transition duration-300 ease-in-out">
//       Request a Consultation
//     </button>
//   </div>
// </div>; */}
