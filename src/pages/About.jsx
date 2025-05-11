
import React from "react";
import { motion } from "framer-motion";

function About() {
  const teamMembers = [
    { name: "Ana García", role: "Coordinadora", image: "" },
    { name: "Carlos Mendoza", role: "Voluntario Principal", image: "" },
    { name: "Luisa Pérez", role: "Enfermera", image: "" },
    { name: "Pedro Rodríguez", role: "Profesor de Manualidades", image: "" },
  ];

  const programmers = [
     { name: "Juliangie Ventura", role: "Desarrollador Web", image: "" },
     { name: "Gladys Morles", role: "Desarrollador Web", image: "" },
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
          Conoce más sobre la misión, visión y el equipo detrás de la Casa de los Abuelos "Angelica Alvarado" y el Club de la Tercera Edad.
        </p>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-12 bg-white rounded-lg shadow-xl p-8"
      >
        <h2 className="text-3xl font-bold text-orange-700 mb-4">Nuestra Historia</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
        El Club de la Tercera Edad, tiene como sede La Casa de los Abuelos “Angélica Alvarado”, sector Pantano Abajo, donde se integra al Adulto Mayor con la comunidad, incentivándolos a realizar tareas referidas a  situaciones de su entorno, con capacidad para desarrollar actividades referentes a nuevas acciones para  su bienestar y buen vivir.  Este Club lleva por nombre “Mis  Años Dorados", el cual fue fundado el  22  de  Octubre  de  1997;  por un grupo de personas del servicio de Promoción  Social  del  Ambulatorio “Dr. Edgar Peña” y  el  Departamento  de  Gerontología   de  la Alcaldía  del  Municipio  Miranda, con  una  directiva  que estaba  presidida  por  el  señor  Luis  Figueredo (difunto),Carlos Romero (difunto), José Ramírez, Enrique García, y Elva de Pachano, Juvenal Medina,  luego este club pasa a tener sede propia  la cual le designa el nombre de: La Casa de los Abuelos “Angélica  Alvarado”, en referencia y honor a  una señora que a su corto paso, dejo una bonita labor social y perteneció a la familia Sierra Ramírez, vecinos de sector, luego esta casa paso a ser adquisición de ASOAVI, para ser utilizada únicamente por el circulo de la tercera edad.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-12 bg-white rounded-lg shadow-xl p-8"
      >
        <h2 className="text-3xl font-bold text-orange-700 mb-4">Nuestra Misión</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Servir como un refugio donde la soledad se disipa, dando paso a la camaradería y el apoyo mutuo. A través de una gama diversa de actividades recreativas, culturales y educativas, buscando mantener a sus miembros activos, tanto física como mentalmente, fomentando un envejecimiento saludable y enriquecedor. Estableciendo preservación de la identidad cultural local como un pilar fundamental, transmitiendo tradiciones y costumbres a las nuevas generaciones. En esencia, crear un entorno seguro, acogedor y respetuoso, donde cada adulto mayor se sienta valorado, escuchado y atendido, contribuyendo así a su felicidad y calidad de vida
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
          Consolidarse como un referente indiscutible en la atención integral del adulto mayor dentro de la región; creando así un espacio donde la dignidad, el respeto y la alegría sean los estándares primordiales, donde cada miembro encuentre un hogar lejos de la soledad. Visibilizando un club vibrante, lleno de actividades enriquecedoras que estimulen la mente y el cuerpo, fomentando un envejecimiento activo y saludable. Reconocido por su compromiso con la preservación de la cultura local , fortaleciendo así el sentido de identidad y pertenencia. A demás de ser un ejemplo a seguir, un modelo de excelencia en la atención del adulto mayor, donde la comunidad se una en un abrazo solidario para brindarles a sus mayores el cuidado y el amor que merecen.
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
