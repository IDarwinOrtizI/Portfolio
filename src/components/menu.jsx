// src/components/Menu.jsx

// Importación CORREGIDA del componente ThemeToggle (usando llaves {})
import ThemeToggle from './temacolor'; 
import { Home, Code, Layers, MessageSquare, Briefcase, Phone} from 'lucide-react'; 

const Menu = ({ activeSection, onNavigate }) => {

    // SVG de WhatsApp para el logo principal (DEFINIDO DENTRO DEL COMPONENTE)
    const WhatsAppIcon = () => (
        <Phone />
    );
    // Constante de los ítems de navegación con sus IDs y íconos
    const navItems = [
        { id: 'Inicio', title: 'Inicio', Icon: Home },
        { id: 'Tecnologías', title: 'Tecnologías', Icon: Code },
        { id: 'Proyectos', title: 'Proyectos', Icon: Layers },
        { id: 'Experiencia', title: 'Experiencia', Icon: Briefcase }, // Nueva sección
        { id: 'Contacto', title: 'Contacto', Icon: MessageSquare }, // Nueva sección
    ];

    return (
        // Contenedor principal: Fijo, a la izquierda, centrado verticalmente
        <nav className="fixed left-0 top-0 h-screen w-20 flex justify-center items-center z-50"> 
            
            {/* Contenedor Encapsulado (Aplica los colores y el blur) */}
            <div className="
                w-14 h-auto py-4 
                bg-white/30 dark:bg-gray-900/40 
                backdrop-blur-sm
                rounded-3xl shadow-xl 
                flex flex-col items-center space-y-4 
                border border-gray-100/50 dark:border-gray-800/50
            ">
                
                {/* Ícono Superior (Logo/Whatsapp) - Usa el acento del Dark Mode como color principal */}
                <a 
                    href="https://wa.me/573202164566" 
                    target='_blank'
                    title='Enviar WhatsApp a Darwin Ortiz'
                    className="p-2 bg-white dark:bg-gray-950 rounded-full text-red-500 shadow-md"
                >
                    {/* Utilizamos el ícono SVG de WhatsApp */}
                    <WhatsAppIcon className="w-6 h-6" /> 
                </a>

                {/* Lista de Navegación (Mapeo de los ítems) */}
                <ul className="list-none p-0 m-0 flex flex-col items-center space-y-2"> 
                    {navItems.map((item) => {
                        const isActive = activeSection === item.id;
                        
                        // Clase base para los íconos (gris sutil)
                        let classes = 'p-3 rounded-full transition-colors duration-200 block';
                        
                        if (isActive) {
                            // ACTIVO: Fondo blanco y acento rojo
                            classes += ' bg-white text-red-500 dark:bg-gray-950 dark:text-red-500 shadow-md';
                        } else {
                            // INACTIVO: Color gris y hover con acentos
                            classes += ' text-gray-500 dark:text-gray-400';
                            // HOVER: Fondo sutil, el texto toma el color de acento
                            classes += ' hover:bg-gray-100 dark:hover:bg-gray-800';
                            classes += ' hover:text-cyan-600 dark:hover:text-red-500';
                        }

                        return (
                            <li key={item.id}>
                                <button
                                    onClick={() => onNavigate(item.id)}
                                    title={item.title}
                                    className={classes}
                                >
                                    <item.Icon className="w-6 h-6" /> 
                                </button>
                            </li>
                        );
                    })}
                </ul>
                
                {/* Separador visual opcional */}
                <hr className="w-3/4 border-t border-gray-300 dark:border-gray-700" />

                {/* BOTÓN DE MODO OSCURO */}
                <ThemeToggle />

            </div>
        </nav>
    );
};

export default Menu;