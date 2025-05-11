
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { PlusCircle } from 'lucide-react';

function Blog() {
  const { toast } = useToast();
  const [blogPosts, setBlogPosts] = useState([]);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventExcerpt, setNewEventExcerpt] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Load posts from localStorage on initial render
  useEffect(() => {
    const storedPosts = localStorage.getItem("blogPosts");
    if (storedPosts) {
      try {
          const parsedPosts = JSON.parse(storedPosts);
          // Basic validation: check if it's an array
          if (Array.isArray(parsedPosts)) {
            setBlogPosts(parsedPosts);
          } else {
             console.error("Stored blog posts data is not an array:", parsedPosts);
             localStorage.removeItem("blogPosts"); // Clear invalid data
             setBlogPosts(getDefaultPosts()); // Reset to default
          }
      } catch (error) {
          console.error("Error parsing blog posts from localStorage:", error);
          localStorage.removeItem("blogPosts"); // Clear corrupted data
          setBlogPosts(getDefaultPosts()); // Reset to default
      }
    } else {
       setBlogPosts(getDefaultPosts()); // Set default posts if nothing is stored
    }
  }, []);

  // Save posts to localStorage whenever they change
  useEffect(() => {
    if (blogPosts.length > 0 || localStorage.getItem("blogPosts")) { // Only save if there are posts or if LS wasn't empty
      localStorage.setItem("blogPosts", JSON.stringify(blogPosts));
    }
  }, [blogPosts]);

  const getDefaultPosts = () => [
     {
      id: 1,
      title: "Celebración del Día de las Madres",
      date: "15 de Mayo, 2025",
      excerpt: "Una hermosa celebración donde homenajeamos a todas las madres de nuestra casa...",
      description: "Celebración día de las madres con flores y decoración",
      imageSrc: "/img/Image1.jpeg"
    },
    {
      id: 2,
      title: "Taller de Tejido",
      date: "10 de Mayo, 2025",
      excerpt: "Nuestros abuelos aprendieron nuevas técnicas de tejido en un ambiente divertido...",
      description: "Grupo de adultos mayores aprendiendo a tejer",
      imageSrc: "/img/Image2.jpeg"
    },
    {
      id: 3,
      title: "Excursión al Parque Nacional",
      date: "5 de Mayo, 2025",
      excerpt: "Una maravillosa experiencia en contacto con la naturaleza...",
      description: "Grupo de adultos mayores disfrutando de un día en el parque",
      imageSrc: "/img/Image3.jpeg"
    }
  ];

  const handleAddEvent = () => {
    if (!newEventTitle.trim() || !newEventExcerpt.trim()) {
      toast({
        title: "Error",
        description: "Por favor, complete el título y el extracto del evento.",
        variant: "destructive",
      });
      return;
    }

    const newEvent = {
      id: Date.now(), // Use timestamp for a simple unique ID
      title: newEventTitle,
      date: new Date().toLocaleDateString("es-VE", { // Format date for Venezuela
        year: 'numeric', month: 'long', day: 'numeric'
      }),
      excerpt: newEventExcerpt,
      description: `Evento sobre ${newEventTitle}`,
      imageSrc: `https://images.unsplash.com/photo-1697256200022-f61abccad430` // Default placeholder
    };

    setBlogPosts([newEvent, ...blogPosts]); // Add new event to the beginning
    setNewEventTitle("");
    setNewEventExcerpt("");
    setIsDialogOpen(false); // Close the dialog

    toast({
      title: "Éxito",
      description: "Nuevo evento agregado correctamente.",
      className: "bg-green-100 text-green-800",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 flex flex-col sm:flex-row justify-between items-center"
      >
        <div>
          <h1 className="text-4xl font-bold text-orange-800 mb-2">Nuestro Blog</h1>
          <p className="text-xl text-gray-600">Compartiendo momentos especiales y experiencias</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
             <Button className="mt-4 sm:mt-0 bg-orange-600 hover:bg-orange-700 text-white">
              <PlusCircle className="mr-2 h-4 w-4" /> Añadir Evento
             </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-white">
            <DialogHeader>
              <DialogTitle className="text-orange-800">Añadir Nuevo Evento</DialogTitle>
              <DialogDescription>
                Complete los detalles del nuevo evento o actividad.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right text-orange-700">
                  Título
                </Label>
                <Input
                  id="title"
                  value={newEventTitle}
                  onChange={(e) => setNewEventTitle(e.target.value)}
                  className="col-span-3 border-orange-300 focus:border-orange-500 focus:ring-orange-500"
                  placeholder="Ej: Tarde de Bingo"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="excerpt" className="text-right text-orange-700">
                  Extracto
                </Label>
                <Textarea
                  id="excerpt"
                  value={newEventExcerpt}
                  onChange={(e) => setNewEventExcerpt(e.target.value)}
                  className="col-span-3 border-orange-300 focus:border-orange-500 focus:ring-orange-500"
                  placeholder="Ej: Una divertida tarde compartiendo y jugando bingo..."
                />
              </div>
            </div>
            <DialogFooter>
               <DialogClose asChild>
                 <Button variant="outline">Cancelar</Button>
               </DialogClose>
              <Button onClick={handleAddEvent} className="bg-orange-600 hover:bg-orange-700">Guardar Evento</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.length === 0 ? (
           <p className="col-span-full text-center text-gray-500">No hay eventos para mostrar aún. ¡Añade el primero!</p>
        ) : (
          blogPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              layout // Add layout animation for smooth addition/removal
              className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col"
            >
              <img  
                alt={post.description}
                className="w-full h-48 object-cover"
                src={post.imageSrc || "https://i.imgur.com/Ah9XWM0.jpeg"} />
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-orange-800 mb-2">{post.title}</h2>
                <p className="text-gray-500 text-sm mb-4">{post.date}</p>
                <p className="text-gray-700 flex-grow">{post.excerpt}</p>
                <button className="mt-4 text-orange-600 hover:text-orange-800 font-semibold self-start">
                  Leer más →
                </button>
              </div>
            </motion.article>
          ))
        )}
      </div>
    </div>
  );
}

export default Blog;
