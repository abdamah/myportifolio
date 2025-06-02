
import React from 'react';
import SectionHeader from '@/components/common/SectionHeader';
import SocialLinks from '@/components/common/SocialLinks';
import { contactInfo } from '@/data/portfolioData';
import { getIcon } from '@/utils/iconUtils';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-secondary text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          eyebrow="GET IN TOUCH"
          title="Let's Work Together"
          description="Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life."
          className="text-white"
        />

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 text-center">
            <div>
              <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {contactInfo.map((info, index) => {
                  const IconComponent = getIcon(info.icon);
                  return (
                    <div key={index} className="flex flex-col items-center space-y-4">
                      <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div>
                        <p className="text-gray-300 text-sm mb-2">{info.title}</p>
                        {info.link ? (
                          <a href={info.link} className="text-white hover:text-primary transition-colors text-lg">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white text-lg">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Follow Me</h4>
              <SocialLinks className="justify-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
