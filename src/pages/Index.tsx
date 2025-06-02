
import React from 'react';
import Navbar from '@/components/Navbar';
import HomeSection from '@/components/HomeSection';
import SkillsSection from '@/components/SkillsSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Element } from 'react-scroll';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Element name="home">
        <HomeSection />
      </Element>
      
      <Element name="skills">
        <SkillsSection />
      </Element>
      
      <Element name="about">
        <AboutSection />
      </Element>
      
      <Element name="testimonials">
        <TestimonialsSection />
      </Element>
      
      <Element name="contact">
        <ContactSection />
      </Element>
      
      <Footer />
    </div>
  );
};

export default Index;
