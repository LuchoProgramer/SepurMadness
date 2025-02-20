"use client";

import React from "react";
import Navbar from "@/components/Navbar";

const TerminosDeServicio = () => {
    return (
        <div className="min-h-screen bg-black text-white pt-10">
            <Navbar />

            <div className="flex flex-col items-center justify-center py-12 px-3">
                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r pt-5 from-white to-white mb-6">
                    Términos de Servicio
                </h1>

                <div className="w-full max-w-4xl bg-gray-900 rounded-lg shadow-2xl p-8 mb-12">
                    <p className="text-lg text-gray-300 mb-4">
                        Al utilizar nuestro sitio web, aceptas los siguientes términos y condiciones.
                    </p>

                    <h2 className="text-3xl font-bold text-naranja mb-4">1. Uso del Sitio</h2>
                    <p className="text-lg text-gray-300 mb-4">
                        El usuario se compromete a utilizar el sitio de manera legal y ética.
                    </p>

                    <h2 className="text-3xl font-bold text-naranja mb-4">2. Propiedad Intelectual</h2>
                    <p className="text-lg text-gray-300 mb-4">
                        Todo el contenido está protegido por derechos de autor y no puede ser utilizado sin autorización.
                    </p>

                    <h2 className="text-3xl font-bold text-naranja mb-4">3. Limitación de Responsabilidad</h2>
                    <p className="text-lg text-gray-300 mb-4">
                        No nos hacemos responsables por daños derivados del uso del sitio.
                    </p>

                    <h2 className="text-3xl font-bold text-naranja mb-4">4. Modificaciones</h2>
                    <p className="text-lg text-gray-300 mb-4">
                        Podemos actualizar estos términos en cualquier momento. El uso continuado del sitio implica su aceptación.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TerminosDeServicio;