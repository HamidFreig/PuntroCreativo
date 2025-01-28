import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Categoria from "./pages/Categoria";
import Producto from "./pages/Producto";
import Footer from "./components/footer";

const App = () => {
  const [categoria, setCategoria] = useState("Home");

  // Función para manejar el cambio de categoría
  const handleCategoryChange = (newCategoria) => {
    setCategoria(newCategoria); // Cambia la categoría seleccionada
  };

  return (
    <>
      {/* Navbar */}
      <Navbar onCategoryChange={handleCategoryChange} />

      {/* Rutas */}
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<Categoria categoria={categoria} />} />

        {/* Ruta dinámica para categorías */}
        <Route path="/categoria/:categoria" element={<Categoria />} />

        {/* Ruta para el detalle de productos */}
        <Route path="/producto/:id" element={<Producto />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
