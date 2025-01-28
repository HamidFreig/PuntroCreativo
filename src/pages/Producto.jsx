import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.json";

const Producto = () => {
  const { id } = useParams(); // Obtiene el ID del producto desde la URL
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    // Busca el producto por ID
    for (const categoria in data) {
      const found = data[categoria].find((item) => item.id === parseInt(id));
      if (found) {
        setProducto(found);
        break;
      }
    }
  }, [id]);

  if (!producto) {
    return <p className="text-center text-lg mt-10">Producto no encontrado.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-xl shadow-lg">
      <img
        src={producto.foto}
        alt={producto.titulo}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-6">{producto.titulo}</h1>
      <p className="text-gray-600 mt-4">{producto.descripcion}</p>
      <p className="text-2xl font-semibold mt-4">
        ${producto.precio.toLocaleString()}
      </p>
      <button className="mt-5 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300">
        Comprar
      </button>
    </div>
  );
};

export default Producto;
