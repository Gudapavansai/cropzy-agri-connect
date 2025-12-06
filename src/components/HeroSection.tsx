import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";

const highlights = [
  "100% Farm Traceability",
  "Global Quality Standards",
  "Direct Farmer Partnerships",
];

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Lush green farmland at sunrise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-golden/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-forest-light/20 rounded-full blur-3xl animate-float animation-delay-500" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 py-32">
        <div className="max-w-4xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cream/10 backdrop-blur-sm rounded-full border border-cream/20 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-golden animate-pulse" />
            <span className="text-cream/90 text-sm font-medium tracking-wide">
              Anivek Greenfarms Private Limited
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-cream leading-tight mb-6 animate-fade-up animation-delay-100">
            Bridging Farms to{" "}
            <span className="text-gradient-golden">Global Markets</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-cream/80 leading-relaxed mb-8 max-w-2xl animate-fade-up animation-delay-200">
            Your trusted B2B partner for premium, sustainably-grown agricultural 
            produce with complete farm-to-fork traceability.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-6 mb-10 animate-fade-up animation-delay-300">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-golden" />
                <span className="text-cream/90 font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-400">
            <a href="#products">
              <Button variant="hero">
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a href="#services">
              <Button variant="heroOutline">
                Our Services
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in animation-delay-500">
        <span className="text-cream/60 text-sm font-medium">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-cream/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-cream/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
