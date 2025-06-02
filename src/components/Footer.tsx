
import React from 'react';
import SocialLinks from '@/components/common/SocialLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold font-display mb-4">
              <span className="text-primary">RIIGSOFT</span>
              <span className="text-white">.</span>
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Creating digital experiences that make a difference. 
              Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Contact'].map((link) => (
                <a 
                  key={link}
                  href={`#${link.toLowerCase()}`} 
                  className="block text-gray-300 hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <SocialLinks variant="footer" className="justify-center md:justify-end" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {currentYear} Abdallah Mahmoud. All rights reserved. Made with ❤️ and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
