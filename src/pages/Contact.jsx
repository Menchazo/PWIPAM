
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Phone, Mail } from 'lucide-react';

function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (name && email && message) {
      toast({
        title: "Mensaje enviado",
        description: `Gracias por contactarnos, ${name}. Nos pondremos en contacto contigo pronto.`,
        variant: "success"
      });
      e.target.reset(); 
    } else {
       toast({
        title: "Error",
        description: "Por favor completa todos los campos.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="bg-white rounded-lg shadow-xl overflow-hidden grid md:grid-cols-2">
          <div className="p-8">
            <h1 className="text-4xl font-bold text-orange-800 mb-6">Contáctanos</h1>
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-orange-700 mb-4">Información de Contacto</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p className="flex items-start">
                  <MapPin className="w-6 h-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span>Pantano Abajo, Parroquia Santa Ana, Municipio Miranda, Estado Falcón</span>
                </p>
                <p className="flex items-center">
                  <Phone className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0" />
                  <span>+58 123-456-7890 (Ejemplo)</span>
                </p>
                <p className="flex items-center">
                  <Mail className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0" />
                  <span>contacto@casadelosabuelosangelicaa.com (Ejemplo)</span>
                </p>
              </div>
            </div>

            <img alt="Entrada de la Casa de los Abuelos Angelica Alvarado" className="w-full h-48 object-cover rounded-lg shadow-md mt-6" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/620e205f-83ad-4326-a0da-0453e4e12ae9/db9dd9bbc13f956bf92a34deb4d7194c.jpg" />
          </div>

          <div className="bg-orange-50 p-8">
             <h2 className="text-2xl font-semibold text-orange-700 mb-6 text-center">Envíanos un Mensaje</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700">Nombre Completo</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
                  required
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">Correo Electrónico</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
                  required
                  placeholder="tu@correo.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 h-32 transition duration-150 ease-in-out"
                  required
                  placeholder="Escribe tu consulta aquí..."
                ></textarea>
              </div>

              <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 py-3 text-lg">
                Enviar Mensaje
              </Button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
