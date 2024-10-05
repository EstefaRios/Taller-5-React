import React from 'react';

const Header = () => {
    return (
        <header className="bg-blue-700 text-white p-6 shadow-lg">
            <h1 className="text-3xl font-bold text-center">Menú de Navegación</h1>
            <nav>
                <ul className="flex justify-center space-x-8 mt-4">
                    <li>
                        <a href="https://www.ejemplo.com/inicio" className="hover:text-blue-300 transition duration-200">Inicio</a>
                    </li>
                    <li>
                        <a href="https://www.ejemplo.com/sobre" className="hover:text-blue-300 transition duration-200">Sobre</a>
                    </li>
                    <li>
                        <a href="https://www.ejemplo.com/contacto" className="hover:text-blue-300 transition duration-200">Contacto</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
