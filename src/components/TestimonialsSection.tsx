
import React from 'react';
import { Card } from "@/components/ui/card";
import { Star } from 'lucide-react';
import SectionHeader from '@/components/common/SectionHeader';
import { testimonials } from '@/data/portfolioData';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader 
          eyebrow="TESTIMONIALS"
          title="What Clients Say"
          description="Don't just take my word for it - here's what my clients have to say about working with me"
        />

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-8 bg-gray-50 border-0 rounded-2xl hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              
              {/* Emoji decoration */}
              <div className="absolute top-4 right-4 text-3xl opacity-20 group-hover:opacity-40 transition-opacity">
                {testimonial.emoji}
              </div>
              
              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6 text-lg italic">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-primary/20"
                />
                <div>
                  <h4 className="font-semibold text-secondary">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
