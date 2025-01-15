"use client";  // Asegúrate de poner esto al principio del archivo

import { useEffect, useState } from 'react';

const HeroSection = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Ocultar el título del navegador
        document.title = "";

        // Agregar un pequeño retraso para que el video se cargue adecuadamente
        const timeout = setTimeout(() => setIsLoaded(true), 500);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <section className="relative w-full h-screen bg-black">
            {/* Video de fondo */}
            <div className="absolute inset-0 w-full h-full">
                {isLoaded && (
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://res.cloudinary.com/dbbukhtz5/video/upload/v1736903857/Lanzamiento_Huella_digital_v1_FLAT_FINAL_m3qteu.mp4?autoplay=1&loop=1&mute=1"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                    ></iframe>
                )}
            </div>

            {/* Degradado para fusión con la siguiente sección */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black"></div>

            {/* Contenido de la sección */}
            <div className="absolute inset-0 flex items-center justify-center text-white z-10">
                {/* Aquí puedes agregar texto o cualquier contenido adicional */}
            </div>
        </section>
    );
};

export default HeroSection;