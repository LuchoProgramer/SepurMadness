const Servicios = () => {
    return (
        <section className="w-full bg-gray-800 py-20">
            <div className="text-center text-white mb-12">
                <h2 className="text-2xl md:text-3xl font-bold">Nuestros Servicios</h2>
                <p className="text-base md:text-lg max-w-3xl mx-auto mt-4">
                    Descubre cómo nuestras soluciones pueden ayudarte a alcanzar el éxito con servicios innovadores y a la medida de tus necesidades.
                </p>
            </div>

            {/* Sección de Servicios */}
            <div className="flex flex-wrap justify-center gap-6 px-6">
                {/* Columna 1 */}
                <div className="w-full sm:w-1/2 lg:w-1/4 text-center bg-gray-900 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                    <h3 className="text-lg font-semibold text-white mb-2">SEO</h3>
                </div>

                <div className="w-full sm:w-1/2 lg:w-1/4 text-center bg-gray-900 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                    <h3 className="text-lg font-semibold text-white mb-2">Python</h3>
                </div>

                <div className="w-full sm:w-1/2 lg:w-1/4 text-center bg-gray-900 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                    <h3 className="text-lg font-semibold text-white mb-2">JS</h3>
                </div>

                <div className="w-full sm:w-1/2 lg:w-1/4 text-center bg-gray-900 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                    <h3 className="text-lg font-semibold text-white mb-2">Django</h3>
                </div>

                <div className="w-full sm:w-1/2 lg:w-1/4 text-center bg-gray-900 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                    <h3 className="text-lg font-semibold text-white mb-2">Animación 2D</h3>
                </div>

                <div className="w-full sm:w-1/2 lg:w-1/4 text-center bg-gray-900 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                    <h3 className="text-lg font-semibold text-white mb-2">React</h3>
                </div>

                <div className="w-full sm:w-1/2 lg:w-1/4 text-center bg-gray-900 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                    <h3 className="text-lg font-semibold text-white mb-2">Marcas Personales</h3>
                </div>

                <div className="w-full sm:w-1/2 lg:w-1/4 text-center bg-gray-900 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                    <h3 className="text-lg font-semibold text-white mb-2">Inteligencia Artificial</h3>
                </div>

                <div className="w-full sm:w-1/2 lg:w-1/4 text-center bg-gray-900 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                    <h3 className="text-lg font-semibold text-white mb-2">Concept Art con IA</h3>
                </div>

                {/* Columna 2 */}

                <div className="w-full sm:w-1/2 lg:w-1/4 text-center bg-gray-900 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                    <h3 className="text-lg font-semibold text-white mb-2">Producción Audiovisual</h3>
                </div>

                <div className="w-full sm:w-1/2 lg:w-1/4 text-center bg-gray-900 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                    <h3 className="text-lg font-semibold text-white mb-2">Agentes Personalizados IA</h3>
                </div>

                <div className="w-full sm:w-1/2 lg:w-1/4 text-center bg-gray-900 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                    <h3 className="text-lg font-semibold text-white mb-2">Charlas de Tecnología</h3>
                </div>

                <div className="w-full sm:w-1/2 lg:w-1/4 text-center bg-gray-900 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                    <h3 className="text-lg font-semibold text-white mb-2">Postproducción VFX-SFX</h3>
                </div>

                <div className="w-full sm:w-1/2 lg:w-1/4 text-center bg-gray-900 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                    <h3 className="text-lg font-semibold text-white mb-2">Contenido Para Redes Sociales</h3>
                </div>

                <div className="w-full sm:w-1/2 lg:w-1/4 text-center bg-gray-900 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                    <h3 className="text-lg font-semibold text-white mb-2">Fotografía Publicitaria</h3>
                </div>
            </div>
        </section>
    );
};

export default Servicios;