import React from "react";

const HeroSection = () => {
  return (

    <section className="relative bg-gray-100 flex justify-center">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Your Style
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Shop the latest trends in fashion, electronics, and more.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
              Shop Now
            </button>
            <button className="px-6 py-3 bg-gray-200 text-gray-900 font-semibold rounded-lg shadow hover:bg-gray-300 transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0">
          {/* <img
            src="https://via.placeholder.com/600x400"
            alt="Hero"
            className="rounded-lg shadow-lg w-full"
          /> */}
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full blur-xl opacity-50 transform -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-500 rounded-full blur-xl opacity-50 transform translate-x-16 translate-y-16"></div>
    </section>
  );
};

export default HeroSection;
