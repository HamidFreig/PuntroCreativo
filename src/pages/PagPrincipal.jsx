import React from "react";
import img1 from "../img/img1.jpg"; // Imagen para CHIMENEAS
import img2 from "../img/img2.jpg"; // Imagen para FUENTES
import img3 from "../img/img3.jpg"; // Imagen para FICTICIOS
import img4 from "../img/img4.jpg"; // Imagen para MERCHANDISING

const categories = [
  { img: img1, title: "CHIMENEAS" },
  { img: img2, title: "FUENTES" },
  { img: img3, title: "FICTICIOS" },
  { img: img4, title: "MERCHANDISING" },
];

const PagPrincipal = () => {
  return (
    <div className="w-full flex flex-wrap md:flex-nowrap">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative group overflow-hidden h-[200px] w-full md:h-[500px] md:flex-1"
        >
          {/* Imagen */}
          <img
            src={category.img}
            alt={category.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {/* Texto superpuesto */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-white text-3xl md:text-4xl font-bold uppercase transition-opacity duration-300 group-hover:opacity-100">
              {category.title}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PagPrincipal;
