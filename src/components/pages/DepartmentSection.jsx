import React from "react";
import { motion } from "framer-motion";
import { Heart, Stethoscope, Microscope, Activity } from "lucide-react";

const DepartmentSection = () => {
  const departments = [
    {
      icon: Heart,
      title: "Emergency",
      description:
        "Available 24/7 for immediate medical attention and critical care services.",
    },
    {
      icon: Stethoscope,
      title: "Pediatrics",
      description:
        "Specialized care for children from newborns to adolescents.",
    },
    {
      icon: Microscope,
      title: "Surgery",
      description:
        "Advanced surgical procedures with state-of-the-art facilities.",
    },
    {
      icon: Activity,
      title: "First Aid",
      description: "Immediate care for minor injuries and medical emergencies.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl h-[60vh] py-20 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            OUR DEPARTMENTS
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto" />
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                <dept.icon size={32} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {dept.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600">{dept.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentSection;
