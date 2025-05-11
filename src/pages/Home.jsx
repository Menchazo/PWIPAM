
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import InstagramFeed from "@/components/InstagramFeed";

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
      const newEventObject = { id: Date.now(), ...newEvent };
      const updatedEvents = [newEventObject, ...events];
      setEvents(updatedEvents);
      localStorage.setItem('events', JSON.stringify(updatedEvents));
      setNewEvent({ title: "", date: "" });
      toast({
        title: "¡Evento agregado!",
        description: "El evento ha sido agregado exitosamente.",
        variant: "success"
      });
       document.getElementById('addEventForm').classList.add('hidden')
    } else {
       toast({
        title: "Error",
        description: "Por favor completa todos los campos.",
        variant: "destructive",
      });
    }
  };
  
  useState(() => {
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);


  return (
    <div>
      <section className="mb-12 relative pt-8">
        <img alt="Reunión en la Casa de los Abuelos Angelica Alvarado" className="w-full h-72 object-cover rounded-xl mb-8 shadow-lg" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/620e205f-83ad-4326-a0da-0453e4e12ae9/d49be3a4aa19956c510194aed1521f53.jpg" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-6 mb-8 sm:absolute bottom-0 left-0 right-0 mx-auto sm:mx-4 max-w-4xl transform sm:-translate-y-8"
        >
          <h2 className="text-3xl font-bold text-orange-800 mb-4">
            ¡Bienvenidos a Nuestro Portal!
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
             Un espacio dedicado a la Casa de los Abuelos "Angelica Alvarado". Encuentra información sobre actividades, eventos y servicios.
          </p>
        </motion.div>
      </section>

      <div className="grid md:grid-cols-2 gap-8 mt-16">
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-lg shadow-xl p-6 relative overflow-hidden"
        >
          <img alt="Actividades recreativas en la casa de los abuelos" className="absolute top-0 right-0 w-32 h-32 opacity-10" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/620e205f-83ad-4326-a0da-0453e4e12ae9/a459f83c5e73ddce1ba0375ff03959cf.jpg" />
          <h2 className="text-2xl font-bold text-orange-800 mb-4">
            Actividades Semanales
          </h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center">
              <span className="w-3 h-3 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
              <span>Ejercicios Matutinos - 8:00 AM</span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
              <span>Taller de Manualidades - 10:00 AM</span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
              <span>Bingo Social - 3:00 PM</span>
            </li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-lg shadow-xl p-6 relative overflow-hidden"
        >
          <img alt="Servicios disponibles en la casa de los abuelos" className="absolute top-0 right-0 w-32 h-32 opacity-10" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/620e205f-83ad-4326-a0da-0453e4e12ae9/41fd9399f683290c8c712b05f8acbc2c.jpg" />
          <h2 className="text-2xl font-bold text-orange-800 mb-4">
            Servicios Disponibles
          </h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center">
              <span className="w-3 h-3 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
              <span>Atención Médica Básica</span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
              <span>Asesoría Nutricional</span>
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
              <span>Apoyo Emocional y Compañía</span>
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
          <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
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

          <form id="addEventForm" onSubmit={handleAddEvent} className="hidden mb-6 space-y-4 bg-orange-50 p-4 rounded-lg border border-orange-200">
            <h3 className="text-lg font-semibold text-orange-700">Nuevo Evento</h3>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="eventTitle">Título del Evento</label>
              <input
                id="eventTitle"
                type="text"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded focus:ring-orange-500 focus:border-orange-500"
                placeholder="Ej: Tarde de Dominó"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="eventDate">Fecha y Hora</label>
              <input
                 id="eventDate"
                type="text"
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded focus:ring-orange-500 focus:border-orange-500"
                placeholder="Ej: Próximo Lunes - 4:00 PM"
              />
            </div>
            <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
              Guardar Evento
            </Button>
          </form>

          <div className="space-y-4">
            {events.length > 0 ? (
              events.map((event) => (
                <motion.div 
                  key={event.id} 
                  className="border-l-4 border-orange-500 pl-4 py-2 bg-orange-50 rounded"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  layout
                >
                  <h3 className="text-xl font-semibold text-orange-900">{event.title}</h3>
                  <p className="text-gray-600">{event.date}</p>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-4">No hay eventos programados por el momento.</p>
            )}
          </div>
        </motion.div>
      </section>

      <section className="mt-12">
        <InstagramFeed />
      </section>

      <section className="mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-xl p-6"
        >
          <h2 className="text-2xl font-bold text-orange-800 mb-6 text-center">Galería de Momentos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
             <img alt="Adultos mayores compartiendo en Casa de los Abuelos Angelica Alvarado 1" className="w-full h-56 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/620e205f-83ad-4326-a0da-0453e4e12ae9/addc31b077211c815ff27093852e1b4c.jpg" />
             <img alt="Adultos mayores compartiendo en Casa de los Abuelos Angelica Alvarado 2" className="w-full h-56 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/620e205f-83ad-4326-a0da-0453e4e12ae9/41eefde62741a36abca36d7be5deed34.jpg" />
             <img alt="Adultos mayores compartiendo en Casa de los Abuelos Angelica Alvarado 3" className="w-full h-56 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/620e205f-83ad-4326-a0da-0453e4e12ae9/6cc3c8121ed7ff12af06047851cff0e9.jpg" />
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
