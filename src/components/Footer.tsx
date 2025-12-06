import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-dark py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="text-xl font-heading font-bold text-white">CROPZY</span>
              <p className="text-white/60 text-sm">Anivek Greenfarms Pvt. Ltd.</p>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/" className="text-white/70 hover:text-white transition-colors text-sm">
              Home
            </Link>
            <Link to="/services" className="text-white/70 hover:text-white transition-colors text-sm">
              Services
            </Link>
            <Link to="/products" className="text-white/70 hover:text-white transition-colors text-sm">
              Products
            </Link>
            <Link to="/contact" className="text-white/70 hover:text-white transition-colors text-sm">
              Contact
            </Link>
          </nav>

          {/* Copyright */}
          <p className="text-white/50 text-sm">
            © {currentYear} CROPZY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
