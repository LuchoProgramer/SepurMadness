

import React from "react";
import Navbar from "@/components/Navbar";

const PoliticaDePrivacidad = () => {
    return (
        <div className="min-h-screen bg-black text-white pt-10">
            <Navbar />

            <div className="flex flex-col items-center justify-center py-12 px-3">
                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r pt-5 from-white to-white mb-6">
                    Política de Privacidad
                </h1>

                <div className="w-full max-w-4xl bg-gray-900 rounded-lg shadow-2xl p-8 mb-12">
                    <p className="text-lg text-gray-300 mb-4">
                        En Sepurmadness, valoramos tu privacidad y queremos que conozcas cómo manejamos tu información personal.
                    </p>

                    <h2 className="text-3xl font-bold text-naranja mb-4">1. Información que Recopilamos</h2>
                    <p className="text-lg text-gray-300 mb-4">
                        Recopilamos datos como nombre, correo y otra información necesaria para brindarte una mejor experiencia.
                    </p>

                    <h2 className="text-3xl font-bold text-naranja mb-4">2. Uso de la Información</h2>
                    <p className="text-lg text-gray-300 mb-4">
                        La información se usa para mejorar nuestros servicios y responder a tus consultas.
                    </p>

                    <h2 className="text-3xl font-bold text-naranja mb-4">3. Seguridad</h2>
                    <p className="text-lg text-gray-300 mb-4">
                        Implementamos medidas para proteger tu información, aunque no podemos garantizar seguridad absoluta en Internet.
                    </p>

                    <h2 className="text-3xl font-bold text-naranja mb-4">4. Cambios en la Política</h2>
                    <p className="text-lg text-gray-300 mb-4">
                        Nos reservamos el derecho de actualizar esta política. Se notificará cualquier cambio significativo.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PoliticaDePrivacidad;
