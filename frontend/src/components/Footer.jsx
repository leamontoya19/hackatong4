import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 px-4 md:px-0">
        {/* Sección del logo a la izquierda */}
        <div className="flex items-center space-x-3">
          <img
            src="/src/assets/icons/logoES-transparente.png" // Asegúrate de que la ruta sea correcta
            alt="Logo"
            className="w-12 h-12"
          />
          <span className="text-lg font-bold">EasySpain</span>
        </div>

        {/* Texto central de derechos de autor */}
        <div className="text-center">
          <p className="text-sm md:text-base">
            © 2024 | All Rights Reserved | EasySpain
          </p>
        </div>

        {/* Vínculos de redes sociales a la derecha */}
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/src/assets/icons/logoIgGato.png" // Asegúrate de que la ruta sea correcta
              alt="Instagram Logo"
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/../src/assets/icons/5365678_fb_facebook_facebook logo_icon.png" // Asegúrate de que la ruta sea correcta
              alt="Facebook Logo"
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </a>
          <a
            href="https://www.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/../src/assets/icons/whatsapp_logo_icon.png"
              alt="WhatsApp Logo"
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="../assets/icons/twitter_logo_icon.png" // Añade el ícono de X/Twitter
              alt="Twitter Logo"
              className="w-6 h-6 md:w-8 md:h-8"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
