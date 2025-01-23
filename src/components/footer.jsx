import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información de Contacto */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contáctanos</h4>
            <ul>
              <li className="flex items-center mb-3">
                <i className="fas fa-map-marker-alt text-red-500 mr-3"></i>
                <span>123 Calle Ejemplo, Ciudad, País</span>
              </li>
              <li className="flex items-center mb-3">
                <i className="fas fa-envelope text-red-500 mr-3"></i>
                <span>contacto@ejemplo.com</span>
              </li>
              <li className="flex items-center">
                <i className="fab fa-whatsapp text-green-500 mr-3"></i>
                <span>+123 456 789</span>
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
                className="text-gray-400 hover:text-red-500 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a
                href="https://www.instagram.com"
                className="text-gray-400 hover:text-red-500 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="https://www.twitter.com"
                className="text-gray-400 hover:text-red-500 transition"
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
          © {new Date().getFullYear()} Tu Empresa. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
