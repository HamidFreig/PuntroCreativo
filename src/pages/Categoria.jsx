import React, { useEffect, useState } from "react";
import data from "../data/data.json"; // Importa el archivo JSON
import PagPrincipal from "./PagPrincipal";

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
      <PagPrincipal />
      <h1 className="text-3xl font-bold text-center my-6">{categoria}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="item-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.foto}
              alt={item.titulo}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {item.titulo}
              </h2>
              <p className="text-sm text-gray-600 mt-2">{item.descripcion}</p>
              <p className="text-xl font-bold text-blue-600 mt-4">
                ${item.precio.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categoria;
