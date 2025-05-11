
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Building, Flag, User } from "lucide-react";

function InstagramFeed() {
  const newsLinks = [
    {
      id: 1,
      name: "NotiCoro",
      url: "https://www.instagram.com/noti_coro/?hl=es",
      icon: <ExternalLink className="w-5 h-5 mr-2 text-orange-600" />,
      description: "Noticias generales de Coro y Falcón."
    },
    {
      id: 2,
      name: "Alcaldía de Miranda",
      url: "https://www.instagram.com/alcaldiademirandacoro/?hl=es",
      icon: <Building className="w-5 h-5 mr-2 text-orange-600" />,
      description: "Información oficial del municipio."
    },
    {
      id: 3,
      name: "Gobernación de Falcón",
      url: "https://www.instagram.com/gobierno_falcon/?hl=es",
      icon: <Flag className="w-5 h-5 mr-2 text-orange-600" />,
      description: "Actualizaciones del gobierno regional."
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-orange-800 text-center mb-4">Noticias y Enlaces de Interés</h2>
        <p className="text-center text-gray-600">Mantente informado con las fuentes oficiales y locales.</p>
      </div>

      <div className="space-y-4">
        {newsLinks.map((link, index) => (
          <motion.div
            key={link.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-orange-50 rounded-lg p-4 hover:shadow-md transition-shadow border border-orange-100"
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between group"
            >
              <div className="flex items-center">
                {link.icon}
                <div>
                  <h3 className="text-lg font-semibold text-orange-700 group-hover:text-orange-900 transition-colors">{link.name}</h3>
                  <p className="text-sm text-gray-600">{link.description}</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-orange-500 group-hover:text-orange-700 transition-colors" />
            </a>
          </motion.div>
        ))}
        
        {/* Mención al Gobernador */}
         <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: newsLinks.length * 0.1 }}
            className="bg-orange-50 rounded-lg p-4 border border-orange-100"
          >
             <div className="flex items-center">
               <User className="w-5 h-5 mr-2 text-orange-600" />
               <div>
                 <h3 className="text-lg font-semibold text-orange-700">Gobernador Victor Clark</h3>
                 <p className="text-sm text-gray-600">Líder regional del Estado Falcón.</p>
               </div>
             </div>
          </motion.div>

      </div>
    </div>
  );
}

export default InstagramFeed;
