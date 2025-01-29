import React from "react";

const Oferta = () => {
  return (
    <div
      className="absolute top-0 left-0 right-0 bg-gradient-to-r from-red-600 to-orange-500 text-white text-sm font-bold py-2 text-center shadow-md uppercase tracking-wide"
      style={{
        zIndex: 10,
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
      }}
    >
      🔥 ¡OFERTA ESPECIAL!
    </div>
  );
};

export default Oferta;
