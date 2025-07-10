import React, { useState } from "react";

export default function HeroSection() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  // State for errors
  const [errors, setErrors] = useState({});

  // Handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Mobile Number is required";
    if (!formData.city.trim()) newErrors.city = "Area/City is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Submit logic here
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
      });
    }
  };

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center px-16 py-10"
      style={{
        backgroundImage: "url('/assets/young-couple-examining-blueprints-with-real-estate-agent-while-buying-new-home 1.svg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="text-white text-center md:text-left max-w-xl flex-shrink-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Consultation,<br />Design,<br />& Marketing
          </h1>
        </div>

        {/* Form */}
        <div className="bg-[#4A5682] p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-white text-2xl font-bold text-center mb-6">
            Get a Free Consultation
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border border-white text-white rounded placeholder-white focus:outline-none"
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border border-white text-white rounded placeholder-white focus:outline-none"
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border border-white text-white rounded placeholder-white focus:outline-none"
              />
              {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
            </div>
            <div>
              <input
                type="text"
                name="city"
                placeholder="Area, City"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border border-white text-white rounded placeholder-white focus:outline-none"
              />
              {errors.city && <p className="text-red-400 text-sm mt-1">{errors.city}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-[#F56A1D] hover:bg-orange-600 text-white font-semibold py-3 rounded"
            >
              Get Quick Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}