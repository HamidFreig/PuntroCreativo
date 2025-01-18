import React, { useState } from "react";
import Categoria from "./pages/Categoria";

const App = () => {
  const [categoria, setCategoria] = useState("Home"); // Estado para la categoría seleccionada
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú hamburguesa

  const handleMenuClick = (newCategoria) => {
    setCategoria(newCategoria); // Cambia la categoría seleccionada
    setIsMenuOpen(false); // Cierra el menú en pantallas pequeñas
  };

  return (
    <div>
      {/* Menú de navegación */}
      <div className="menu bg-gray-800 text-white p-4 flex justify-between items-center">
        <p
          className="logo text-2xl font-bold cursor-pointer hover:text-gray-300"
          onClick={() => handleMenuClick("Home")}
        >
          PUNTOCREATIVO
        </p>
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        <ul
          className={`md:flex gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li
            className="font-semibold cursor-pointer hover:text-gray-300 p-2 md:p-0"
            onClick={() => handleMenuClick("FUENTES")}
          >
            FUENTES
          </li>
          <li
            className="font-semibold cursor-pointer hover:text-gray-300 p-2 md:p-0"
            onClick={() => handleMenuClick("CHIMENEAS")}
          >
            CHIMENEAS
          </li>
          <li
            className="font-semibold cursor-pointer hover:text-gray-300 p-2 md:p-0"
            onClick={() => handleMenuClick("FICTICIOS")}
          >
            FICTICIOS
          </li>
          <li
            className="font-semibold cursor-pointer hover:text-gray-300 p-2 md:p-0"
            onClick={() => handleMenuClick("MERCHANDISING")}
          >
            MERCHANDISING
          </li>
        </ul>
      </div>

      {/* Contenido basado en la categoría seleccionada */}
      <Categoria categoria={categoria} />
    </div>
  );
};

export default App;
