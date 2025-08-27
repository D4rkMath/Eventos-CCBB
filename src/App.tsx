
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ContentDetails from "./pages/ContentDetails";
import NotFound from "./pages/NotFound";

// App.tsx: Componente principal de Científica Flix
// Configura el enrutamiento y la gestión de datos con React Query y React Router
// Incluye proveedores para tooltips y notificaciones (Shadcn UI)

const queryClient = new QueryClient(); // Instancia de QueryClient para gestionar consultas de datos

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* Proveedor de tooltips para la interfaz de usuario */}
    <TooltipProvider>
      {/* Componentes de notificación: Toaster para mensajes y Sonner para alertas */}
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Definición de rutas para la navegación */}
        <Routes>
          <Route path="/" element={<Index />} />{/* Página principal */}
          <Route path="/content/:id" element={<ContentDetails />} />{/* Detalles de contenido con ID dinámico */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          {/* Añadir rutas personalizadas antes de la ruta catch-all */}
          <Route path="*" element={<NotFound />} /> {/* Página 404 para rutas no encontradas */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App; // Exporta el componente App como predeterminado
