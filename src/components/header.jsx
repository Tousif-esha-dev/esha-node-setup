import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-gray-900 to-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Dz Tech
          </h1>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-8">
              <li>
                <NavLink 
                  exact to="/" 
                  className="hover:text-cyan-300 transition-colors duration-300 text-lg font-medium"
                  activeClassName="text-cyan-300"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className="hover:text-cyan-300 transition-colors duration-300 text-lg font-medium"
                  activeClassName="text-cyan-300"
                >
                  About Us
                </NavLink>
              </li>
                      <li>
                        <NavLink 
                          to="/contact" 
                          className="hover:text-cyan-300 transition-colors duration-300 text-lg font-medium"
                          activeClassName="text-cyan-300"
                        >
                          Contact
                        </NavLink>
                      </li>
                      <li>
                        <NavLink 
                          to="/course" 
                          className="hover:text-cyan-300 transition-colors duration-300 text-lg font-medium"
                          activeClassName="text-cyan-300"
                        >
                          Course
                        </NavLink>
                      </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <NavLink 
                  exact to="/" 
                  className="block hover:text-cyan-300 transition-colors duration-300 text-lg font-medium"
                  activeClassName="text-cyan-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className="block hover:text-cyan-300 transition-colors duration-300 text-lg font-medium"
                  activeClassName="text-cyan-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className="block hover:text-cyan-300 transition-colors duration-300 text-lg font-medium"
                  activeClassName="text-cyan-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/course" 
                  className="block hover:text-cyan-300 transition-colors duration-300 text-lg font-medium"
                  activeClassName="text-cyan-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Course
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
