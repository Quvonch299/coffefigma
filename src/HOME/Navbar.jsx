import React, { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto mt-[43px] px-4 relative">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src="./NavbarLogo.svg" alt="Logo" />
        </div>

        {/* Desktop Links */}
        <div className="hidden sm:flex space-x-0">
          <Link to="/" className="font-barlow">HOME</Link>
          <Link to="/ABOUTUS" className="font-barlow">ABOUT US</Link>
          <Link to="/CreativePlon" className="font-barlow uppercase">Create your plan</Link>
        </div>

        {/* Mobile Burger */}
        <div className="sm:hidden">
          <CiMenuBurger
            className="w-8 h-8 cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col justify-center items-center p-6">
          {/* Close Button */}
          <div className="absolute top-6 right-6">
           
          </div>

          {/* Menu Links */}
          <div className="flex flex-col items-center gap-2">
            <Link
              to="/"
              className="font-barlow text-xl"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/ABOUTUS"
              className="font-barlow text-xl"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/CreativePlon"
              className="font-barlow text-xl uppercase"
              onClick={() => setIsOpen(false)}
            >
              Create Your Plan
            </Link>
          </div>

          {/* Bottom Button */}
          <button className="mt-8 px-6 py-2 bg-teal-200 rounded font-barlow">
            Create your plan
          </button>
        </div>
      )}
    </div>
  );
}
