import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import PagPrincipal from "./pages/PagPrincipal";
import Categoria from "./pages/Categoria";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PagPrincipal />} />
        <Route path="/categoria/:nombre" element={<CategoriaWrapper />} />
      </Routes>
    </Router>
  );
};

// Wrapper para pasar la categoría al componente Categoria
const CategoriaWrapper = () => {
  const { nombre } = useParams();
  return <Categoria categoria={nombre.toUpperCase()} />;
};

export default App;
