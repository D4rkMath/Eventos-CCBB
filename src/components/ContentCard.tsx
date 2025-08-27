
import React from "react";
import { Play, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

// ContentCard.tsx: Componente para tarjetas de contenido en el carrusel de Científica Flix
// Muestra una imagen, título y botones Play/Info, con navegación a detalles al hacer clic
// Parte del stack Vite, React, Shadcn, TypeScript

interface ContentCardProps {
id: number; // Identificador único del contenido
  title: string; // Título del contenido
  imageUrl: string; // URL de la imagen asociada
}

const ContentCard = ({ id, title, imageUrl }: ContentCardProps) => {
  const navigate = useNavigate(); // Hook para navegación programática
  
  const handleCardClick = () => {
    navigate(`/content/${id}`); // Redirige a la página de detalles
  };

  return (
    <div className="card-container w-[220px] md:w-[260px]">
      <div className="netflix-card group" onClick={handleCardClick}>
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full aspect-video object-cover rounded"
        />
        <div className="netflix-card-overlay">
          <h3 className="text-sm font-medium mb-2">{title}</h3>
          <div className="flex items-center gap-2">
            <button className="button-play p-1">
              <Play size={16} />
            </button>
            <button className="button-info">
              <Info size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;  // Exporta el componente como predeterminado
