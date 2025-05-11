
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import DevelopmentInfo from "@/pages/DevelopmentInfo";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-orange-100 to-white">
        <Navbar />
        
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/development-info" element={<DevelopmentInfo />} />
          </Routes>
        </main>

        <footer className="bg-orange-800 text-white py-6 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg">
              Casa de los Abuelos "Angelica Alvarado" - Pantano Abajo
            </p>
            <p className="mt-2">
              Parroquia Santa Ana, Municipio Miranda, Estado Falcón
            </p>
          </div>
        </footer>
        
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
