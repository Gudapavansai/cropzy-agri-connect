import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";

const highlights = [
  "100% Farm Traceability",
  "Global Quality Standards",
  "Direct Farmer Partnerships",
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Lush green farmland at sunrise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 py-32">
        <div className="max-w-4xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-white/90 text-sm font-medium tracking-wide">
              Anivek Greenfarms Private Limited
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6 animate-fade-up animation-delay-100">
            Bridging Farms to{" "}
            <span className="text-white/90">Global Markets</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8 max-w-2xl animate-fade-up animation-delay-200">
            Your trusted B2B partner for premium, sustainably-grown agricultural 
            produce with complete farm-to-fork traceability.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-6 mb-10 animate-fade-up animation-delay-300">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="text-white/90 font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-400">
            <Link to="/products">
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg">
                Explore Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in animation-delay-500">
        <span className="text-white/60 text-sm font-medium">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
