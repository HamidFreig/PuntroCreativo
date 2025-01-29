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

  // Asegurar que la imagen es accesible públicamente
  const imagenURL = producto.foto.startsWith("http")
    ? producto.foto
    : `${window.location.origin}${producto.foto}`;

  // Mensaje prellenado para WhatsApp con la imagen al inicio
  const mensajeWhatsapp = `${imagenURL}

Hola! Estoy interesado en el producto "${producto.titulo}". ¿Podrías darme más información?`;

  const whatsappURL = `https://wa.me/935974865?text=${encodeURIComponent(
    mensajeWhatsapp
  )}`;

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-xl shadow-lg">
      {/* Botón para volver atrás */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 bg-gray-700 text-white font-medium text-md py-2 px-4 rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
      >
        <MdArrowBack size={22} /> Volver
      </button>

      {/* Contenido Principal */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left mt-6">
        {/* Imagen del Producto con "Oferta" en la parte superior */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          {/* Imagen */}
          <img
            src={imagenURL}
            alt={producto.titulo}
            className="w-full max-w-sm h-auto object-cover rounded-lg shadow-md"
          />

          {/* Cinta de Oferta con degradado */}
          {producto.oferta && (
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-bold py-2 text-center shadow-md">
              🔥 ¡OFERTA ESPECIAL!
            </div>
          )}
        </div>

        {/* Detalles del Producto */}
        <div className="w-full md:w-1/2 bg-gray-100 p-5 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-900">
            {producto.titulo}
          </h1>
          <p className="text-gray-600 text-lg mt-3">{producto.descripcion}</p>

          <div className="flex justify-center md:justify-start items-center gap-4 mt-5">
            <p className="text-3xl font-semibold text-green-600">
              ${producto.precio.toLocaleString()}
            </p>
          </div>

          {/* Botón de WhatsApp dentro de la card */}
          <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-3 bg-green-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all duration-300 w-full"
          >
            <FaWhatsapp size={24} /> Consultar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Producto;
