import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-50 text-white shadow-md z-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">Família Amanhecer</div>
        <div className="space-x-4">
          <Link to="/login" className="hover:bg-gray-700 px-4 py-2 rounded">Entrar</Link>
          <Link to="/cadastrar" className="hover:bg-gray-700 px-4 py-2 rounded">Cadastrar</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
