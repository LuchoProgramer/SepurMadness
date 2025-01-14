const Nosotros = () => {
    return (
        <section className="relative w-full h-screen bg-gradient-to-r from-white via-gray-300 to-black flex items-center justify-center px-6 py-12">
            {/* Contenedor centrado */}
            <div className="flex flex-col justify-center items-center text-center max-w-4xl text-black space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold animate__animated animate__fadeIn animate__delay-1s">
                    Nosotros
                </h1>
                <p className="text-lg md:text-xl animate__animated animate__fadeIn animate__delay-2s">
                    Somos una dupla tecno-creativa enfocada en medios digitales. Nos apasiona crear conexiones reales entre marcas personales o pymes y sus audiencias digitales.
                    Por eso, te ofrecemos asesoría personalizada desde el concepto de tu imagen hasta la creación de tus canales digitales, gestionando interacciones en redes sociales
                    y desarrollando productos adicionales que potencien tu presencia en el mundo digital.
                    Creemos que las nuevas tecnologías han llegado para quedarse, y el desarrollo innovador junto a ellas es fundamental.
                </p>
            </div>

            {/* Degradado negro al final de la sección */}
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </section>
    );
};

export default Nosotros;