import Image from 'next/image';

const HeroSection = () => {
    return (
        <section className="relative w-full h-screen bg-black">
            {/* Imagen de fondo */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="https://res.cloudinary.com/dltfsttr7/image/upload/v1736044410/WhatsApp_Image_2025-01-04_at_21.28.00_bo2hjb.jpg"
                    alt="Nosotros"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-60"
                />
            </div>

            {/* Degradado para fusión con la siguiente sección */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black"></div>

            {/* Contenido de la sección */}
            <div className="absolute inset-0 flex items-center justify-center text-white z-10">
            </div>
        </section>
    );
};

export default HeroSection;
