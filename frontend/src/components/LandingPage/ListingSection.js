import React from 'react';

export default function ListingSection() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section with Background Image */}
      <div
        className="relative w-full h-[500px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('/assets/Rectangle.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50" />

        {/* Content on top */}
        <div className="relative z-10 max-w-2xl mx-auto px-4">
          <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6">
            Learn more about our listing process, as well as our additional staging and design work.
          </h2>
          <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-100 transition">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Blue Footer Bar */}
      <div className="bg-blue-600 text-white flex flex-col md:flex-row items-center justify-between px-6 py-6 space-y-4 md:space-y-0">
        {/* Left-side Navigation Links */}
        <div className="flex flex-wrap items-center space-x-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Services</a>
          <a href="#" className="hover:underline">Projects</a>
          <a href="#" className="hover:underline">Testimonials</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>

        {/* Right-side Subscribe Form */}
        <div className="flex items-center space-x-4">
          <span className="text-white font-medium">Subscribe Us</span>
          <div className="flex overflow-hidden rounded border border-white">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="px-3 py-2 bg-blue-600 text-white placeholder-white focus:outline-none"
            />
            <button className="bg-white text-blue-600 px-4 py-2 hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}