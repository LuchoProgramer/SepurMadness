import Navbar from '@/components/Navbar';
import Contactanos from '@/components/Contactanos'; // Si quieres agregarlo también
import Servicios from '@/components/Servicios'; // Aquí se asume que el componente 'Servicios' está en su propia carpeta

export default function ServiciosPage() {
    return (
        <div>
            <Navbar />
            <Servicios />
            <Contactanos /> {/* Si deseas incluir la sección de contacto */}
        </div>
    );
}
