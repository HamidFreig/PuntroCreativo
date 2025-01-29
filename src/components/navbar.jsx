import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Importamos useLocation
import WhatsAppButton from "./whatsapp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Obtenemos la ruta actual

  const handleMenuClick = (category) => {
    setIsMenuOpen(false); // Cierra el menú
    navigate(`/categoria/${category}`); // Navega a la categoría seleccionada
  };

  // Mostrar WhatsAppButton solo en "/" y "/categoria/:categoria"
  const mostrarWhatsApp =
    location.pathname === "/" || location.pathname.startsWith("/categoria/");

  return (
    <div className="bg-white text-black flex flex-col items-center p-4">
      <p
        className="text-3xl font-bold cursor-pointer hover:text-gray-300 mb-4"
        onClick={() => handleMenuClick("Home")}
      >
        PUNTOCREATIVO
      </p>

      {/* WhatsApp solo en la página principal o en una categoría */}
      {mostrarWhatsApp && <WhatsAppButton />}

      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      <ul
        className={`md:flex gap-6 w-full md:w-auto text-center md:bg-transparent transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {["FUENTES", "CHIMENEAS", "FICTICIOS", "MERCHANDISING"].map(
          (category) => (
            <li
              key={category}
              className="font-semibold cursor-pointer hover:text-gray-300 py-2"
              onClick={() => handleMenuClick(category)}
            >
              {category}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Navbar;
