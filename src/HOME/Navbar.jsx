import React, { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { Link } from 'react-router';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto mt-[43px] px-4">
      <div className="flex justify-between items-center">
        <div>
          <img src="./NavbarLogo.svg" alt="Logo" />
        </div>
        <div className="hidden sm:flex">
          <Link to="/" className="font-barlow px-4">HOME</Link>
          <Link to="/ABOUTUS" className="font-barlow px-4">ABOUT US</Link>
          <Link to="/CreativePlon" className="font-barlow uppercase px-4">Create your plan</Link>
        </div>
        <div className="sm:hidden">
          <CiMenuBurger
            className="w-8 h-8 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden mt-4 flex flex-col">
          <Link to="/" className="font-barlow py-2" onClick={() => setIsOpen(false)}>HOME</Link>
          <Link to="/ABOUTUS" className="font-barlow py-2" onClick={() => setIsOpen(false)}>ABOUT US</Link>
          <Link to="/CreativePlon" className="font-barlow uppercase py-2" onClick={() => setIsOpen(false)}>Create your plan</Link>
        </div>
      )}
    </div>
  );
}
