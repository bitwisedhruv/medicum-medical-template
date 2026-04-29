import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Industries', href: '#industries' },
    { name: 'Quality', href: '#why-us' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg border-b border-slate-100 py-4 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-medical-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-medical-blue-600/20">
            <span className="text-white font-serif font-bold text-xl">M</span>
          </div>
          <span className="text-2xl font-serif font-bold tracking-tight text-slate-900">
            MEDICUM<span className="text-medical-blue-600">.</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-medical-blue-600 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-medical-blue-600 transition-all duration-300 shadow-lg shadow-slate-900/10 hover:shadow-medical-blue-600/20">
            Contact Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-900 p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col space-y-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-600 hover:text-medical-blue-600 flex justify-between items-center"
                >
                  {link.name}
                  <ChevronRight size={18} />
                </a>
              ))}
              <button className="w-full bg-medical-blue-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-medical-blue-600/20">
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
