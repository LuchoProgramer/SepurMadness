"use client";

import React from "react";
import Navbar from "@/components/Navbar";

const ProjectsPage = () => {
    return (
        <div className="min-h-screen bg-black text-white pt-10">
            {/* Navbar */}
            <Navbar />

            <div className="flex flex-col items-center justify-center py-12 px-3">
                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r pt-5 from-white to-white mb-6">
                    Proyectos
                </h1>

                {/* Descripción general */}
                <p className="text-lg text-gray-300 mb-6 text-center">
                    Además de ofrecer servicios, nos enfocamos en la innovación constante desde nuestras áreas de destreza. Creamos proyectos propios que nos permiten perfeccionar y mejorar nuestro trabajo, explorando nuevas formas de hacerlo, y cumpliendo nuestras metas y sueños en el proceso.
                </p>

                {/* Proyecto de inventario */}
                <div className="w-full max-w-4xl bg-gray-900 rounded-lg shadow-2xl p-8 mb-12">
                    <h2 className="text-3xl font-bold text-naranja mb-4">Sistema de Inventario Inteligente</h2>
                    <img
                        // Usando la URL de Cloudinary
                        src="https://res.cloudinary.com/dbbukhtz5/image/upload/v1736909086/shopinvent_hzfzul.jpg"
                        alt="Sistema de Inventario"
                        className="w-full h-60 object-cover rounded-lg mb-6"
                    />
                    <p className="text-lg text-gray-300 mb-4">
                        Nuestro sistema de inventario ayuda a las empresas a gestionar sus productos de manera eficiente, reduciendo errores, optimizando el almacenamiento y ofreciendo un control más preciso.
                    </p>
                    <ul className="text-lg text-gray-300 mb-6">
                        <li>🔹 Optimización de la gestión de productos.</li>
                        <li>🔹 Reportes detallados y en tiempo real.</li>
                        <li>🔹 Integración con otras plataformas.</li>
                        <li>🔹 Fácil de usar y adaptar a diferentes industrias.</li>
                    </ul>

                    <a
                        href="/demo-inventario"
                        className="text-naranja hover:text-white font-semibold text-lg"
                    >
                        Ver demo del sistema de inventario
                    </a>
                </div>

                {/* Aquí puedes agregar más proyectos */}
            </div>
        </div>
    );
};

export default ProjectsPage;