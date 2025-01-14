"use client";

import React from "react";
import { FaLinkedin, FaInstagram, FaTiktok, FaBehance } from 'react-icons/fa';
import Navbar from "@/components/Navbar";

const LuchoG = () => {
    return (
        <div className="min-h-screen bg-black text-white pt-10">
            {/* Navbar */}
            <Navbar />

            <div className="flex flex-col items-center justify-center py-12 px-3">
                <div className="w-full max-w-2xl text-center bg-gray-900 rounded-lg shadow-2xl p-8">
                    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-6">
                        Luis Guzmán
                    </h1>

                    {/* Imagen de perfil actualizada con Cloudinary */}
                    <img
                        src="https://res.cloudinary.com/dbbukhtz5/image/upload/v1736893118/perfil_skullfact_ezsunu.jpg"
                        alt="Luis Guzmán"
                        className="w-40 h-40 mx-auto rounded-full border-4 border-orange-500 shadow-xl mb-6"
                    />

                    <p className="text-lg text-gray-300 mb-6">
                        Soy <span className="font-bold text-orange-500">tecnólogo en fotografía y sonido</span> para cine y TV con más de una década de experiencia.
                        He trabajado en proyectos como <strong>Enchufe TV</strong> (diseño y grabación de sonido directo) y
                        <strong> Desde Adentro</strong> de Sebastián Cordero (camarógrafo y mezcla final).
                        También fui productor audiovisual en <strong>Farmaenlace</strong>, aportando soluciones creativas en el ámbito corporativo,
                        y trabajé en publicidad con <strong>Grupo Falcon</strong>, desarrollando contenido para campañas en redes sociales.
                        <br /><br />
                        Mi pasión es transformar ideas en historias visuales y sonoras.
                    </p>

                    {/* Enlace a Behance */}
                    <div className="mt-10">
                        <a
                            href="https://www.behance.net/luchodev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 text-gray-300 hover:text-orange-500 font-semibold text-lg"
                        >
                            <FaBehance className="text-2xl" />
                            <span>Ver mi Behance</span>
                        </a>
                    </div>

                    {/* Redes sociales */}
                    <div className="flex justify-center gap-6 mt-8">
                        <a
                            href="https://www.linkedin.com/in/luchodev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-orange-500 text-2xl"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://www.instagram.com/luchodev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-orange-500 text-2xl"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://www.tiktok.com/@luchodev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-orange-500 text-2xl"
                        >
                            <FaTiktok />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LuchoG;