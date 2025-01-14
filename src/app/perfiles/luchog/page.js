"use client";

import React from "react";
import { FaLinkedin, FaInstagram, FaTiktok, FaBehance, FaGlobe } from 'react-icons/fa';
import Navbar from "@/components/Navbar";

const LuchoDev = () => {
    return (
        <div className="min-h-screen bg-black text-white pt-10">
            {/* Aquí insertamos el Navbar */}
            <Navbar />

            <div className="flex flex-col items-center justify-center py-12 px-3">
                <div className="w-full max-w-2xl text-center bg-gray-900 rounded-lg shadow-2xl p-8">
                    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white mb-6">
                        Luis Guzmán
                    </h1>
                    <img
                        src="/images/lucho.jpg"
                        alt="LuchoDev"
                        className="w-40 h-40 mx-auto rounded-full border-4 border-orange-500 shadow-xl mb-6 pt-8"
                    />
                    <p className="text-lg text-gray-300 mb-6">
                        Soy tecnólogo en fotografía y sonido para cine y TV con más de una década de experiencia. He trabajado en proyectos como Enchufe TV (diseño de sonido y grabación de sonido directo) y Desde Adentro de Sebastián Cordero (camarógrafo y mezcla final). Fui productor audiovisual de comunicación interna en Farmaenlace, aportando soluciones creativas en el ámbito corporativo, y colaboré en publicidad con Grupo Falcon, desarrollando contenido para campañas en redes sociales. Mi pasión es transformar ideas en historias visuales y sonoras.
                    </p>

                    {/* Enlace a Behance */}
                    <div className="mt-10 flex items-center justify-center gap-2">
                        <a
                            href="https://www.behance.net/luchodev"
                            className="text-black hover:text-naranja font-semibold text-lg"
                        >
                            <FaBehance className="inline mr-2 text-xl" />
                            Ver Behance
                        </a>
                    </div>

                    {/* Redes sociales */}
                    <div className="flex justify-center gap-6 mt-8">
                        <a
                            href="https://www.linkedin.com/in/luchodev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-500 hover:text-black text-2xl"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://www.instagram.com/luchodev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-500 hover:text-black text-2xl"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://www.tiktok.com/@luchodev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-500 hover:text-black text-2xl"
                        >
                            <FaTiktok />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LuchoDev;