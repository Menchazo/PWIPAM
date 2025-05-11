
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-orange-600 text-white py-4 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <Link to="/" className="text-2xl font-bold flex items-center mb-2 sm:mb-0">
            <img  alt="Logo Casa de los Abuelos" className="w-12 h-12 mr-3 rounded-full" src="./images/favicon.png" />
            Casa de los Abuelos "Angelica Alvarez"
          </Link>
          {/* Use ml-auto to push links to the right on larger screens */}
          <div className="flex space-x-2 sm:space-x-4 text-base sm:text-lg flex-wrap justify-center md:ml-auto">
            <Link to="/" className="hover:text-orange-200 transition-colors px-2 py-1 rounded">Inicio</Link>
            <Link to="/about" className="hover:text-orange-200 transition-colors px-2 py-1 rounded">Nosotros</Link>
            <Link to="/blog" className="hover:text-orange-200 transition-colors px-2 py-1 rounded">Blog</Link>
            <Link to="/contact" className="hover:text-orange-200 transition-colors px-2 py-1 rounded">Contacto</Link>
            <Link to="/development-info" className="hover:text-orange-200 transition-colors px-2 py-1 rounded">Desarrollo</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
