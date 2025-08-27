
import React from "react";

// Footer.tsx: Componente para el pie de página de Científica Flix
// Muestra enlaces de soporte y copyright, extraído de Index.tsx en un refactor
// Parte del stack Vite, React, Shadcn, TypeScript

const Footer = () => {
  return (
    <footer className="py-8 px-4 md:px-12 text-cientifica-gray text-sm">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex gap-2 mb-4">
          <a href="#" className="hover:text-white">Preguntas frecuentessssssssss</a>
          <span>•</span>
          <a href="#" className="hover:text-white">Centro de ayuda</a>
          <span>•</span>
          <a href="#" className="hover:text-white">Términos de uso</a>
        </div>
        <p>© 2025 Científica-Flix, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;  // Exporta el componente como predeterminado
