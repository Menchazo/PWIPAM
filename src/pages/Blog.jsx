
import React from "react";
import { motion } from "framer-motion";

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Celebración del Día de las Madres",
      date: "15 de Mayo, 2025",
      excerpt: "Una hermosa celebración donde homenajeamos a todas las madres de nuestra casa...",
      description: "Celebración día de las madres con flores y decoración"
    },
    {
      id: 2,
      title: "Taller de Tejido",
      date: "10 de Mayo, 2025",
      excerpt: "Nuestros abuelos aprendieron nuevas técnicas de tejido en un ambiente divertido...",
      description: "Grupo de adultos mayores aprendiendo a tejer"
    },
    {
      id: 3,
      title: "Excursión al Parque Nacional",
      date: "5 de Mayo, 2025",
      excerpt: "Una maravillosa experiencia en contacto con la naturaleza...",
      description: "Grupo de adultos mayores disfrutando de un día en el parque"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-orange-800 mb-4">Nuestro Blog</h1>
        <p className="text-xl text-gray-600">Compartiendo momentos especiales y experiencias únicas</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img  
              alt={post.description}
              className="w-full h-48 object-cover"
             src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
            <div className="p-6">
              <h2 className="text-xl font-bold text-orange-800 mb-2">{post.title}</h2>
              <p className="text-gray-500 text-sm mb-4">{post.date}</p>
              <p className="text-gray-700">{post.excerpt}</p>
              <button className="mt-4 text-orange-600 hover:text-orange-800 font-semibold">
                Leer más →
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

export default Blog;
