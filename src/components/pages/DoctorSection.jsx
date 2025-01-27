import React, { useState } from "react";
import { motion } from "framer-motion";
// import doctorImg from "../../../assets/doctor-img.jpg";

const DoctorSection = () => {
  const [selectDoctor, setSelectDoctor] = useState(null);
  const [isModelOpen, setIsModelOpen] = useState(false);

  const openModel = (doctor) => {
    setSelectDoctor(doctor);
    setIsModelOpen(true);
  };

  const closeModel = (doctor) => {
    setSelectDoctor(null);

    setIsModelOpen(false);
  };

  const doctors = [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      image:
        "https://png.pngtree.com/png-clipart/20230927/original/pngtree-photo-men-doctor-physician-chest-smiling-png-image_13143575.png",
    },
    {
      id: "2",

      name: "Dr. Michael Chen",
      specialty: "Neurologist",
      image:
        "https://png.pngtree.com/png-clipart/20230927/original/pngtree-photo-men-doctor-physician-chest-smiling-png-image_13143575.png",
    },
    {
      id: "3",

      name: "Dr. Emily Parker",
      specialty: "Pediatrician",
      image:
        "https://png.pngtree.com/png-clipart/20230927/original/pngtree-photo-men-doctor-physician-chest-smiling-png-image_13143575.png",
    },
  ];

  return (
    <>
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
              OUR DOCTORS
            </h2>
            <div className="w-20 h-1 bg-blue-900 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.name}
                transition={{ duration: 0.9, delay: index * 0.1 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src={doctor.image || "/placeholder.svg"}
                    alt={doctor.name}
                    className="w-full h-30 object-fill"
                  />
                </div>
                {/* <img
                  src={doctor.image}
                  alt={doctor.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                /> */}
                <div className="p-6 flex flex-col items-center">
                  <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
                  <p className="text-gray-600 mb-4">{doctor.specialty}</p>

                  <button
                    onClick={() => openModel(doctor)}
                    className="bg-blue-900 w-44 text-white px- py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    View Profile
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Section */}
      {isModelOpen && selectDoctor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            {/* Close Button */}
            <button
              onClick={closeModel}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>
            {/* Product Image */}
            <div className="flex items-center justify-center mb-4">
              <img
                src={selectDoctor.image}
                alt={selectDoctor.name}
                className="w-full h-72 object-cover rounded-lg mb-4 "
              />
            </div>
            {/* Product Name */}
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              {selectDoctor.name}
            </h3>
            {/* Product Description */}
            <p className="text-gray-700 mb-6">{selectDoctor.specialty}</p>
            {/* Download Button */}
            <a
              href="/download-brochure.pdf"
              download={`${selectDoctor.name}.pdf`}
              className="bg-blue-300 text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out flex items-center justify-center"
            >
              <button>Download</button>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default DoctorSection;
