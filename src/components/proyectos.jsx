import React, { useState, useEffect } from 'react';
import { Briefcase } from 'lucide-react'; 
import ProyectoTarjeta from './proyectoTarjeta';

const Proyectos = () => {
    
    const [proyectos, setProyectos] = useState([]);
    const [cargando, setCargando] = useState(true);

    // --- 1. DATOS INICIALES CON IMÁGENES ---
    const PROYECTOS_INICIALES = [
        {
            titulo: "E-commerce Tierra Viva",
            descripcion: "Plataforma de comercio electrónico completa con autenticación, pasarela de pagos y panel de administración.",
            tecnologias: ["Html", "JavaScript", "CSS", "Bootstap", "MySql", "Java", "SprinBoot"],
            enlaceDemo: "https://github.com/TierraVivaa/tierra-viva-frontend.git",
            enlaceRepo: "https://github.com/TierraVivaa/tierra-viva-frontend.git",
            
            // <---- CAMBIO CLAVE 1: AGREGAR ARRAY DE IMAGENES ---->
            imagenes: [
                "/images/ecommerce-shot-1.jpg", 
                "/images/ecommerce-shot-2.jpg",
                "/images/ecommerce-shot-3.jpg",
            ],
            // <----------------------------------------------------->

            githubRepo: "TU_USUARIO/nombre-del-repo-ecommerce",
            color: "border-purple-500"
        },
        {
            titulo: "Clon de Red Social con Django",
            descripcion: "Implementación de funciones básicas de una red social: posts, likes, comentarios y seguimiento de usuarios.",
            tecnologias: ["Python", "Django", "PostgreSQL", "Tailwind CSS"],
            enlaceDemo: "http://demo.social.com",
            enlaceRepo: "https://github.com/TierraVivaa/tierra-viva-frontend.git",

            // <---- CAMBIO CLAVE 1: AGREGAR ARRAY DE IMAGENES ---->
            imagenes: [
                "/images/social-shot-1.jpg",
                "/images/social-shot-2.jpg",
            ],
            // <----------------------------------------------------->

            githubRepo: "TU_USUARIO/nombre-del-repo-social",
            color: "border-blue-500" 
        },
        // Asegúrate de agregar el campo 'imagenes' a TODOS tus proyectos.
    ];

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
    }, []);
    
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

            <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2">
                
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