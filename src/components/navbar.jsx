import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import WhatsAppButton from "./whatsapp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (category) => {
    setIsMenuOpen(false);
    if (category === "Home") {
      navigate("/"); // Navega al home si la categoría es Home
    } else {
      navigate(`/categoria/${category}`); // Navega a la categoría seleccionada
    }
  };

  // Mostrar WhatsAppButton solo en "/" y "/categoria/:categoria"
  const mostrarWhatsApp =
    location.pathname === "/" || location.pathname.startsWith("/categoria/");

  // Verificar la categoría activa basada en la URL
  const isActiveCategory = (category) => {
    return (
      location.pathname === `/categoria/${category}` ||
      (category === "Home" && location.pathname === "/")
    );
  };

  return (
    <div className="bg-white text-black flex flex-col items-center p-4 shadow-md">
      <p
        className={`text-3xl font-bold cursor-pointer mb-4 transition-colors duration-300 ${
          isActiveCategory("Home") ? "text-black" : "hover:text-gray-400"
        }`}
        onClick={() => handleMenuClick("Home")}
      >
        PUNTO<span className="text-red-500">CREATIVO</span>
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
              className={`font-semibold cursor-pointer py-2 transition-colors duration-300 ${
                isActiveCategory(category)
                  ? "text-black border-b-2 border-red-500"
                  : "text-gray-600 hover:text-black"
              }`}
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
