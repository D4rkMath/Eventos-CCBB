
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ContentCard from "./ContentCard";

// ContentCarousel.tsx: Componente para el carrusel de contenido en Científica Flix
// Muestra una categoría con tarjetas desplazables horizontalmente
// Extraído de Index.tsx como parte de un refactor para mejorar modularidad
// Parte del stack Vite, React, Shadcn, TypeScript

interface ContentCarouselProps {
  category: {
    id: number;
    name: string;
  }; // Categoría del carrusel
  cards: Array<{
    id: number;
    title: string;
    imageUrl: string;
  }>; // Array de tarjetas a mostrar
  carouselIndex: number;  // Índice del carrusel (no usado actualmente)
}

const ContentCarousel = ({ category, cards, carouselIndex }: ContentCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);  // Referencia al contenedor del carrusel

  // Maneja el desplazamiento del carrusel (80% del ancho)
  const scroll = (direction: "left" | "right") => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    
    const scrollAmount = direction === "left" 
      ? -carousel.clientWidth * 0.8 
      : carousel.clientWidth * 0.8;
    
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="px-4 md:px-12 mb-8">
      <h2 className="text-xl font-medium mb-2 text-white">{category.name}</h2>
      
      <div className="carousel-container">
        {/* Botón de desplazamiento izquierdo */}
        <button 
          className="carousel-button left-0" 
          onClick={() => scroll("left")}
        >
          <ChevronLeft size={30} />
        </button>
        
        {/* Pista del carrusel con tarjetas */}
        <div 
          className="carousel-track" 
          ref={carouselRef}
        >
          {cards.map(item => (
            <ContentCard 
              key={item.id}
              id={item.id}
              title={item.title}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
        
        {/* Botón de desplazamiento derecho */}
        <button 
          className="carousel-button right-0" 
          onClick={() => scroll("right")}
        >
          <ChevronRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default ContentCarousel;   // Exporta el componente como predeterminado
