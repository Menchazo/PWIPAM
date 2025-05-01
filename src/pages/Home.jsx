
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

function Home() {
  const { toast } = useToast();
  const [events, setEvents] = useState([
    { id: 1, title: "Celebración Día del Abuelo", date: "28 de Mayo - 2:00 PM" },
    { id: 2, title: "Tarde de Música y Baile", date: "Todos los Domingos - 4:00 PM" }
  ]);

  const [newEvent, setNewEvent] = useState({ title: "", date: "" });

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (newEvent.title && newEvent.date) {
      setEvents([...events, { id: Date.now(), ...newEvent }]);
      setNewEvent({ title: "", date: "" });
      toast({
        title: "¡Evento agregado!",
        description: "El evento ha sido agregado exitosamente.",
      });
    }
  };

  return (
    <div>
      <section className="mb-12 relative">
        <img  alt="Banner principal" className="w-full h-64 object-cover rounded-xl mb-8" src="https://images.unsplash.com/photo-1633265633926-a3c31dce9a6d" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-6 mb-8 absolute bottom-0 left-0 right-0 mx-4"
        >
          <h2 className="text-3xl font-bold text-orange-800 mb-4">
            ¡Bienvenidos a Nuestro Portal!
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Un espacio dedicado a nuestros queridos adultos mayores donde encontrarán información sobre actividades, eventos y servicios disponibles.
          </p>
        </motion.div>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-lg shadow-xl p-6 relative overflow-hidden"
        >
          <img  alt="Actividades recreativas" className="absolute top-0 right-0 w-32 h-32 opacity-10" src="https://images.unsplash.com/photo-1658314755911-c9b6ae54459c" />
          <h2 className="text-2xl font-bold text-orange-800 mb-4">
            Actividades Semanales
          </h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center">
              <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
              Ejercicios Matutinos - 8:00 AM
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
              Taller de Manualidades - 10:00 AM
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
              Bingo Social - 3:00 PM
            </li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-lg shadow-xl p-6 relative overflow-hidden"
        >
          <img  alt="Servicios médicos" className="absolute top-0 right-0 w-32 h-32 opacity-10" src="https://images.unsplash.com/photo-1576671081741-c538eafccfff" />
          <h2 className="text-2xl font-bold text-orange-800 mb-4">
            Servicios Disponibles
          </h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center">
              <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
              Atención Médica Básica
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
              Asesoría Nutricional
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
              Apoyo Emocional
            </li>
          </ul>
        </motion.section>
      </div>

      <section className="mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-xl p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-orange-800">
              Próximos Eventos
            </h2>
            <Button
              onClick={() => document.getElementById('addEventForm').classList.toggle('hidden')}
              className="bg-orange-600 hover:bg-orange-700"
            >
              Agregar Evento
            </Button>
          </div>

          <form id="addEventForm" className="hidden mb-6 space-y-4 bg-orange-50 p-4 rounded-lg">
            <div>
              <label className="block text-sm font-medium mb-1">Título del Evento</label>
              <input
                type="text"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Fecha y Hora</label>
              <input
                type="text"
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>
            <Button onClick={handleAddEvent} className="w-full bg-orange-600 hover:bg-orange-700">
              Guardar Evento
            </Button>
          </form>

          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-gray-600">{event.date}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-xl p-6"
        >
          <h2 className="text-2xl font-bold text-orange-800 mb-6">Galería de Momentos</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img  alt="Momento especial 1" className="w-full h-48 object-cover rounded-lg" src="https://images.unsplash.com/photo-1669152581590-d54fda5a67de" />
            <img  alt="Momento especial 2" className="w-full h-48 object-cover rounded-lg" src="https://images.unsplash.com/photo-1585462990001-041a9bb108a8" />
            <img  alt="Momento especial 3" className="w-full h-48 object-cover rounded-lg" src="https://images.unsplash.com/photo-1675461089439-c3ac8ae595b7" />
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
