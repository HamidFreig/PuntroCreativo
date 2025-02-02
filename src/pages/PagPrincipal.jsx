import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";

const categories = [
  { img: img1, title: "CHIMENEAS" },
  { img: img2, title: "FUENTES" },
  { img: img3, title: "FICTICIOS" },
  { img: img4, title: "MERCHANDISING" },
];

const PagPrincipal = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/categoria/${category}`);
  };

  return (
    <div className="w-full flex flex-wrap md:flex-nowrap gap-4 p-4 ">
      {/* Agregamos mt-20 para separar el contenido del Navbar */}
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative group overflow-hidden h-[250px] w-full md:h-[500px] md:flex-1 cursor-pointer rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-500"
          onClick={() => handleCategoryClick(category.title)}
        >
          <img
            src={category.img}
            alt={category.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center transition duration-500 group-hover:bg-black/60">
            <h2 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-wider transition-transform duration-500 group-hover:scale-110 ">
              {category.title}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PagPrincipal;
