import React from "react";

const Why = () => {
  return (
    <section className="py-12 bg-gradient-to-b  from-white to-blue-50">
      <div className="max-w-6xl  mb-5 mx-auto px-4">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl mt-5 font-bold text-center mb-10 text-gray-800">
          Why Choose Our AMC?
        </h2>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md  p-6 text-center hover:shadow-lg  transition">
            <div className="flex justify-center items-center w-12 h-12 mx-auto bg-blue-100 text-blue-600 rounded-full mb-4">
              📅
            </div>
            <h3 className="text-lg font-semibold mb-2">Quarterly Checkups</h3>
            <p className="text-gray-600 text-sm">
              Regular service every 3 months to ensure pure water.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="flex justify-center items-center w-12 h-12 mx-auto bg-blue-100 text-blue-600 rounded-full mb-4">
              👨‍🔧
            </div>
            <h3 className="text-lg font-semibold mb-2">Expert Technicians</h3>
            <p className="text-gray-600 text-sm">
              Certified service engineers at your doorstep.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
            <div className="flex justify-center items-center w-12 h-12 mx-auto bg-blue-100 text-blue-600 rounded-full mb-4">
              💰
            </div>
            <h3 className="text-lg font-semibold mb-2">Affordable Plans</h3>
            <p className="text-gray-600 text-sm">
              Transparent pricing with no hidden charges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
