import React from "react";

function Services() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <img
        src="/images/Hero.png"
        alt="Services Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 md:px-24 max-w-6xl text-white">
        <h1 className="text-5xl md:text-7xl roboto-condensed font-bold mb-6 leading-tight">
          OUR <span className="text-red-600">SERVICES</span>
        </h1>

        <p className="text-lg md:text-xl mb-12 max-w-3xl text-gray-200">
          We offer end-to-end support for student-athletes who want to combine
          professional sports with world-class education at international
          universities.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card */}
          <div className="border border-white/20 rounded-lg p-6 backdrop-blur-sm hover:border-red-600 transition duration-300">
            <h2 className="text-2xl font-bold mb-3 text-red-600">
              Athlete Recruitment
            </h2>
            <p className="text-gray-200">
              We connect talented athletes with top universities and coaches
              that match their sporting level and academic goals.
            </p>
          </div>

          <div className="border border-white/20 rounded-lg p-6 backdrop-blur-sm hover:border-red-600 transition duration-300">
            <h2 className="text-2xl font-bold mb-3 text-red-600">
              University Placement
            </h2>
            <p className="text-gray-200">
              Personalized guidance to help you secure admission into American
              and international universities.
            </p>
          </div>

          <div className="border border-white/20 rounded-lg p-6 backdrop-blur-sm hover:border-red-600 transition duration-300">
            <h2 className="text-2xl font-bold mb-3 text-red-600">
              Scholarship Assistance
            </h2>
            <p className="text-gray-200">
              We help maximize your chances of receiving athletic and academic
              scholarships.
            </p>
          </div>

          <div className="border border-white/20 rounded-lg p-6 backdrop-blur-sm hover:border-red-600 transition duration-300">
            <h2 className="text-2xl font-bold mb-3 text-red-600">
              Profile Evaluation
            </h2>
            <p className="text-gray-200">
              Detailed assessment of your academic background and sports
              performance to build a strong profile.
            </p>
          </div>

          <div className="border border-white/20 rounded-lg p-6 backdrop-blur-sm hover:border-red-600 transition duration-300">
            <h2 className="text-2xl font-bold mb-3 text-red-600">
              Visa & Documentation
            </h2>
            <p className="text-gray-200">
              End-to-end assistance with visa applications and required
              documentation.
            </p>
          </div>

          <div className="border border-white/20 rounded-lg p-6 backdrop-blur-sm hover:border-red-600 transition duration-300">
            <h2 className="text-2xl font-bold mb-3 text-red-600">
              Career Mentorship
            </h2>
            <p className="text-gray-200">
              Guidance beyond admission — helping you plan long-term academic
              and athletic success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
