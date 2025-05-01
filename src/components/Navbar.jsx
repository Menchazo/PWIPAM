
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-orange-600 text-white py-4 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <img  alt="Logo Casa de los Abuelos" className="w-12 h-12 mr-3 rounded-full" src="https://images.unsplash.com/photo-1674079886765-02db7c3919d5" />
            Casa de los Abuelos
          </Link>
          <div className="flex space-x-6 text-lg">
            <Link to="/" className="hover:text-orange-200 transition-colors">Inicio</Link>
            <Link to="/about" className="hover:text-orange-200 transition-colors">Nosotros</Link>
            <Link to="/blog" className="hover:text-orange-200 transition-colors">Blog</Link>
            <Link to="/contact" className="hover:text-orange-200 transition-colors">Contacto</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
