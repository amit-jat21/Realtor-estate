import React from 'react';

const projectData = [
  {
    title: "Consultation",
    subtitle: "Project services + vendors",
    image: "/assets/pexels-brett-sayles-2881232.svg"
  },
  {
    title: "Design",
    subtitle: "Project services + vendors",
    image: "/assets/pexels-brett-sayles-2881232-1.svg"
  },
  {
    title: "Marketing & Design",
    subtitle: "Project services + vendors",
    image: "/assets/pexels-brett-sayles-2881232-2.svg"
  },
  {
    title: "Consultation & Marketing",
    subtitle: "Project services + vendors",
    image: "/assets/pexels-brett-sayles-2881232-3.svg"
  },
  {
    title: "Consultation",
    subtitle: "Project services + vendors",
    image: "/assets/pexels-fauxels-3182834.svg"
  },
];

const OurProjects = () => {
  return (
    <section className="bg-[#f9fbfd] py-20 px-4">
      {/* Heading */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-2">Our Projects</h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          We know what buyers are looking for and suggest projects that will bring
          clients top dollar for the sale of their homes.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {projectData.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-md overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-800 mb-1">{project.title}</h3>
              <p className="text-xs text-gray-500 mb-4">{project.subtitle}</p>
              <button className="bg-orange-500 text-white text-xs px-4 py-2 rounded-sm hover:bg-orange-600 transition">
                SEE MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProjects;