import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Asegúrate de importar Font Awesome

const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=+56922438518&text=¡Hola! Tengo una consulta."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-4 flex items-center bg-green-500 text-white rounded-full px-4 py-3 shadow-lg hover:bg-green-600 transition"
      style={{ zIndex: 1000 }}
    >
      <i className="fab fa-whatsapp text-2xl"></i>
      <span className="text-sm font-medium ml-3 hidden md:inline">
        Consultas por acá
      </span>
    </a>
  );
};

export default WhatsAppButton;
