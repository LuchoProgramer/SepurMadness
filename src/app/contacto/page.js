import Navbar from '@/components/Navbar';  // Asegúrate de importar el componente de Navbar
import FormularioContacto from '@/components/FormularioContacto';  // Asegúrate de importar el formulario de contacto

export default function ContactoPage() {
    return (
        <div>
            <Navbar />
            <FormularioContacto />  {/* Aquí agregas el formulario de contacto */}
        </div>
    );
}
