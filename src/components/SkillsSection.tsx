
import React from 'react';
import { Card } from "@/components/ui/card";
import SectionHeader from '@/components/common/SectionHeader';
import { skills, services } from '@/data/portfolioData';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader 
          eyebrow="WHAT I DO"
          title="Skills & Services"
          description="I offer a comprehensive range of services to help bring your digital vision to life"
        />

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-xl transition-all duration-300 group border-0 rounded-2xl bg-gray-50 hover:bg-white">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Skills */}
        <div className="bg-secondary rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Technical Expertise
            </h3>
            <p className="text-gray-300 text-lg">
              Technologies I work with on a daily basis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold text-lg">{skill.name}</span>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-primary h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-gray-400 text-sm">{skill.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
