// Navbar.jsx
import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/#home" },
    { name: "About", to: "/#about" },
    { name: "Contact", to: "/#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white">
            PathFinder
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <HashLink
                key={link.name}
                smooth
                to={link.to}
                className="text-slate-300 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </HashLink>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 space-y-2">
            {navLinks.map((link) => (
              <HashLink
                key={link.name}
                smooth
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-slate-300 hover:text-white"
              >
                {link.name}
              </HashLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
