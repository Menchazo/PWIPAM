
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-white rounded-lg shadow-xl p-8 grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-4xl font-bold text-orange-800 mb-6">Contáctanos</h1>
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-orange-700 mb-4">Información de Contacto</h2>
              <div className="space-y-3 text-lg">
                <p className="flex items-center">
                  <span className="text-orange-600 mr-2">📍</span>
                  Pantano Abajo, Santa Ana, Miranda, Estado Falcón
                </p>
                <p className="flex items-center">
                  <span className="text-orange-600 mr-2">📞</span>
                  +58 123-456-7890
                </p>
                <p className="flex items-center">
                  <span className="text-orange-600 mr-2">✉️</span>
                  contacto@casadelosabuelos.com
                </p>
              </div>
            </div>

            <img  alt="Imagen de contacto" className="w-full h-48 object-cover rounded-lg" src="https://images.unsplash.com/photo-1632587457432-4a6c6fc58f2b" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-orange-50 p-6 rounded-lg">
            <div>
              <label className="block text-sm font-medium mb-1">Nombre Completo</label>
              <input
                type="text"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Correo Electrónico</label>
              <input
                type="email"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Mensaje</label>
              <textarea
                className="w-full p-2 border rounded focus:ring-2 focus:ring-orange-500 h-32"
                required
              ></textarea>
            </div>

            <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
