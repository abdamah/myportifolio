import SocialLinks from "@/components/common/SocialLinks";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden pt-24"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in ">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-lg tracking-wid ">
                HELLO, I'M
              </p>
              <h1 className="text-6xl lg:text-7xl font-bold font-display text-secondary leading-tight">
                Abdallah Mahmoud
              </h1>
              <h2 className="text-2xl lg:text-3xl font-light text-gray-600">
                Full Stack Developer with 7+ experience
              </h2>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              I create digital experiences that are both beautiful and
              functional. Passionate about clean code, modern design, and
              solving complex problems. I have trained thousands of young
              developers throughout my career through my YouTube channel.
            </p>

            <div className="flex flex-wrap gap-4">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={600}
                offset={-80}
              >
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-full group transition-all duration-300 hover:shadow-glow">
                  Contact Me
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </ScrollLink>
            </div>

            {/* Social Links */}
            <SocialLinks variant="large" className="pt-4" />
          </div>

          {/* Image/Visual */}
          <div className="flex justify-center lg:justify-end animate-float">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-primary to-secondary rounded-3xl rotate-6 absolute -inset-4 opacity-20 blur-xl"></div>
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-white rounded-3xl shadow-2xl relative overflow-hidden border-4 border-white">
                <img
                  src="/lovable-uploads/86e51613-5b2e-4eda-945e-0d46fce4543c.png"
                  alt="Abdallah Mahmoud"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden lg:block">
          <ScrollLink
            to="about"
            smooth={true}
            duration={600}
            className="cursor-pointer group"
          >
            <div className="flex flex-col items-center space-y-2 text-gray-400 hover:text-primary transition-colors">
              <span className="text-sm font-medium">Scroll Down</span>
              <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
                <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
