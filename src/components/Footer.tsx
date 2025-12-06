import { Leaf } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-dark py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-golden flex items-center justify-center">
              <Leaf className="w-5 h-5 text-forest-dark" />
            </div>
            <div>
              <span className="text-xl font-heading font-bold text-cream">CROPZY</span>
              <p className="text-cream/60 text-sm">Anivek Greenfarms Pvt. Ltd.</p>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a href="#home" className="text-cream/70 hover:text-cream transition-colors text-sm">
              Home
            </a>
            <a href="#services" className="text-cream/70 hover:text-cream transition-colors text-sm">
              Services
            </a>
            <a href="#products" className="text-cream/70 hover:text-cream transition-colors text-sm">
              Products
            </a>
            <a href="#contact" className="text-cream/70 hover:text-cream transition-colors text-sm">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-cream/50 text-sm">
            © {currentYear} CROPZY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
