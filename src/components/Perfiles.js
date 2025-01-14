"use client";

import React, { useState, useEffect } from "react";
import PerfilCard from "./PerfilCard"; // Importar el componente PerfilCard

const Perfiles = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <section className="relative w-full h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center px-6 py-12">
            <div className="w-full h-full flex flex-col justify-center items-center text-white text-center space-y-6 z-10">
                <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10">
                    {/* LuchoDev */}
                    <PerfilCard
                        nombre="LuchoDev"
                        descripcion="Apasionado por la tecnología, creatividad y desarrollo de código."
                        imagen="/images/lucho.jpg"
                        ruta="/perfiles/luchodev"
                    />

                    {/* Socio */}
                    <PerfilCard
                        nombre="SkullFact"
                        descripcion="Innovador, estratega y experto en diseño de experiencias."
                        imagen="/images/socio.jpg"
                        ruta="/perfiles/luchog"
                    />
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </section>
    );
};

export default Perfiles;