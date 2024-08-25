import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cadastrar = () => {
  const [formData, setFormData] = useState({ nome: '', email: '', senha: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newUser = {
      email: formData.email,
      senha: formData.senha,
    };
  
    // Armazenar dados no localStorage
    localStorage.setItem('user', JSON.stringify(newUser));
  
    // Redirecionar para a página de login após o registro
    navigate('/login');
  };
  
  return (
    <div className="max-w-md mx-auto mt-40 ml-20 p-6 bg-white bg-opacity-50 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Cadastrar</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nome" className="block text-sm font-medium mb-1">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="senha" className="block text-sm font-medium mb-1">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastrar;
