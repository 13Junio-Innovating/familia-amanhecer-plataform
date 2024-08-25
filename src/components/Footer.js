import React from 'react';
import logo from '../assests/logo.jpg';

const Footer = () => {
  return (
    <footer className="fixed right-0 left-0 bottom-0 w-full bg-gray-800 text-white py-1">
  <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
    <img src={logo} alt="Logo Família Amanhecer" className="h-12" />
    <div className="text-right">
      <p>© 2024 Família Amanhecer. Todos os direitos reservados.</p>
    </div>
  </div>
</footer>

  );
};

export default Footer;
