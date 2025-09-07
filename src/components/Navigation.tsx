import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav 
        className={`w-full z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-black shadow-lg' 
            : 'bg-white'
        }`}
        style={{
          position: window.innerWidth <= 768 ? 'sticky' : 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 50
        }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 relative">
              <div className="relative overflow-hidden">
                {/* Default Logo */}
                <img
                  src="/logostudio.svg"
                  alt="StudioEyn Logo"
                  className={`h-14 w-auto transition-all duration-700 ease-in-out ${
                    isScrolled 
                      ? 'opacity-0 rotate-3' 
                      : 'opacity-100 rotate-0'
                  }`}
                />
                {/* Inverted Logo */}
                <img
                  src="/logostudio-inverted.svg"
                  alt="StudioEyn Logo"
                  className={`absolute top-0 left-0 h-14 w-auto transition-all duration-700 ease-in-out ${
                    isScrolled 
                      ? 'opacity-100 rotate-0' 
                      : 'opacity-0 -rotate-3'
                  }`}
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block ml-auto">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`transition-all duration-500 ease-in-out text-sm font-normal uppercase ${
                      isScrolled 
                        ? 'text-white hover:text-gray-300' 
                        : 'text-black hover:text-gray-600'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 transition-all duration-500 ease-in-out ${
                  isScrolled 
                    ? 'text-white hover:text-gray-300' 
                    : 'text-black hover:text-gray-600'
                }`}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile menu: conditional positioning */}
      {isMobileMenuOpen && (
        <div className={`md:hidden border-t transition-all duration-500 ease-in-out py-8 ${
          isScrolled 
            ? 'fixed top-20 left-0 right-0 z-40 bg-black border-gray-700 shadow-lg' 
            : 'bg-white border-gray-200 mt-20'
        }`}>
          <div className="container-custom flex flex-col items-center justify-center space-y-4 w-full font-sans">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block transition-all duration-500 ease-in-out text-lg font-normal text-center font-sans uppercase ${
                  isScrolled 
                    ? 'text-white hover:text-gray-300' 
                    : 'text-black hover:text-gray-600'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;