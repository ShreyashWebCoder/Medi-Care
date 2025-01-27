import React, { useState } from "react";
import { motion } from "framer-motion";

const ProductSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const products = [
    {
      id: 1,
      name: "Heart Surgery Package",
      description:
        "Comprehensive heart surgery package with world-class surgeons.",
      img: "https://img.freepik.com/free-vector/realistic-style-hand-sanitizer_23-2148481920.jpg?ga=GA1.1.787938311.1712495860&semt=ais_hybrid",
      pdf: "/heart-surgery-package.pdf",
    },
    {
      id: 2,
      name: "Orthopedic Care",
      description: "Specialized care for joint replacements and fractures.",
      img: "https://img.freepik.com/free-vector/realistic-style-hand-sanitizer_23-2148481920.jpg?ga=GA1.1.787938311.1712495860&semt=ais_hybrid",
      pdf: "/orthopedic-care.pdf",
    },
    {
      id: 3,
      name: "Cosmetic Procedures",
      description: "Advanced aesthetic treatments tailored to your needs.",
      img: "https://img.freepik.com/free-vector/realistic-style-hand-sanitizer_23-2148481920.jpg?ga=GA1.1.787938311.1712495860&semt=ais_hybrid",
      pdf: "/cosmetic-procedures.pdf",
    },
  ];

  return (
    <>
      {/* Products Section */}
      <section className="py-20 px-14 bg-gray-100">
        <div className="container mx-auto px-1 sm:px-10 md:px-14">
          <motion.h2
            className="text-3xl font-bold text-center text-blue-900 mb-6"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Medical Products
            <div className="w-20 h-1 bg-blue-900 mx-auto my-3" />
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {products.map((product) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-lg shadow-lg p-6 text-center w-full"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: product.id * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  {product.name}
                </h3>
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-72 h-52 object-contain rounded-lg"
                  />
                </div>
                <button
                  onClick={() => openModal(product)}
                  className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  View Details
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Section */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-0 right-2 text-gray-900 hover:text-gray-800 text-3xl"
            >
              &times;
            </button>
            {/* Product Image */}
            <div className="flex items-center justify-center mb-4">
              <img
                src={selectedProduct.img}
                alt={selectedProduct.name}
                className="w-full h-72 object-contain rounded-lg mb-4"
              />
            </div>
            {/* Product Name */}
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              {selectedProduct.name}
            </h3>
            {/* Product Description */}
            <p className="text-gray-700 mb-6">{selectedProduct.description}</p>

            <div className="flex justify-around items-center">
              {/* View Button */}
              <a
                // href={selectedProduct.pdf} 
                // target="_blank"
                // rel="noopener noreferrer"
                className="bg-blue-900 text-white px-12 py-2 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out flex items-center justify-center"
              >
                View
              </a>

              {/* Download Button */}
              <a
                href={selectedProduct.pdf}
                download={`${selectedProduct.name}.pdf`}
                className="bg-blue-900 text-white px-7 py-2 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out flex items-center justify-center"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductSection;
