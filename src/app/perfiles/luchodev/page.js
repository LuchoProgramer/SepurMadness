"use client";

import React from "react";
import { FaLinkedin, FaInstagram, FaTiktok, FaGithub, FaGlobe } from 'react-icons/fa';
import Navbar from "@/components/Navbar";

const LuchoDev = () => {
    return (
        <div className="min-h-screen bg-black text-white pt-10">
            {/* Aquí insertamos el Navbar */}
            <Navbar />

            <div className="flex flex-col items-center justify-center py-12 px-3">
                <div className="w-full max-w-2xl text-center bg-gray-900 rounded-lg shadow-2xl p-8">
                    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white mb-6">
                        Luis Viteri
                    </h1>
                    <img
                        src="/images/lucho.jpg"
                        alt="LuchoDev"
                        className="w-40 h-40 mx-auto rounded-full border-4 border-indigo-500 shadow-xl mb-6"
                    />
                    <p className="text-lg text-gray-300 mb-6">
                        Soy Luchodev, un viajero apasionado por la tecnología. Mi amor por el código nació durante un viaje por Sudamérica, donde conocí a desarrolladores que me mostraron el poder de la programación. Hoy, me enfoco en crear soluciones innovadoras que faciliten la vida de las personas y transmitan mi visión del mundo. Mi meta es construir experiencias disruptivas que inspiren y conecten a los usuarios con el futuro de la tecnología.
                    </p>

                    {/* Solo texto (no enlace) */}
                    <p className="text-indigo-500 font-semibold text-lg mb-6">
                        Ver más sobre mí
                    </p>

                    {/* Enlace a GitHub con icono */}
                    <div className="mt-6 flex items-center justify-center gap-2">
                        <a
                            href="https://github.com/luchodev"
                            className="text-indigo-500 hover:text-indigo-400 font-semibold text-lg"
                        >
                            <FaGithub className="inline mr-2 text-xl" />
                            Ver mi GitHub
                        </a>
                    </div>

                    {/* Redes sociales */}
                    <div className="flex justify-center gap-6 mt-8">
                        <a
                            href="https://www.linkedin.com/in/luchodev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-400 text-2xl"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://www.instagram.com/luchodev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-500 hover:text-pink-400 text-2xl"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://www.tiktok.com/@luchodev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:text-gray-700 text-2xl"
                        >
                            <FaTiktok />
                        </a>
                        <a
                            href="https://luchodev.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-500 hover:text-green-400 text-2xl"
                        >
                            <FaGlobe />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LuchoDev;