import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5"; // Close icon
import { Link } from 'react-router-dom';
import GlassSurface from './GlassSurface';
import logo from "../assets/Vybrant brand LOGO.png";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <GlassSurface
        width="100%"
        height="auto"
        borderRadius={80}
        opacity={0.9}
        brightness={80}
        blur={14}
        className="sticky top-0 w-full py-4 px-6 z-50"
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
            <Link to="/" className="flex items-center">
    <img
      src={logo}
      alt="Company Logo"
      className="h-10 w-auto"
    />
  </Link>


          {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-black font-montserrat">
  <Link to="/" className="hover:text-gray-600">Home</Link>
  <Link to="/About" className="hover:text-gray-600">About Us</Link>
  <Link to="/Services" className="hover:text-gray-600">Services</Link>
  <Link to="/Supportedliving" className="hover:text-gray-600">Supported Living</Link>
  <Link to="/Careers" className="hover:text-gray-600">Careers</Link>
  <Link to="/Contact" className="hover:text-gray-600">Contact Us</Link>
  <Link to="/comingsoon" className="hover:text-gray-600">Blog</Link>
</div>


          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center px-3 py-2 text-black hover:text-gray-500"
            onClick={() => setIsOpen(true)}
          >
            <GiHamburgerMenu size={26} />
          </button>
        </div>
      </GlassSurface>

      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white/90 backdrop-blur-md flex flex-col items-center justify-center space-y-8 text-black text-3xl font-montserrat z-50 transition-all duration-300">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-black hover:text-gray-500"
            onClick={() => setIsOpen(false)}
          >
            <IoClose size={36} />
          </button>

         {/* Mobile Links */}
<Link to="/" onClick={() => setIsOpen(false)} className="hover:text-gray-600">
  Home
</Link>
<Link to="/About" onClick={() => setIsOpen(false)} className="hover:text-gray-600">
  About Us
</Link>
<Link to="/Services" onClick={() => setIsOpen(false)} className="hover:text-gray-600">
  Services
</Link>
<Link to="/Supportedliving" onClick={() => setIsOpen(false)} className="hover:text-gray-600">
  Supported Living
</Link>
<Link to="/Careers" onClick={() => setIsOpen(false)} className="hover:text-gray-600">
  Careers
</Link>
<Link to="/Contact" onClick={() => setIsOpen(false)} className="hover:text-gray-600">
  Contact Us
</Link>
<Link to="/comingsoon" onClick={() => setIsOpen(false)} className="hover:text-gray-600">
  Blog
</Link>

        </div>
      )}
    </>
  );
}
