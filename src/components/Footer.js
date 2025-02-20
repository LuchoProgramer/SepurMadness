import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-black via-gray-800 to-black text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Sepurmadness. Todos los derechos reservados.
                </p>
                <div className="mt-2 flex justify-between px-6">
                    <Link
                        href="/politica-de-privacidad"
                        className="text-gray-400 hover:text-white text-xs"
                    >
                        Política de Privacidad
                    </Link>
                    <Link
                        href="/terminos-de-servicio"
                        className="text-gray-400 hover:text-white text-xs ml-auto"
                    >
                        Términos y Condiciones
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;