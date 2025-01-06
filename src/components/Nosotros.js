const Nosotros = () => {
    return (
        <section className="relative w-full h-screen bg-gradient-to-r from-white via-gray-300 to-black flex items-center justify-center px-6 py-12">
            {/* Contenedor flex con dos columnas */}
            <div className="flex w-full h-full flex-col md:flex-row items-center justify-between">
                {/* Columna de texto */}
                <div className="w-full md:w-1/2 h-full flex flex-col justify-center text-black text-center space-y-6 z-10">
                    <h1 className="text-4xl md:text-6xl font-bold animate__animated animate__fadeIn animate__delay-1s">
                        Nosotros
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto animate__animated animate__fadeIn animate__delay-2s">
                        Somos una dupla que cree en la fuerza de las ideas y en el poder de la innovación. Nos impulsa el deseo de acompañarte en cada paso de tu viaje, creando soluciones que no solo resuelvan problemas, sino que impulsen tu crecimiento a largo plazo. Creemos que lo más importante es estar juntos en el proceso, siempre cercanos, siempre dispuestos a adaptarnos a lo que necesitas.
                    </p>
                </div>

                {/* Columna de la imagen */}
                <div className="w-full md:w-1/3 h-full flex justify-center items-center mt-12 md:mt-24 md:mr-12">
                    <img
                        src="https://res.cloudinary.com/dltfsttr7/image/upload/v1736062247/NFT_pagina_wb_quienes_somos_afwvzl.png"
                        alt="Imagen de Nosotros"
                        className="w-3/4 h-auto object-contain rounded-lg"
                    />
                </div>
            </div>

            {/* Degradado negro al final de la sección */}
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </section>
    );
};

export default Nosotros;