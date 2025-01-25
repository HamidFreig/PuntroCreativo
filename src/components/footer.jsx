import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Importa Font Awesome

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información de Contacto */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contáctanos</h4>
            <ul>
              <li className="flex items-center mb-3">
                <i className="fas fa-map-marker-alt text-red-500 mr-3"></i>
                <span>Maipú, Santiago</span>
              </li>
              <li className="flex items-center mb-3">
                <i className="fas fa-envelope text-red-500 mr-3"></i>
                <span>Puntocreativok@hotmail.com</span>
              </li>
              <li className="flex items-center">
                <i className="fab fa-whatsapp text-green-500 mr-3"></i>
                <span>+569 2243 8518</span>
              </li>
            </ul>
          </div>

          {/* Sobre la Empresa */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">
              Sobre Nosotros
            </h4>
            <p className="text-sm text-gray-400">
              Somos especialistas en productos de publicidad y decoración,
              ofreciendo soluciones creativas para potenciar tu marca.
            </p>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                className="text-gray-400 hover:text-blue-500 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a
                href="https://www.instagram.com"
                className="text-gray-400 hover:text-pink-500 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="https://www.twitter.com"
                className="text-gray-400 hover:text-blue-400 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=123456789"
                className="text-gray-400 hover:text-green-500 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} PuntoCreativo. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
