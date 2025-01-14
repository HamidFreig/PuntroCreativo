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
      <div className="menu">
        <p
          className="logo"
          onClick={() => handleMenuClick("Home")} // Vuelve al menú principal
        >
          PUNTOCREATIVO
        </p>
        <ul>
          <li onClick={() => handleMenuClick("FUENTES")}>FUENTES</li>
          <li onClick={() => handleMenuClick("CHIMENEAS")}>CHIMENEAS</li>
          <li onClick={() => handleMenuClick("FICTICIOS")}>FICTICIOS</li>
          <li onClick={() => handleMenuClick("MERCHANDISING")}>
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
