import React, { useState } from "react";
import Categoria from "./pages/Categoria";
import Footer from "./components/footer";
import WhatsAppButton from "./components/whatsapp";

const App = () => {
  const [categoria, setCategoria] = useState("Home"); // Estado para la categoría seleccionada
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú hamburguesa

  const handleMenuClick = (newCategoria) => {
    setCategoria(newCategoria); // Cambia la categoría seleccionada
    setIsMenuOpen(false); // Cierra el menú en pantallas pequeñas
  };

  return (
    <>
      <div>
        {/* Menú de navegación */}
        <div className="bg-white text-black flex flex-col items-center p-4 ">
          {/* Título centrado */}
          <p
            className="text-3xl font-bold cursor-pointer hover:text-gray-300 mb-4"
            onClick={() => handleMenuClick("Home")}
          >
            PUNTOCREATIVO
          </p>
          <WhatsAppButton />
          {/* Menú de navegación */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
          <ul
            className={`md:flex gap-6 w-full md:w-auto text-center  md:bg-transparent transition-all duration-300 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <li
              className="font-semibold cursor-pointer hover:text-gray-300 py-2"
              onClick={() => handleMenuClick("FUENTES")}
            >
              FUENTES
            </li>
            <li
              className="font-semibold cursor-pointer hover:text-gray-300 py-2"
              onClick={() => handleMenuClick("CHIMENEAS")}
            >
              CHIMENEAS
            </li>
            <li
              className="font-semibold cursor-pointer hover:text-gray-300 py-2"
              onClick={() => handleMenuClick("FICTICIOS")}
            >
              FICTICIOS
            </li>
            <li
              className="font-semibold cursor-pointer hover:text-gray-300 py-2"
              onClick={() => handleMenuClick("MERCHANDISING")}
            >
              MERCHANDISING
            </li>
          </ul>
        </div>

        {/* Contenido basado en la categoría seleccionada */}
        <Categoria categoria={categoria} />
      </div>
      <Footer />
    </>
  );
};

export default App;
