import React, { useEffect, useState } from "react";
import data from "../data/data.json"; // Importa el archivo JSON
import PagPrincipal from "./PagPrincipal";
import Oferta from "../helpers/oferta";

const Categoria = ({ categoria }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Carga los datos de la categoría seleccionada
    if (data[categoria]) {
      setItems(data[categoria]);
    }
  }, [categoria]);

  // Si la categoría es "Home", muestra la página principal
  if (categoria === "Home") {
    return <PagPrincipal />;
  }

  // Si no hay productos en la categoría, muestra un mensaje
  if (!items.length) {
    return <p>No hay productos en esta categoría.</p>;
  }

  // Renderiza los productos de la categoría
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-6"></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  mx-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="item-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
          >
            {item.oferta ? <Oferta /> : null}{" "}
            {/* Este será el componente de la etiqueta "Oferta" */}
            <img
              src={item.foto}
              alt={item.titulo}
              className="h-56 w-full object-cover" // Foto más larga
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 text-center">
                {item.titulo}
              </h2>
              <p className="text-base text-gray-600 mt-3 text-center">
                {item.descripcion}
              </p>
              <p className="text-2xl font-semibold text-black mt-5 text-center">
                ${item.precio.toLocaleString()}
              </p>
              <button className="mt-5 w-full bg-green-600 text-white py-2 px-4 rounded-lg text-base font-semibold hover:bg-green-700 transition-colors duration-300">
                Ver más
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categoria;
