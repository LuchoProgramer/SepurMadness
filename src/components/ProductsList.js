// ProductsList.js (Componente para mostrar los productos)
import React, { useEffect, useState } from 'react';
import { db } from './firebase';  // Importar configuración Firebase
import { collection, getDocs } from 'firebase/firestore';

const ProductsList = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            const querySnapshot = await getDocs(collection(db, "productos"));
            const products = querySnapshot.docs.map(doc => doc.data());
            setProductos(products);
        };

        fetchProductos();
    }, []);

    return (
        <div>
            {productos.map((producto, index) => (
                <div key={index}>
                    <h3>{producto.nombre}</h3>
                    <p>{producto.descripcion}</p>
                    <img src={producto.imagen} alt={producto.nombre} />
                    <p>{producto.precio} USD</p>
                </div>
            ))}
        </div>
    );
};

export default ProductsList;