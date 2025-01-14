import React, { useEffect, useState } from 'react';
import { db } from '../lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

const ProductsList = () => {
    const [productos, setProductos] = useState([]);

    const fetchProductos = async () => {
        const querySnapshot = await getDocs(collection(db, "productos"));
        const products = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        console.log("Productos obtenidos:", products);  // ✅ Depuración
        setProductos(products);
    };

    useEffect(() => {
        fetchProductos();
    }, []);

    return (
        <div>
            <div>

            </div>
            <button onClick={fetchProductos} className="bg-red-500 text-white px-4 py-2 rounded mb-4">
                Recargar Datos
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productos.map((producto) => (
                    <div key={producto.id} className="border p-4 rounded shadow-md">
                        <h3 className="text-lg font-bold">{producto.nombre}</h3>
                        <p>{producto.descripcion}</p>

                        {/* Verificación de imágenes */}
                        <div className="flex space-x-2 my-2">
                            {(producto.imagenes || []).slice(0, 3).map((imagenUrl, idx) => {
                                console.log("Renderizando imagen:", imagenUrl);  // 🟢 Depuración
                                return (
                                    <img key={idx} src={imagenUrl} alt={`Imagen ${idx + 1}`} className="w-24 h-24 object-cover rounded" />
                                );
                            })}
                        </div>

                        <p className="text-blue-500 font-semibold">{producto.precio} USD</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsList;