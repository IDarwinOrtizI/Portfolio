import { Linkedin, Github, Download } from 'lucide-react';
import Foto from '../assets/images/moto.jpg'
// Asegúrate de que los íconos (Mail, Linkedin, Github) estén importados.
const Body = () => {
    return (
        // Contenedor principal de la sección. Centrado verticalmente.
        <section className="flex items-center justify-center min-h-[90vh] p-12 ">
            
            {/* Contenedor Interior: Usa Flex para poner Texto y Foto LADO A LADO. */}
            <div className="flex max-w-4xl w-full items-center justify-between space-x-12">
                
                {/* 1. Área de Texto y Links (Organizados en columna) */}
                <div className="text-white dark:text-white flex flex-col space-y-4">
                    
                    {/* H1 Corregido: Solo clases de texto */}
                    <h1 className="text-5xl font-bold
                                text-cyan-800 dark:text-red-500
                                transition-colors duration-500">
                        Darwin Sebastian Ortiz Caballero
                    </h1>
                    
                    <h2 className="text-xl font-medium 
                                text-cyan-800 dark:text-red-500
                                transition-colors duration-500">
                        Tecnólogo en Análisis Y Desarrollo de Software | Desarrollador Full Stack Jr
                    </h2>
                    
                    <p className="text-gray-600 dark:text-gray-300
                                    mt-1 max-w-md
                                    transition-colors duration-500">
                        Siempre explorando nuevas metodologías y herramientas para implementar las mejores soluciones en cada situación.
                    </p>
                    
                    {/* Links de Redes Sociales */}
                    <div className="flex space-x-4 pt-4">
                        <a href="https://linkedin.com/in/darwin-ortiz-full-stack" target="_blank" className="text-cyan-600 dark:text-red-500  
                                                                                                                hover:text-cyan-400 dark:hover:text-red-500
                                                                                                                transition-colors duration-500">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="https://github.com/IDarwinOrtizI" target="_blank" className="text-cyan-600 dark:text-red-500  
                                                                                                hover:text-cyan-400 dark:hover:text-red-500
                                                                                                transition-colors duration-500">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="mailto:sebastiancaballero0811@gmail.com" className="text-cyan-600 dark:text-red-500  
                                                                                        hover:text-cyan-400 dark:hover:text-red-500
                                                                                        transition-colors duration-500">
                            <Download className="w-6 h-6" />
                        </a>
                    </div>
                </div> {/* <--- Fin del div de Texto/Links */}

                {/* 2. Área de la Foto de Perfil (Corregido: Ahora está al lado del div de Texto) */}
                <div className="shrink-0">
                    <img 
                        src={Foto} // Usando la importación {Foto}
                        alt="Foto de perfil"
                        className="w-70 h-70 rounded-full object-cover border-3 border-cyan-400 dark:border-red-500 transition-colors duration-500 shadow-2xl"
                    />
                </div>
            </div>
        </section>
    )
};

export default Body;