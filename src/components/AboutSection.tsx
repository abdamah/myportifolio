
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/common/SectionHeader';
import { aboutFeatures, stats } from '@/data/portfolioData';
import { getIcon } from '@/utils/iconUtils';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-lg tracking-wide">
                ABOUT ME
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold font-display text-secondary">
                Passionate Developer with a Creative Mind
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                I'm a full-stack developer with 7+ years of experience creating digital solutions 
                that make a difference. I specialize in Spring Boot, Node.js, and modern web technologies.
              </p>
              <p>
                My passion lies in crafting seamless user experiences and writing clean, 
                efficient code. I believe in the power of technology to solve real-world problems 
                and create meaningful connections.
              </p>
              <p>
                Throughout my career, I have trained thousands of young developers, helping them 
                build their skills and launch successful careers in tech.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-semibold group transition-all duration-300"
              >
                Let's Work Together
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {aboutFeatures.map((feature, index) => {
              const IconComponent = getIcon(feature.icon);
              return (
                <Card key={index} className="p-6 bg-white hover:shadow-xl transition-all duration-300 group border-0 rounded-2xl">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-secondary">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
