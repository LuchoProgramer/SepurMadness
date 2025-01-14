// src/components/PerfilCard.js

"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PerfilCard = ({ nombre, descripcion, imagen, ruta }) => {
    const router = useRouter();

    return (
        <div
            onClick={() => router.push(ruta)} // Redirigir al perfil cuando se hace click
            className="cursor-pointer max-w-xs text-center bg-gray-900 p-6 shadow-lg rounded-lg border border-gray-700 hover:bg-gray-800 transition duration-300"
        >
            <Image
                src={imagen}
                alt={nombre}
                width={96}
                height={96}
                className="w-24 h-24 mx-auto rounded-full border-4 border-gray-700 shadow-md"
            />
            <h2 className="text-2xl font-semibold text-white mt-4">{nombre}</h2>
            <p className="text-gray-400">{descripcion}</p>
        </div>
    );
};

export default PerfilCard;
