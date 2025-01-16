import React, { useState } from "react";
import Categoria from "./pages/Categoria";

const App = () => {
  const [categoria, setCategoria] = useState("Home"); // Estado para la categoría seleccionada

  const handleMenuClick = (newCategoria) => {
    setCategoria(newCategoria); // Cambia la categoría seleccionada
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
        <ul className="flex gap-6">
          <li
            className="font-semibold cursor-pointer hover:text-gray-300"
            onClick={() => handleMenuClick("FUENTES")}
          >
            FUENTES
          </li>
          <li
            className="font-semibold cursor-pointer hover:text-gray-300"
            onClick={() => handleMenuClick("CHIMENEAS")}
          >
            CHIMENEAS
          </li>
          <li
            className="font-semibold cursor-pointer hover:text-gray-300"
            onClick={() => handleMenuClick("FICTICIOS")}
          >
            FICTICIOS
          </li>
          <li
            className="font-semibold cursor-pointer hover:text-gray-300"
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
