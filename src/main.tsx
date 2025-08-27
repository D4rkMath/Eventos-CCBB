import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// main.tsx: Punto de entrada de la aplicación Científica Flix
// Inicializa la aplicación React usando Vite, React, Shadcn y TypeScript
// Renderiza el componente App en el elemento #root del DOM

createRoot(document.getElementById("root")!).render(<App />);
