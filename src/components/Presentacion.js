import Link from 'next/link';

const Presentacion = () => {
    return (
        <section className="relative w-full h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center px-6">
            {/* Contenido de la sección */}
            <div className="text-white text-center flex flex-col items-center z-10">
                <h1 className="text4xl md:text-6xl font-bold animate__animated animate__fadeIn animate__delay-1s">
                    Conectando el futuro, impulsando resultados.
                </h1>

                {/* Botón Nosotros */}
                <div className="mt-32">
                    <Link
                        href="/nosotros"
                        className="block px-6 py-3 text-lg font-semibold text-white bg-transparent border-2 border-white rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300"
                    >
                        Nosotros
                    </Link>
                </div>
            </div>

            {/* Degradado negro al final de la sección */}
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </section>
    );
};

export default Presentacion;
