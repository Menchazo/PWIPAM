
import React from "react";
import { motion } from "framer-motion";
import { Code, Cpu, Layers, Palette, Wind, Zap, FileCode } from "lucide-react"; // Added FileCode for HTML

function DevelopmentInfo() {
  const techItems = [
     { icon: <FileCode className="w-8 h-8 text-orange-600" />, name: "HTML", description: "El lenguaje de marcado fundamental para estructurar el contenido de las páginas web." },
    { icon: <Code className="w-8 h-8 text-orange-600" />, name: "JavaScript", description: "El lenguaje principal para la lógica interactiva y la funcionalidad dinámica del sitio." },
    { icon: <Layers className="w-8 h-8 text-orange-600" />, name: "React", description: "Una biblioteca de JavaScript para construir interfaces de usuario modernas y eficientes basadas en componentes." },
    { icon: <Zap className="w-8 h-8 text-orange-600" />, name: "Vite", description: "Herramienta de compilación y servidor de desarrollo rápido que optimiza el flujo de trabajo frontend." },
    { icon: <Palette className="w-8 h-8 text-orange-600" />, name: "TailwindCSS", description: "Un framework CSS de utilidad primero para diseñar rápidamente interfaces personalizadas directamente en el marcado." },
    { icon: <Wind className="w-8 h-8 text-orange-600" />, name: "Framer Motion", description: "Biblioteca para crear animaciones fluidas y complejas con facilidad en React." },
    { icon: <Cpu className="w-8 h-8 text-orange-600" />, name: "Componentes UI (shadcn/ui & Radix)", description: "Conjunto de componentes de interfaz de usuario accesibles y reutilizables que forman la base visual." },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-orange-800 mb-4">¿Cómo se Construyó Este Portal?</h1>
        <p className="text-xl text-gray-600">Un vistazo técnico a las herramientas y tecnologías detrás de escena.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-xl p-8 mb-8"
      >
        <h2 className="text-3xl font-bold text-orange-800 mb-6">Filosofía de Desarrollo</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Este portal fue desarrollado utilizando un enfoque moderno de desarrollo web frontend, centrándose en la creación de una experiencia de usuario rápida, accesible y visualmente agradable. La elección de las tecnologías se basó en su eficiencia, flexibilidad y el robusto ecosistema que ofrecen para construir aplicaciones web interactivas.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Se partió de HTML para la estructura semántica, se aplicaron estilos con CSS (a través de Tailwind), y se utilizó JavaScript como lenguaje fundamental para toda la lógica del lado del cliente. La estructura se basa en componentes reutilizables con React, facilitando el mantenimiento y la escalabilidad del sitio.
        </p>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-xl p-8"
      >
        <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">Tecnologías Clave Utilizadas</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-orange-50 rounded-lg border border-orange-100 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 p-3 bg-white rounded-full shadow-md">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-orange-700 mb-2">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-lg shadow-xl p-8 mt-8"
      >
        <h2 className="text-3xl font-bold text-orange-800 mb-6">El Proceso</h2>
        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
           <p>
            <strong className="text-orange-700">0. Estructura Base (HTML):</strong> Se definió la estructura semántica inicial de cada página utilizando HTML estándar.
          </p>
          <p>
            <strong className="text-orange-700">1. Enrutado y Componentes (React):</strong> Se utilizó React Router para gestionar la navegación entre páginas. La interfaz se dividió en componentes reutilizables con React.
          </p>
          <p>
            <strong className="text-orange-700">2. Diseño y Estilos (TailwindCSS):</strong> TailwindCSS fue fundamental para aplicar estilos de forma rápida y consistente. Se creó un tema personalizado con la paleta de colores naranja. Las clases de utilidad permitieron construir el diseño directamente en los componentes React.
          </p>
          <p>
            <strong className="text-orange-700">3. Componentes de Interfaz (shadcn/ui & Radix):</strong> Se implementaron componentes (botones, formularios, diálogos) utilizando primitivas de Radix UI, estilizadas vía shadcn/ui, asegurando accesibilidad y coherencia.
          </p>
          <p>
            <strong className="text-orange-700">4. Interactividad y Estado (JavaScript & React):</strong> React manejó el estado (lista de eventos, datos de formularios). JavaScript se usó para la lógica de añadir eventos, enviar formularios y otras interacciones.
          </p>
          <p>
            <strong className="text-orange-700">5. Animaciones (Framer Motion):</strong> Framer Motion se integró para añadir transiciones suaves y animaciones sutiles, mejorando la experiencia visual.
          </p>
          <p>
            <strong className="text-orange-700">6. Optimización (Vite):</strong> Vite compiló el código (JSX, CSS), optimizando archivos para carga rápida y proporcionando un entorno de desarrollo eficiente (HMR).
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default DevelopmentInfo;
