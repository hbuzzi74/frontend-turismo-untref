import React, { useState } from "react";
import logo from "../assets/logoglm.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-green-900 p-4 flex justify-between items-center text-white fixed top-0 w-full z-50 shadow-lg">
        {/* Logo con padding desde el borde izquierdo */}
        <div className="text-xl flex items-center pl-6">
          <img src={logo} alt="Logo" className="h-16 w-auto mr-6" />
        </div>

        {/* Botón hamburguesa para móviles */}
        <button
          className="text-white text-2xl md:hidden pr-6"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Contenedor de barra de búsqueda y navegación */}
        {/* <div className="flex-grow hidden md:flex items-center space-x-6 justify-center">
          <input
            type="text"
            placeholder="Buscar..."
            className={`bg-gray-200 text-gray-800 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition-all duration-300 
              ${isSearching ? 'w-80' : 'w-40'}`}
            onFocus={() => setIsSearching(true)}
            onBlur={() => setIsSearching(false)}
          />
        </div> */}

        {/* Menú de navegación con espaciado entre ítems */}
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 mt-4 md:mt-0 w-full md:w-auto justify-center pr-6`}
        >
          <li className="transition-transform duration-300 transform hover:scale-105">
            <Link
              to="/"
              className="block text-white hover:bg-gray-700 px-4 py-2 rounded"
            >
              Inicio
            </Link>
          </li>
          <li className="transition-transform duration-300 transform hover:scale-105">
            <Link
              to="/turismo"
              className="block text-white hover:bg-gray-700 px-4 py-2 rounded"
            >
              Qué Hacer
            </Link>
          </li>
          <li className="transition-transform duration-300 transform hover:scale-105">
            <Link
              to="/historia"
              className="block text-white hover:bg-gray-700 px-4 py-2 rounded"
            >
              Historia
            </Link>
          </li>
          <li className="transition-transform duration-300 transform hover:scale-105">
            <a
              href="/consultas"
              className="block text-white hover:bg-gray-700 px-4 py-2 rounded"
            >
              Consultas
            </a>
          </li>

          {/* Ícono de perfil con texto "Mi Perfil" y espaciado */}
          {/* <li className="text-center transition-transform duration-300 transform hover:scale-105">
            <a href="#login" className="block text-white hover:bg-gray-700 px-4 py-2 rounded">
              <svg className="h-8 w-8 mx-auto text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span className="text-xs mt-1 block">Mi Perfil</span>
            </a>
          </li> */}
        </ul>
      </nav>

      {/* Espaciado para evitar que la navbar cubra el contenido */}
      <div className="pt-24"></div>
    </>
  );
};

export default Navbar;
