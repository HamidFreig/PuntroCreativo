import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from "./whatsapp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Hook para cambiar rutas

  const handleMenuClick = (category) => {
    setIsMenuOpen(false); // Cierra el menú
    navigate(`/categoria/${category}`); // Cambia la URL a la categoría seleccionada
  };

  return (
    <div className="bg-white text-black flex flex-col items-center p-4">
      <p
        className="text-3xl font-bold cursor-pointer hover:text-gray-300 mb-4"
        onClick={() => handleMenuClick("Home")}
      >
        PUNTOCREATIVO
      </p>
      <WhatsAppButton />
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
