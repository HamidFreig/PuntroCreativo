import React from "react";
import terraza from "../img/terraza.jfif"; // Importa la imagen

const PagPrincipal = () => {
  return (
    <div className="relative">
      {/* Imagen de fondo */}
      <img
        src={terraza}
        alt="Decoración creativa"
        className="w-full h-[400px] object-cover"
      />
      {/* Texto sobre la imagen */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center bg-black bg-opacity-50 p-4 rounded-lg shadow-lg">
          Deja que la originalidad sea el sello de tu marca personal
        </h1>
      </div>
    </div>
  );
};

export default PagPrincipal;
