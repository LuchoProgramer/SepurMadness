"use client";  // Asegúrate de poner esto al principio del archivo

import { useEffect, useState } from 'react';

const HeroSection = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [videoStarted, setVideoStarted] = useState(false);
    const [canAutoPlay, setCanAutoPlay] = useState(true);

    useEffect(() => {
        // Agregar un pequeño retraso para asegurarnos de que el video se cargue adecuadamente
        const timeout = setTimeout(() => setIsLoaded(true), 500);
        return () => clearTimeout(timeout);

        // Intentar autoplay en la carga
        const videoElement = document.createElement('video');
        videoElement.src = "https://res.cloudinary.com/dbbukhtz5/video/upload/v1736903857/Lanzamiento_Huella_digital_v1_FLAT_FINAL_m3qteu.mp4";
        videoElement.muted = true;  // Asegurarse de que el video se inicie en modo mudo
        videoElement.autoplay = true;
        videoElement.loop = true;

        videoElement.oncanplay = () => {
            setCanAutoPlay(true);  // Si el video comienza a cargar, se puede hacer autoplay
        };

        videoElement.onerror = () => {
            setCanAutoPlay(false);  // Si el autoplay falla, activamos el modo de clic
        };
    }, []);

    const handlePlayVideo = () => {
        setVideoStarted(true); // Esto indicará que el video debe comenzar
    };

    return (
        <section className="relative w-full h-screen bg-black" onClick={handlePlayVideo}>
            {/* Video de fondo */}
            <div className="absolute inset-0 w-full h-full">
                {isLoaded && (
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://res.cloudinary.com/dbbukhtz5/video/upload/v1736907972/Lanzamiento_Huella_digital_v1_FLAT_FINAL_sin_audio_z6kv8b.mp4?autoplay=${canAutoPlay && videoStarted ? 1 : 0}&loop=1&mute=1`} // Aseguramos que el video esté en mudo
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