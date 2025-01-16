'use client';

import { FaInstagram, FaYoutube, FaHome } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const NavbarStore = () => {
    return (
        <nav className="navbar fixed top-5 left-0 w-full bg-transparent bg-opacity-80 z-50 px-4 lg:px-8 xl:px-12">
            <div className="w-full flex justify-between items-center p-2">

                {/* Icono de Casa (Inicio) */}
                <div>
                    <Link href="/">
                        <FaHome className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-white hover:text-naranja transition duration-300 bg-black bg-opacity-50 rounded-full p-1" />
                    </Link>
                </div>

                {/* Logo centrado */}
                <div className="flex justify-center items-center z-50">
                    <Link href="/">
                        <Image
                            src="https://res.cloudinary.com/dltfsttr7/image/upload/v1734738512/sepurmadness_2020_naranja_wo9y4i_c_crop_w_400_h_225_ar_16_9_qvvfv0.png"
                            alt="Logo"
                            width={100}
                            height={50}
                            className="object-contain w-20 sm:w-24 md:w-28 lg:w-32 xl:w-24 4k:w-80"
                        />
                    </Link>
                </div>

                {/* Redes sociales al lado contrario */}
                <div className="flex space-x-4 sm:space-x-5">
                    <a href="https://www.instagram.com/sepurmadness/profilecard/?igsh=anQ2Zm5uMnp3cmF2" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 4k:w-16 4k:h-16 
            text-white hover:text-naranja transition duration-300 bg-black bg-opacity-50 rounded-full p-1" />
                    </a>
                    <a href="https://www.youtube.com/@sepurmadness9489" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 4k:w-16 4k:h-16 
            text-white hover:text-naranja transition duration-300 bg-black bg-opacity-50 rounded-full p-1" />
                    </a>
                </div>

            </div>
        </nav>
    );
};

export default NavbarStore;