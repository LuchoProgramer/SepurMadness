const FormularioContacto = () => {
    return (
        <section className="relative w-full h-screen bg-gradient-to-r from-black via-gray-800 to-black flex items-center justify-center px-6 py-12">
            {/* Contenedor flex con solo la columna de texto y formulario */}
            <div className="w-full h-full flex flex-col justify-center items-center text-white text-center space-y-4 z-10 mt-20">
                <h1 className="text-2xl md:text-4xl font-bold animate__animated animate__fadeIn animate__delay-1s">
                    Formulario de Contacto
                </h1>
                <p className="text-base md:text-lg max-w-3xl mx-auto animate__animated animate__fadeIn animate__delay-2s">
                    Si deseas más información o tienes alguna consulta, completa el formulario y te responderemos lo antes posible.
                </p>

                {/* Formulario */}
                <form
                    action="mailto:info@tudominio.com"
                    method="POST"
                    encType="text/plain"
                    className="w-full max-w-xl space-y-4 animate__animated animate__fadeIn animate__delay-3s"
                >
                    <div>
                        <label
                            htmlFor="nombre"
                            className="block text-base font-medium mb-2"
                        >
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            required
                            className="w-full px-4 py-3 text-base text-black border-2 border-white bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-base font-medium mb-2"
                        >
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 text-base text-black border-2 border-white bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="mensaje"
                            className="block text-base font-medium mb-2"
                        >
                            Mensaje
                        </label>
                        <textarea
                            id="mensaje"
                            name="mensaje"
                            rows="4"
                            required
                            className="w-full px-4 py-3 text-base text-black border-2 border-white bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="inline-block px-6 py-3 mt-4 text-base font-semibold text-white bg-transparent border-2 border-white rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300"
                    >
                        Enviar Mensaje
                    </button>
                </form>
            </div>
        </section>
    );
};

export default FormularioContacto;