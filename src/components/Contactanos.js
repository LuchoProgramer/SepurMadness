const Contactanos = () => {
    return (
        <section className="relative w-full h-screen bg-gradient-to-b from-black via-gray-800 to-black flex items-center justify-center px-6 py-12">
            {/* Contenedor flex con solo la columna de texto */}
            <div className="w-full h-full flex flex-col justify-center items-center text-white text-center space-y-6 z-10">
                <h1 className="text-4xl md:text-6xl font-bold animate__animated animate__fadeIn animate__delay-1s">
                    Contáctanos
                </h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto animate__animated animate__fadeIn animate__delay-2s">
                    Si tienes alguna pregunta o deseas más información, no dudes en escribirnos. ¡Estaremos encantados de ayudarte!
                </p>

                {/* Botón de contacto */}
                <a
                    href="mailto:info@tudominio.com"
                    className="inline-block px-6 py-3 mt-4 text-lg font-semibold text-white bg-transparent border-2 border-white rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300"
                >
                    Enviar un correo
                </a>
            </div>
        </section>
    );
};

export default Contactanos;

