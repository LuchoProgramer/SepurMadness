"use client";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase"; // Importamos solo `db`
import { collection, getDocs } from "firebase/firestore"; // Importamos Firestore aquí

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
            <h1 className="text-3xl font-bold mb-6">Tienda</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {productos.map((producto) => (
                    <div key={producto.id} className="border p-4 shadow-md rounded-lg">
                        <img src={producto.imagen} alt={producto.nombre} className="w-full h-48 object-cover rounded-lg" />
                        <h2 className="text-xl font-bold mt-2">{producto.nombre}</h2>
                        <p className="text-gray-600">{producto.descripcion}</p>
                        <p className="text-lg font-bold mt-2">${producto.precio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StorePage;