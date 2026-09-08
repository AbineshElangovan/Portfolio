'use client';

import React from 'react';

export default function SkillsSection() {
  const skills = [
    { name: 'Next.js & React', percentage: 90 },
    { name: 'TypeScript & JavaScript', percentage: 85 },
    { name: 'Shopify & GraphQL', percentage: 75 },
    { name: 'Prisma ORM & PostgreSQL / SQL', percentage: 75 },
    { name: 'Python', percentage: 85 },
    { name: 'Computer Networking', percentage: 80 },
  ];

  return (
    <section id="skills" className="bg-black text-white py-16">
      <div className="max-w-[1300px] mx-auto px-6 md:px-20">
        <h2 className="title-underline title-black" data-sub="what i know">
          My skills
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mt-10">
          {/* Left Column Description */}
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="text-xl font-semibold text-[#cecece]">
              My creative skills & experiences.
            </h3>
            <p className="text-[#b3b3b3] text-justify leading-relaxed">
              Discover the breadth of my creative prowess and rich experiences. With a keen eye for detail and a passion for innovation, I bring a unique blend of skill and expertise to every project, ensuring unparalleled results that exceed expectations. From concept to execution, I thrive in bringing imagination to life, crafting memorable experiences that leave a lasting impression.
            </p>
          </div>

          {/* Right Column Progress Bars */}
          <div className="w-full md:w-1/2 space-y-5">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-1">
                <div className="flex items-center justify-between font-medium text-lg text-white">
                  <span>{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="h-[5px] w-full bg-gray-300 relative overflow-hidden rounded">
                  <div
                    className="h-full bg-accent transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
