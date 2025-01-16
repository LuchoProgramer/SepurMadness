'use client';  // Agrega esta línea al inicio del archivo

import { useState } from 'react';
import { FaInstagram, FaLinkedin, FaFacebook, FaBars, FaTimes, FaPlus, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import './Navbar.css';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar fixed top-5 left-0 w-full bg-transparent bg-opacity-80 z-50 px-4 lg:px-8 xl:px-12">
            <div className="w-full flex justify-between items-center p-2">
                {/* Sección de redes sociales */}
                <div className="flex space-x-4 sm:space-x-5">
                    <a href="https://www.instagram.com/sepurmadness/profilecard/?igsh=anQ2Zm5uMnp3cmF2" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 4k:w-16 4k:h-16 
            text-white hover:text-naranja transition duration-300 
            dark:text-white dark:hover:text-naranja bg-black bg-opacity-50 rounded-full p-1" />
                    </a>
                    <a href="https://www.youtube.com/@sepurmadness9489" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 4k:w-16 4k:h-16 
            text-white hover:text-naranja transition duration-300 
            dark:text-white dark:hover:text-naranja bg-black bg-opacity-50 rounded-full p-1" />
                    </a>
                </div>

                {/* Logo centrado con margen izquierdo (responsive) */}
                <div className="flex justify-center items-center relative sm:left-[10px] md:left-[20px] lg:left-[170px] xl:left-[200px] 2xl:left-[450px] z-50">
                    <div className="flex justify-center items-center relative custom-logo-small custom-logo-medium custom-logo-large z-50">
                        <Link href="/">
                            <Image
                                src="https://res.cloudinary.com/dltfsttr7/image/upload/v1734738512/sepurmadness_2020_naranja_wo9y4i_c_crop_w_400_h_225_ar_16_9_qvvfv0.png"
                                alt="Logo"
                                width={100}
                                height={50}
                                className="object-contain w-20 sm:w-24 md:w-28 lg:w-32 xl:w-24 4k:w-80"
                                sizes="(max-width: 640px) 100px, (max-width: 1024px) 120px, (max-width: 2560px) 150px, (max-width: 3840px) 180px"
                            />
                        </Link>
                    </div>
                </div>

                {/* Menú hamburguesa (solo en pantallas pequeñas) */}
                <div className="block lg:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? (
                            <FaTimes className="w-6 h-6 text-blanco" />
                        ) : (
                            <FaBars className="w-6 h-6 text-blanco" />
                        )}
                    </button>
                </div>

                {/* Menú de navegación (pantallas grandes) */}
                <div className="hidden lg:flex px-2 lg:px-4 xl:px-6 text-blanco text-xs sm:text-sm md:text-base xl:text-lg 4k:text-5xl font-bold">
                    <div className="flex space-x-4 sm:space-x-5 justify-center w-full">
                        <Link href="/nosotros" className="hover:text-naranja transition duration-300">
                            Nosotros
                        </Link>
                        <Link href="/servicios" className="hover:text-naranja transition duration-300">
                            Servicios
                        </Link>
                        <Link href="/store" className="hover:text-naranja transition duration-300">
                            Store
                        </Link>
                        {/* Nueva opción "Contenido" */}
                        <Link href="/proyectos" className="hover:text-naranja transition duration-300">
                            Proyectos
                        </Link>
                        {/* Botón de "+" redirigiendo a Contacto */}
                        <Link href="/contacto" className="hover:text-naranja transition duration-300">
                            <FaPlus className="w-6 h-6 text-white" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Menú Off-canvas */}
            <div
                className={`lg:hidden fixed top-0 right-0 w-3/4 h-full bg-blanco bg-opacity-90 p-4 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}
            >
                <div className="flex justify-end">
                    <button onClick={toggleMenu}>
                        <FaTimes className="w-6 h-6 text-naranja" />
                    </button>
                </div>
                <div className="flex flex-col space-y-4 mt-16">
                    <Link
                        href="/nosotros" className="text-naranja text-lg hover:text-blanco transition duration-300" onClick={toggleMenu}>
                        Nosotros
                    </Link>
                    <Link href="/servicios" className="text-naranja text-lg hover:text-blanco transition duration-300" onClick={toggleMenu}>
                        Servicios
                    </Link>
                    <Link href="/store" className="text-naranja text-lg hover:text-blanco transition duration-300" onClick={toggleMenu}>
                        Store
                    </Link>
                    {/* Nueva opción "Contenido" en el menú móvil */}
                    <Link href="/proyectos" className="text-naranja text-lg hover:text-blanco transition duration-300" onClick={toggleMenu}>
                        Proyectos
                    </Link>
                    {/* Botón de "+" redirigiendo a Contacto */}
                    <Link href="/contacto" className="text-naranja text-lg hover:text-blanco transition duration-300" onClick={toggleMenu}>
                        <FaPlus className="w-6 h-6 text-naranja" />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;