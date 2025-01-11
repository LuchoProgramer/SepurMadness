"use client";

import React, { useState } from 'react';
import { db } from '../lib/firebase';
import { subirImagenCloudinary } from '../utils/cloudinary';
import { collection, addDoc } from 'firebase/firestore';

const AddProductForm = () => {
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagenes, setImagenes] = useState([]);  // Almacena las imágenes seleccionadas
    const [previews, setPreviews] = useState([]);  // Almacena las previsualizaciones
    const [loading, setLoading] = useState(false);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);

        // Agregar nuevas imágenes sin sobrepasar el límite de 3
        const nuevasImagenes = [...imagenes, ...files].slice(0, 3);

        setImagenes(nuevasImagenes);
        setPreviews(nuevasImagenes.map(file => URL.createObjectURL(file)));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Subir todas las imágenes a Cloudinary y obtener las URLs
            const imageUrls = await Promise.all(imagenes.map(file => subirImagenCloudinary(file)));

            // Guardar el producto en Firestore con las imágenes
            const docRef = await addDoc(collection(db, "productos"), {
                nombre,
                precio: parseFloat(precio),
                descripcion,
                imagenes: imageUrls,  // Guardar array de URLs
            });

            console.log("Producto agregado con ID: ", docRef.id);

            // Resetear formulario
            setNombre('');
            setPrecio('');
            setDescripcion('');
            setImagenes([]);
            setPreviews([]);
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
                multiple  // Permite seleccionar varias imágenes
                onChange={handleImageChange}
                accept="image/*"
                className="w-full p-2 border rounded mb-2"
            />

            {/* Previsualización de imágenes */}
            <div className="flex space-x-2 mb-2">
                {previews.map((preview, index) => (
                    <img key={index} src={preview} alt={`Vista previa ${index + 1}`} className="w-20 h-20 object-cover rounded" />
                ))}
            </div>

            <button type="submit" disabled={loading} className="bg-blue-500 text-white px-4 py-2 rounded">
                {loading ? 'Subiendo...' : 'Agregar Producto'}
            </button>
        </form>
    );
};

export default AddProductForm;