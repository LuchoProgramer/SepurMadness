"use client";  // 👈 Necesario para usar useState en Next.js (App Router)

import React, { useState } from 'react';
import { db } from '../lib/firebase';  // Asegúrate de que db esté bien exportado
import { subirImagenCloudinary } from '../utils/cloudinary';  // Importación corregida
import { collection, addDoc } from 'firebase/firestore';

const AddProductForm = () => {
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagen, setImagen] = useState(null);
    const [preview, setPreview] = useState(null);  // 👈 Agregado para mostrar previsualización
    const [loading, setLoading] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagen(file);
            setPreview(URL.createObjectURL(file));  // 👈 Mostrar previsualización de la imagen
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Subir la imagen a Cloudinary
            const imageUrl = await subirImagenCloudinary(imagen);

            // Agregar el producto a Firestore
            const docRef = await addDoc(collection(db, "productos"), {
                nombre,
                precio: parseFloat(precio),
                descripcion,
                imagen: imageUrl,  // Usar la URL de Cloudinary
            });

            console.log("Producto agregado con ID: ", docRef.id);

            // Resetear formulario
            setNombre('');
            setPrecio('');
            setDescripcion('');
            setImagen(null);
            setPreview(null);
        } catch (error) {
            console.error("Error al agregar el producto: ", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded shadow-lg">
            <input
                type="text"
                placeholder="Nombre del Producto"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                className="w-full p-2 border rounded mb-2"
            />
            <input
                type="number"
                placeholder="Precio"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                required
                className="w-full p-2 border rounded mb-2"
            />
            <textarea
                placeholder="Descripción"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                required
                className="w-full p-2 border rounded mb-2"
            />
            <input
                type="file"
                onChange={handleImageChange}
                required
                className="w-full p-2 border rounded mb-2"
            />

            {preview && (
                <img src={preview} alt="Vista previa" className="w-full h-40 object-cover rounded mb-2" />
            )}

            <button type="submit" disabled={loading} className="bg-blue-500 text-white px-4 py-2 rounded">
                {loading ? 'Subiendo...' : 'Agregar Producto'}
            </button>
        </form>
    );
};

export default AddProductForm;