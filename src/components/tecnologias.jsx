import React from 'react';
import TecnologiaBox from './tecnologiabox';

// Importaciones (Usamos solo las que te funcionan)
import { 
    SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, 
    SiMysql, SiGit, SiGithub, SiBootstrap, SiPostman, SiSupabase,
    SiPython 
} from 'react-icons/si';

import { BiLogoJava } from 'react-icons/bi';
import { Code} from 'lucide-react'; 
import { BiLogoSpringBoot } from 'react-icons/bi';

// Helper para pasar el tamaño de ícono a las tarjetas
const ICON_SIZE = 'w-full h-full'; 

const Tecnologias = () => {
    const FRONTEND = [
        { name: "HTML5", Icon: <SiHtml5 className={`text-orange-500 ${ICON_SIZE}`}/>},
        { name: "CSS3", Icon: <SiCss3 className={`text-blue-500 ${ICON_SIZE}`}/>},
        { name: "JS", Icon: <SiJavascript className={`text-yellow-500 ${ICON_SIZE}`}/>},
        { name: "REACT", Icon: <SiReact className={`text-cyan-400 ${ICON_SIZE}`}/>},
        { name: "BOOTSTRAP", Icon: <SiBootstrap className={`text-purple-500 ${ICON_SIZE}`}/>},
        { name: "TAILWIND", Icon: <SiTailwindcss className={`text-cyan-400 ${ICON_SIZE}`}/>},
    ];

    const BACKEND = [
        { name: "JAVA", Icon: <BiLogoJava className={`text-red-500 ${ICON_SIZE}`}/>}, 
        { name: "SPRINGBOOT", Icon: <BiLogoSpringBoot className={`text-green-500 ${ICON_SIZE}`}/>},
        { name: "PYTHON ", Icon: <SiPython  className={`text-blue-400 ${ICON_SIZE}`}/>},
    ];

    const HERRAMIENTAS = [
        { name: "GIT", Icon: <SiGit className={`text-orange-400 ${ICON_SIZE}`}/>},
        { name: "GITHUB", Icon: <SiGithub className={`text-gray-300 ${ICON_SIZE}`}/>},
        { name: "POSTMAN", Icon: <SiPostman className={`text-gray-500 ${ICON_SIZE}`}/>},
    ];

    const BASESDEDATOS = [
        { name: "SUPABASE", Icon: <SiSupabase className={`text-orange-400 ${ICON_SIZE}`}/>},
        { name: "MYSQL", Icon: <SiMysql className={`text-blue-400 ${ICON_SIZE}`}/>},
    ];

    const BORDER_COLORS = {
        FRONTEND: "border-green-500",
        BACKEND: "border-red-500",
        BASESDEDATOS: "border-cyan-500",
        TOOLS: "border-cyan-500",
    };
    
    return (
        // Añadimos margen superior (pt-16) para separarlo de la sección Body
        // y margen inferior (pb-16) si quieres más espacio después de las tarjetas.
        <section className="bg-white dark:bg-gray-950 pt-16 pb-8">
            
            {/* 1. Título Ajustado:
                - text-4xl: Tamaño más grande.
                - items-center: Centra verticalmente el ícono con el texto.
                - justify-center: Centra horizontalmente el bloque completo.
            */}
            <h2 className="text-4xl font-extrabold mb-12 text-center flex items-center justify-center
                text-cyan-800 dark:text-red-500 transition-colors duration-500">
                
                {'<>'} Habilidades
            </h2>

            {/* Estructura del Grid de 3 Columnas */}
            <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 lg:grid-cols-3">
                
                <TecnologiaBox 
                    title="FRONTEND" 
                    items={FRONTEND} 
                    colorClass={BORDER_COLORS.FRONTEND}
                />
                <TecnologiaBox 
                    title="BACKEND" 
                    items={BACKEND} 
                    colorClass={BORDER_COLORS.BACKEND}
                />
                <TecnologiaBox 
                    title="BASESDEDATOS" 
                    items={BASESDEDATOS} 
                    colorClass={BORDER_COLORS.TOOLS}
                />
                <TecnologiaBox 
                    title="HERRAMIENTAS" 
                    items={HERRAMIENTAS} 
                    colorClass={BORDER_COLORS.TOOLS}
                />
            </div>
        </section>
    );
};

export default Tecnologias;