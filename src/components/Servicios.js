const Servicios = () => {
    return (
        <section className="w-full bg-gray-800 py-20">
            <div className="text-center text-white mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Nuestros Servicios</h2>
                <p className="text-lg md:text-xl max-w-3xl mx-auto mt-4">
                    Descubre cómo nuestras soluciones pueden ayudarte a alcanzar el éxito con servicios innovadores y a la medida de tus necesidades.
                </p>
            </div>

            {/* Sección de Servicios */}
            <div className="flex flex-wrap justify-center gap-10 px-6">
                {/* Servicio 1 */}
                <div className="w-full sm:w-1/2 lg:w-1/3 text-center bg-gray-900 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                    <div className="text-blue-500 text-4xl mb-4">
                        {/* Puedes agregar aquí un ícono o imagen */}
                        <i className="fas fa-laptop-code"></i>
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-2">Desarrollo Web</h3>
                    <p className="text-sm md:text-base text-gray-400">
                        Creamos soluciones web personalizadas para hacer crecer tu negocio, asegurando rendimiento y una experiencia de usuario excepcional.
                    </p>
                </div>

                {/* Servicio 2 */}
                <div className="w-full sm:w-1/2 lg:w-1/3 text-center bg-gray-900 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                    <div className="text-blue-500 text-4xl mb-4">
                        {/* Puedes agregar aquí un ícono o imagen */}
                        <i className="fas fa-chart-line"></i>
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-2">Consultoría Estratégica</h3>
                    <p className="text-sm md:text-base text-gray-400">
                        Ofrecemos consultoría para ayudarte a tomar decisiones estratégicas basadas en datos, optimizando tus recursos y procesos.
                    </p>
                </div>

                {/* Servicio 3 */}
                <div className="w-full sm:w-1/2 lg:w-1/3 text-center bg-gray-900 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                    <div className="text-blue-500 text-4xl mb-4">
                        {/* Puedes agregar aquí un ícono o imagen */}
                        <i className="fas fa-cogs"></i>
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-2">Automatización de Procesos</h3>
                    <p className="text-sm md:text-base text-gray-400">
                        Implementamos herramientas de automatización para optimizar procesos, reducir costos y aumentar la productividad en tu empresa.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Servicios;