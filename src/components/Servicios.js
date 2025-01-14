const Servicios = () => {
    return (
        <section className="w-full bg-gray-800 py-20 relative">
            <div className="text-center text-white mb-12">
                <h2 className="text-2xl md:text-3xl font-bold">Nuestros Servicios</h2>
                <p className="text-base md:text-lg max-w-3xl mx-auto mt-4">
                    Descubre cómo nuestras soluciones pueden ayudarte a alcanzar el éxito con servicios innovadores y a la medida de tus necesidades.
                </p>
            </div>

            {/* Sección de Servicios */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                {/* Tarjetas de servicios */}
                {[
                    "Desarrollo Web & Apps",
                    "Animación 2D & Motion",
                    "Consultoría & Tutorías",
                    "Marca Personal & Branding",
                    "Inteligencia Artificial",
                    "Concept Art con IA",
                    "Producción Audiovisual",
                    "Agentes IA Personalizados",
                    "Charlas & Workshops",
                    "Postproducción VFX-SFX",
                    "Gestión de Redes Sociales",
                    "Fotografía Publicitaria"
                ].map((servicio, index) => (
                    <div
                        key={index}
                        className="bg-gray-900 p-6 rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:bg-gray-700"
                    >
                        <h3 className="text-lg font-semibold text-white">{servicio}</h3>
                    </div>
                ))}
            </div>

            {/* Gradiente al final de la sección */}
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </section>
    );
};

export default Servicios;
