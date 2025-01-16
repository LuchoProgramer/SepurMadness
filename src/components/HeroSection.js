"use client";  // Asegúrate de poner esto al principio del archivo

import { useEffect, useState } from 'react';

const HeroSection = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [videoStarted, setVideoStarted] = useState(false);
    const [canAutoPlay, setCanAutoPlay] = useState(true);
    const [backgroundImage, setBackgroundImage] = useState("https://res.cloudinary.com/dbbukhtz5/image/upload/v1736905475/Portada_video_tu_huella_digital_personalizad_pflyxx.jpg");

    useEffect(() => {
        // Agregar un pequeño retraso para asegurarnos de que el video se cargue adecuadamente
        const timeout = setTimeout(() => setIsLoaded(true), 500);
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        const updateBackgroundImage = () => {
            if (window.innerWidth <= 768) {
                setBackgroundImage("https://res.cloudinary.com/dbbukhtz5/image/upload/v1736976085/reedicionpara_portada_web_en_celulares_pcrroe.jpg");
            } else {
                setBackgroundImage("https://res.cloudinary.com/dbbukhtz5/image/upload/v1736905475/Portada_video_tu_huella_digital_personalizad_pflyxx.jpg");
            }
        };

        updateBackgroundImage();
        window.addEventListener("resize", updateBackgroundImage);

        return () => {
            window.removeEventListener("resize", updateBackgroundImage);
        };
    }, []);

    const handlePlayVideo = () => {
        setVideoStarted(true); // Esto indicará que el video debe comenzar
    };

    return (
        <section className="relative w-full h-screen bg-black" onClick={handlePlayVideo}>
            {/* Imagen de fondo adaptable */}
            <div className="absolute inset-0 w-full h-full">
                {isLoaded && (
                    <img
                        width="100%"
                        height="100%"
                        src={backgroundImage}
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />
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