import React from "react";
const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <div
        className="absolute opacity-50 inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/public/images/bg.jpg')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Pure Water, Pure Care <br></br>Trusted AMC Services for Your Family
        </h1>
        <p className="text-lg md:text-2xl text-white mb-6">
          Quality Water Solutions for Every Home
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
          Book a Call
        </button>
      </div>
    </section>
  );
};

export default Hero;
