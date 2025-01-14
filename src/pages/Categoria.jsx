import React, { useEffect, useState } from "react";
import data from "../data/data.json"; // Importa el archivo JSON

const Categoria = ({ categoria }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Carga los datos de la categoría seleccionada
    if (data[categoria]) {
      setItems(data[categoria]);
    }
  }, [categoria]);

  if (!items.length) {
    return <p>No hay productos en esta categoría.</p>;
  }

  return (
    <div>
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
