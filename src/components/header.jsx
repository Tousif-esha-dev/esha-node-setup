import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dz Tech</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <NavLink exact to="/" className="hover:text-gray-300 transition">Home</NavLink>
            </li>
            <li>
              <NavLink to="/About" className="hover:text-gray-300 transition">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-gray-300 transition">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
