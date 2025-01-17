import Nosotros from '@/components/Nosotros';
import NavbarNosotros from '@/components/NavbarNosotros';
import Contactanos from '@/components/Contactanos';  // Asegúrate de importar el componente de Contactanos
import Contenido from '@/components/Perfiles';

export default function NosotrosPage() {
    return (
        <div>
            <NavbarNosotros />
            <Nosotros />
            <Contenido />
            <Contactanos />
        </div>
    );
}

