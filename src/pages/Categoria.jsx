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
      <h1>{categoria}</h1>
      <div className="category-items">
        {items.map((item, index) => (
          <div key={index} className="item-card">
            <img src={item.foto} alt={item.titulo} />
            <h2>{item.titulo}</h2>
            <p>{item.descripcion}</p>
            <p>${item.precio.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categoria;
