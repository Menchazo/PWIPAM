
import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-xl p-8 mb-8 relative overflow-hidden"
      >
        <img  alt="Fondo decorativo" className="absolute top-0 right-0 w-64 h-64 opacity-5" src="https://images.unsplash.com/photo-1654702761561-d6d64d4227a1" />
        <h1 className="text-4xl font-bold text-orange-800 mb-6">Sobre Nosotros</h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          La Casa de los Abuelos de Pantano Abajo es un espacio dedicado al bienestar y la felicidad de nuestros adultos mayores. Desde nuestra fundación, nos hemos comprometido a crear un ambiente acogedor y estimulante donde nuestros abuelos puedan disfrutar de su tiempo libre, socializar y mantenerse activos.
        </p>
        <p className="text-xl text-gray-700 leading-relaxed">
          Nuestra misión es proporcionar un espacio seguro y enriquecedor donde los adultos mayores puedan desarrollar nuevas habilidades, mantener una vida social activa y recibir el apoyo que necesitan para una vida plena y satisfactoria.
        </p>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-xl p-8"
      >
        <h2 className="text-3xl font-bold text-orange-800 mb-6">Nuestro Equipo</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center">
            <img  alt="Foto del Director" className="w-48 h-48 rounded-full mx-auto mb-4 shadow-lg" src="https://images.unsplash.com/photo-1659353885824-1199aeeebfc6" />
            <h3 className="text-xl font-semibold">Dr. Juan Pérez</h3>
            <p className="text-gray-600">Director</p>
          </div>
          <div className="text-center">
            <img  alt="Foto de la Coordinadora" className="w-48 h-48 rounded-full mx-auto mb-4 shadow-lg" src="https://images.unsplash.com/photo-1685995833594-8c35ffa8ccb0" />
            <h3 className="text-xl font-semibold">Dra. María González</h3>
            <p className="text-gray-600">Coordinadora de Actividades</p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-xl p-8 mt-8"
      >
        <h2 className="text-3xl font-bold text-orange-800 mb-6">Equipo de Desarrollo</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <img  alt="Foto del Desarrollador Frontend" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg" src="https://images.unsplash.com/photo-1520509414578-d9cbf09933a1" />
            <h3 className="text-xl font-semibold">Carlos Rodríguez</h3>
            <p className="text-gray-600">Desarrollador Frontend</p>
          </div>
          <div className="text-center">
            <img  alt="Foto de la Diseñadora" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg" src="https://images.unsplash.com/photo-1658311447509-06ab177ed941" />
            <h3 className="text-xl font-semibold">Ana Silva</h3>
            <p className="text-gray-600">Diseñadora UX/UI</p>
          </div>
          <div className="text-center">
            <img  alt="Foto del Gestor de Proyecto" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg" src="https://images.unsplash.com/photo-1608403810239-ac22e2c3bac7" />
            <h3 className="text-xl font-semibold">Luis Torres</h3>
            <p className="text-gray-600">Gestor de Proyecto</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default About;
