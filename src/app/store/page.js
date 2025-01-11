"use client";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

const StorePage = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "productos"));
                const productosData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProductos(productosData);
            } catch (error) {
                console.error("Error obteniendo productos:", error);
            }
        };

        fetchProductos();
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Tienda</h1>

            {/* 🎥 VIDEO PROMOCIONAL */}
            <div className="mb-8 w-full">
                <video
                    className="w-full h-auto rounded-lg shadow-lg"
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source
                        src="https://res.cloudinary.com/dbbukhtz5/video/upload/f_auto/v1736465087/video_chompas_negras_pagina_web_buoyfj.mp4"
                        type="video/mp4"
                    />
                    Tu navegador no soporta la reproducción de videos.
                </video>
            </div>

            {/* 🛍 LISTADO DE PRODUCTOS */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {productos.map((producto) => (
                    <div key={producto.id} className="border p-4 shadow-md rounded-lg">
                        {/* 🌟 Imágenes del producto (3 imágenes grandes a lo largo de la tarjeta) */}
                        <div className="flex gap-4">
                            {producto.imagenes?.slice(0, 3).map((imgUrl, idx) => (
                                <img
                                    key={idx}
                                    src={imgUrl}
                                    alt={`Imagen ${idx + 1}`}
                                    className="w-1/3 h-64 object-cover rounded-lg"
                                />
                            ))}
                        </div>
                        {/* 📄 Datos del producto */}
                        <h2 className="text-xl font-bold mt-2 text-center hover:text-[#ffdd56] transition-all">
                            {producto.nombre}
                        </h2>
                        <p className="text-gray-600 text-center hover:text-[#ffdd56] transition-all">
                            {producto.descripcion}
                        </p>
                        <p className="text-lg font-bold mt-2 text-center hover:text-[#ffdd56] transition-all">
                            ${producto.precio}
                        </p>
                    </div>
                ))}
            </div>
            {/* 🌅 Imagen al final */}
            <div className="w-full mt-8">
                <img
                    src="https://res.cloudinary.com/dbbukhtz5/image/upload/v1736558055/pie_de_pagina_wakan_chr9fr.jpg"
                    alt="Pie de página"
                    className="w-full h-auto object-cover"
                />
            </div>
        </div>
    );
};

export default StorePage;