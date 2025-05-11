
import React from "react";
import { motion } from "framer-motion";

function About() {
  const teamMembers = [
    { name: "Ana García", role: "Coordinadora", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" },
    { name: "Carlos Mendoza", role: "Voluntario Principal", image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" },
    { name: "Luisa Pérez", role: "Enfermera", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" },
    { name: "Pedro Rodríguez", role: "Profesor de Manualidades", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" },
  ];

  const programmers = [
     { name: "Tu Nombre / Nombre del Equipo", role: "Desarrollador(es) Web", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-orange-800 mb-4">Sobre Nosotros</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Conoce más sobre la misión, visión y el equipo detrás de la Casa de los Abuelos "Angelica Alvarado".
        </p>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-12 bg-white rounded-lg shadow-xl p-8"
      >
        <h2 className="text-3xl font-bold text-orange-700 mb-4">Nuestra Misión</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Ofrecer un espacio seguro, acogedor y lleno de actividades significativas para los adultos mayores de la comunidad de Pantano Abajo, promoviendo su bienestar físico, mental y social. Buscamos ser un segundo hogar donde se sientan valorados, activos y conectados.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-12 bg-orange-50 rounded-lg shadow-xl p-8"
      >
        <h2 className="text-3xl font-bold text-orange-700 mb-4">Nuestra Visión</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Ser un centro de referencia en el cuidado y atención integral del adulto mayor en el Municipio Miranda, reconocido por la calidad humana de nuestro equipo, la variedad de nuestros programas y el impacto positivo en la vida de nuestros abuelos y sus familias.
        </p>
      </motion.section>
      
       <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-12 bg-white rounded-lg shadow-xl p-8"
      >
        <h2 className="text-3xl font-bold text-orange-700 mb-6 text-center">Nuestro Equipo</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md" 
              />
              <h3 className="text-xl font-semibold text-orange-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </motion.section>
      
       <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
         className="mb-12 bg-orange-50 rounded-lg shadow-xl p-8"
      >
        <h2 className="text-3xl font-bold text-orange-700 mb-6 text-center">Desarrolladores del Proyecto</h2>
         <div className="flex justify-center">
           {programmers.map((programmer, index) => (
            <div key={index} className="text-center max-w-xs">
              <img 
                src={programmer.image} 
                alt={programmer.name} 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md" 
              />
              <h3 className="text-xl font-semibold text-orange-800">{programmer.name}</h3>
              <p className="text-gray-600">{programmer.role}</p>
              <p className="text-gray-500 text-sm mt-2">Responsables de la creación y mantenimiento de este portal web.</p>
            </div>
          ))}
         </div>
      </motion.section>

    </div>
  );
}

export default About;
