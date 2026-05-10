import React from 'react';
import ThemeToggle from './temacolor'; 
import { Home, Code, Layers, MessageSquare, Briefcase, Phone, Menu as MenuIcon, X } from 'lucide-react'; 

const Menu = ({ activeSection, onNavigate }) => {

    const [isOpen, setIsOpen] = React.useState(false);

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
        // Contenedor principal: Sticky en la parte superior
        <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800"> 
            
            {/* Contenedor Encapsulado */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    
                    {/* Ícono Superior (Logo/Whatsapp) */}
                    <a 
                        href="https://wa.me/573202164566" 
                        target='_blank'
                        title='Enviar WhatsApp a Darwin Ortiz'
                        className="p-2 bg-white dark:bg-gray-950 rounded-full text-red-500 shadow-md"
                        aria-label="Enviar mensaje por WhatsApp"
                    >
                        {/* Utilizamos el ícono SVG de WhatsApp */}
                        <WhatsAppIcon className="w-6 h-6" /> 
                    </a>

                    {/* Lista de Navegación */}
                    <ul className="hidden md:flex list-none p-0 m-0 space-x-8"> 
                        {navItems.map((item) => {
                            const isActive = activeSection === item.id;
                            
                            let classes = 'flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200';
                            
                            if (isActive) {
                                classes += ' bg-cyan-100 text-cyan-800 dark:bg-red-100 dark:text-red-800';
                            } else {
                                classes += ' text-gray-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-red-500 hover:bg-gray-100 dark:hover:bg-gray-800';
                            }

                            return (
                                <li key={item.id}>
                                    <button
                                        onClick={() => onNavigate(item.id)}
                                        className={classes}
                                        aria-label={`Navegar a ${item.title}`}
                                    >
                                        <item.Icon className="w-5 h-5" /> 
                                        <span>{item.title}</span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                    
                    {/* Tema Toggle */}
                    <ThemeToggle />
                    
                    {/* Menú móvil */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-gray-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-red-500"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
                
                {/* Menú móvil desplegable */}
                {isOpen && (
                    <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-all duration-300">
                        <ul className="flex flex-col space-y-2 p-4">
                            {navItems.map((item) => {
                                const isActive = activeSection === item.id;
                                
                                let classes = 'flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200';
                                
                                if (isActive) {
                                    classes += ' bg-cyan-100 text-cyan-800 dark:bg-red-100 dark:text-red-800';
                                } else {
                                    classes += ' text-gray-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-red-500 hover:bg-gray-100 dark:hover:bg-gray-800';
                                }

                                return (
                                    <li key={item.id}>
                                        <button
                                            onClick={() => {
                                                onNavigate(item.id);
                                                setIsOpen(false);
                                            }}
                                            className={classes}
                                            aria-label={`Navegar a ${item.title}`}
                                        >
                                            <item.Icon className="w-5 h-5" /> 
                                            <span>{item.title}</span>
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Menu;