import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Pankaj gupta",
    role: "CEO, Interior Co.",
    image: "/assets/Ellipse 29.svg",
    message:
      "I never expected this level of service and dedication. Every detail was handled with care and expertise, making the experience truly unforgettable.",
  },
  {
    name: "Shivam Kawsh",
    role: "Co-Founder, EstatePro",
    image: "/assets/Ellipse 28.svg",
    message:
      "Amazing communication and professionalism throughout the entire process. Highly recommend to anyone looking for real estate support.",
  },
  {
    name: "John Lopez",
    role: "Digital Nomad",
    image: "/assets/Ellipse 31.svg",
    message:
      "From the very beginning, the team made me feel like a priority. Everything was well-managed and exceeded my expectations.",
  },
  {
    name: "Merry Freeman",
    role: "Marketing Manager, E-State",
    image: "/assets/Ellipse 33.svg",
    message:
      "The level of insight and support I received was unmatched. It felt like working with a true partner who cared about my goals.",
  },
  {
    name: "Lucy",
    role: "Sales Head, VillaCo",
    image: "/assets/Ellipse 35.svg",
    message:
      "Great attention to detail and seamless experience. I would absolutely work with them again in the future.",
  },
];

export default function HappyClients() {
  return (
    <section className="bg-white py-20 px-4">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1572FF]">
          Happy Clients
        </h2>
      </div>

      {/* Swiper Slider */}
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="!overflow-visible"
        >
          {testimonials.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center h-full">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-12 h-12 rounded-full mb-4 object-cover"
                />
                <p className="text-gray-500 text-xs mb-4 leading-relaxed">
                  {client.message}
                </p>
                <h4 className="text-sm font-semibold text-[#1572FF]">
                  {client.name}
                </h4>
                <p className="text-xs text-gray-400">{client.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}