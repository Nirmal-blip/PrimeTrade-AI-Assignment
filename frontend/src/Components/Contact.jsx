import React from "react";

function Contact() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <img
        src="/images/Hero.png"
        alt="Contact Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 md:px-24 max-w-5xl text-white">
        <h1 className="text-5xl md:text-7xl roboto-condensed font-bold mb-6 leading-tight">
          CONTACT <span className="text-red-600">US</span>
        </h1>

        <p className="text-lg md:text-xl mb-10 max-w-3xl text-gray-200">
          Reach out to us for partnerships, athlete recruitment, or general
          inquiries. We’re always open to connecting with driven athletes and
          institutions.
        </p>

        {/* Contact Info */}
        <div className="space-y-8 max-w-3xl">
          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold text-red-600 mb-2">
              Company
            </h2>
            <p className="text-gray-200 text-lg">
              PlayMatch Sports & Education
            </p>
          </div>

          {/* Email */}
          <div>
            <h2 className="text-2xl font-bold text-red-600 mb-2">
              Email
            </h2>
            <a
              href="mailto:contact@playmatch.com"
              className="text-lg text-gray-200 hover:text-red-600 transition"
            >
              contact@playmatch.com
            </a>
          </div>

          {/* Location */}
          <div>
            <h2 className="text-2xl font-bold text-red-600 mb-2">
              Location
            </h2>
            <p className="text-gray-200 text-lg">
              Global · Remote-first Organization
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Follow Us
            </h2>

            <div className="flex flex-wrap gap-6 text-lg font-semibold">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-600 transition"
              >
                Instagram
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-600 transition"
              >
                LinkedIn
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-600 transition"
              >
                X (Twitter)
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-600 transition"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
