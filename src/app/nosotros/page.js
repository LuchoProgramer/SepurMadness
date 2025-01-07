import Nosotros from '@/components/Nosotros';
import Navbar from '@/components/Navbar';
import Contactanos from '@/components/Contactanos';  // Asegúrate de importar el componente de Contactanos

export default function NosotrosPage() {
    return (
        <div>
            <Navbar />
            <Nosotros />
            <Contactanos />  {/* Aquí se agrega la sección de "Contáctanos" */}
        </div>
    );
}

