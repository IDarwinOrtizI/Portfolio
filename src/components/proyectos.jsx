import React, { useState, useEffect, useMemo } from 'react';
import { Briefcase } from 'lucide-react'; 
import ProyectoTarjeta from './proyectoTarjeta';

const Proyectos = () => {
    
    const [proyectos, setProyectos] = useState([]);
    const [cargando, setCargando] = useState(true);

    // --- 1. DATOS INICIALES CON IMÁGENES (MEMOIZADO) ---
    // useMemo asegura que el array no se recree en cada render
    const PROYECTOS_INICIALES = useMemo(() => [
        {
            titulo: "E-commerce Tierra Viva",
            descripcion: "Plataforma de comercio electrónico completa con autenticación, pasarela de pagos y panel de administración.",
            tecnologias: ["Html", "JavaScript", "CSS", "Bootstap", "MySql", "Java", "SprinBoot"],
            enlaceDemo: "https://github.com/TierraVivaa/tierra-viva-frontend.git",
            enlaceRepo: "https://github.com/TierraVivaa/tierra-viva-frontend.git",
            
            githubRepo: "TierraVivaa/tierra-viva-frontend",
            imagenes: ["/img/tierraviva.png"],
            color: "border-purple-500"
        },
        {
            titulo: "WorkShakePoli",
            descripcion: "Juego web de palabras con tematicas variadas y niveles segun se desea",
            tecnologias: ["Python", "Django", "PostgreSQL", "Css", "JavaScript"],
            enlaceDemo: "https://github.com/Bambam934/WorkShakePoli.git",
            enlaceRepo: "https://github.com/Bambam934/WorkShakePoli.git",

            githubRepo: "Bambam934/WorkShakePoli",
            color: "border-blue-500" 
        },
        {
            titulo: "Sistema RH FullStack",
            descripcion: "Sistema de gestión de recursos humanos con autenticación, gestión de empleados y administración de nóminas.",
            tecnologias: ["Java", "Spring Boot", "React", "MySQL", "JWT"],
            enlaceDemo: "https://github.com/IDarwinOrtizI/Proyecto-RH-FullStack.git",
            enlaceRepo: "https://github.com/IDarwinOrtizI/Proyecto-RH-FullStack.git",

            githubRepo: "IDarwinOrtizI/Proyecto-RH-FullStack",
            imagenes: ["/img/rhempleados.png"],
            color: "border-green-500"
        },
    ], []);

    // ------------------- LÓGICA DE CARGA DE LENGUAJES -------------------
    
    const obtenerLenguajes = async (rutaRepo) => {
        const url = `https://api.github.com/repos/${rutaRepo}/languages`;
        try {
            const respuesta = await fetch(url);
            if (!respuesta.ok) throw new Error('Error al obtener lenguajes');
            
            const datos = await respuesta.json();
            return Object.keys(datos).filter(lang => datos[lang] > 10000); 
        } catch (error) {
            console.error(`Fallo al cargar lenguajes para ${rutaRepo}:`, error);
            return []; // Retornar array vacío en caso de error
        }
    };

    useEffect(() => {
        const cargarProyectos = async () => {
            const proyectosCargados = await Promise.all(
                PROYECTOS_INICIALES.map(async (p) => {
                    let tecnologias = p.tecnologias || []; 
                    
                    if (p.githubRepo) {
                        const tecnologiasApi = await obtenerLenguajes(p.githubRepo);
                        // Combina si es necesario
                        tecnologias = [...new Set([...tecnologias, ...tecnologiasApi])]; 
                    }
                    return { ...p, tecnologias };
                })
            );
            setProyectos(proyectosCargados);
            setCargando(false);
        };

        cargarProyectos();
    }, [PROYECTOS_INICIALES]);
    
    // ---------------------------------------------------------------------

    if (cargando) {
        return <div className="text-center py-16 dark:text-gray-300">Cargando proyectos desde GitHub...</div>;
    }

    return (
        <section className="bg-white dark:bg-gray-950 pt-16 pb-8">
            
            <h2 className="text-4xl font-extrabold mb-12 text-center 
                text-cyan-800 dark:text-red-500 transition-colors duration-500">
                
                <Briefcase className='h-8 w-8 mr-3 inline-block 
                    text-cyan-600 dark:text-red-500 align-middle'/>
                Proyectos
            </h2>

            <div className="max-w-2xl sm:max-w-4xl lg:max-w-7xl mx-auto grid gap-4 sm:gap-8 grid-cols-1 md:grid-cols-2">
                
                {proyectos.map((proyecto, index) => (
                    <ProyectoTarjeta 
                        key={index}
                        proyecto={proyecto} // El objeto proyecto incluye el array 'imagenes'
                    />
                ))}
            </div>
            
        </section>
    );
};

export default Proyectos;