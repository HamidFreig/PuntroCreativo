import React from "react";
import { Link } from "react-router-dom";

const PagPrincipal = () => {
  return (
    <div>
      <h1>Punto Creativo</h1>
      <ul>
        <li>
          <Link to="/categoria/FUENTES">Fuentes</Link>
        </li>
        <li>
          <Link to="/categoria/CHIMENEAS">Chimeneas</Link>
        </li>
        <li>
          <Link to="/categoria/FICTICIOS">Ficticios</Link>
        </li>
        <li>
          <Link to="/categoria/MERCHANDISING">Merchandising</Link>
        </li>
      </ul>
    </div>
  );
};

export default PagPrincipal;
