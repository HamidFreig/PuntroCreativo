import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../data/data.json";
import { MdArrowBack } from "react-icons/md"; // Icono para volver atrás
import { FaWhatsapp } from "react-icons/fa"; // Icono de WhatsApp

const Producto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    for (const categoria in data) {
      const found = data[categoria].find((item) => item.id === parseInt(id));
      if (found) {
        setProducto(found);
        break;
      }
    }
  }, [id]);

  if (!producto) {
    return (
      <p className="text-center text-lg font-semibold mt-10">
        Producto no encontrado.
      </p>
    );
  }

  // Mensaje prellenado para WhatsApp con el nombre del producto
  const mensajeWhatsapp = `Hola! Estoy interesado en el producto "${producto.titulo}". ¿Podrías darme más información?`;
  const whatsappURL = `https://wa.me/1234567890?text=${encodeURIComponent(
    mensajeWhatsapp
  )}`; // Reemplaza con tu número real de WhatsApp

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-xl shadow-lg">
      {/* Botón para volver atrás */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center justify-center gap-3 bg-gray-800 text-white font-semibold text-lg py-3 px-6 rounded-lg shadow-md hover:bg-gray-900 transition duration-300"
      >
        <MdArrowBack size={28} /> Volver
      </button>

      {/* Contenido Principal */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left mt-6">
        {/* Imagen del Producto */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={producto.foto}
            alt={producto.titulo}
            className="w-full max-w-sm h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Detalles del Producto */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-900">
            {producto.titulo}
          </h1>
          <p className="text-gray-600 text-lg mt-3">{producto.descripcion}</p>

          <div className="flex justify-center md:justify-start items-center gap-4 mt-5">
            <p className="text-3xl font-semibold text-green-600">
              ${producto.precio.toLocaleString()}
            </p>
            {producto.oferta && (
              <span className="bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-md">
                Oferta
              </span>
            )}
          </div>

          {/* Botón de WhatsApp para consultar (dentro de la card) */}
          <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-3 bg-green-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all duration-300 w-full md:w-auto"
          >
            <FaWhatsapp size={24} /> Consultar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Producto;
