
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSetActive = (to: string) => {
    setActiveSection(to);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed w-full z-50 transition-all duration-500",
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg py-4" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold font-display">
          <span className="text-primary">RIIGSOFT</span>
          <span className="text-secondary">.</span>
        </h1>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 lg:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-secondary hover:bg-primary/10"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={600}
                  onSetActive={handleSetActive}
                  className={cn(
                    "text-lg font-medium cursor-pointer transition-all duration-300 relative",
                    "hover:text-primary",
                    activeSection === item.id 
                      ? "text-primary after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-primary" 
                      : "text-secondary/80"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center">
          <Link to="contact" smooth={true} duration={600} offset={-80}>
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-glow">
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md shadow-lg">
          <div className="container mx-auto px-6 py-6">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={600}
                    onClick={() => setMenuOpen(false)}
                    className="block text-lg font-medium text-secondary/80 hover:text-primary transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link to="contact" smooth={true} duration={600} offset={-80}>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-full"
                  onClick={() => setMenuOpen(false)}
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
