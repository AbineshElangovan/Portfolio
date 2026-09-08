'use client';

import React from 'react';
import Image from 'next/image';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Bank Website',
      description: 'Banking Website prototype',
      image: '/images/bank.jpg',
      link: 'https://github.com/AbineshElangovan/Angel-Banking',
    },
    {
      title: 'Weather Forecast',
      description: 'A Simple Weather Forecast Website created using HTML, CSS',
      image: '/images/weather.jpg',
      link: 'https://vishnukumar2003.github.io/Weather-Forecast-Web/',
    },
    {
      title: 'KeyLogger',
      description: 'Python Utility Project',
      image: '/images/key.jpg',
      link: 'https://github.com/AbineshElangovan/Keylogger',
    },
  ];

  return (
    <section id="projects" className="bg-[#111111] text-white py-16">
      <div className="max-w-[1300px] mx-auto px-6 md:px-20">
        <h2 className="title-underline title-dark" data-sub="My Web Wizardry">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#222222] rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-[#303030] hover:-translate-y-1 group"
            >
              <div className="relative w-[260px] h-[150px] overflow-hidden rounded-md mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="260px"
                />
              </div>

              <h3 className="text-2xl font-medium my-2 text-white">{project.title}</h3>
              <p className="text-xs text-[#b3b3b3] mb-4 flex-1">{project.description}</p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-xs font-semibold text-white py-1.5 px-4 rounded-lg border-2 border-[#133f44] bg-[#123a3f] hover:bg-transparent transition-colors duration-300"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
