import React from "react";

function About() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <img
        src="/images/Hero.png"
        alt="About Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 md:px-24 max-w-5xl text-white">
        <h1 className="text-5xl md:text-7xl roboto-condensed font-bold mb-6 leading-tight">
          ABOUT <span className="text-red-600">US</span>
        </h1>

        <p className="text-lg md:text-xl mb-6 max-w-3xl leading-relaxed">
          We are building a platform where athletes and students can pursue
          their dreams together. Our mission is to connect talented players
          with the right universities, opportunities, and guidance — without
          compromising academics or passion.
        </p>

        <p className="text-md md:text-lg mb-10 max-w-3xl text-gray-200">
          From recruitment to mentorship, we help you navigate the journey of
          studying and playing sports at an international level. This is more
          than a platform — it’s a pathway to your future.
        </p>

        {/* Stats / Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-6">
          <div className="border border-white/20 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-4xl font-bold text-red-600 mb-2">500+</h2>
            <p className="text-white font-semibold">
              Athletes Connected
            </p>
          </div>

          <div className="border border-white/20 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-4xl font-bold text-red-600 mb-2">100+</h2>
            <p className="text-white font-semibold">
              Partner Universities
            </p>
          </div>

          <div className="border border-white/20 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-4xl font-bold text-red-600 mb-2">10+</h2>
            <p className="text-white font-semibold">
              Sports Categories
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
