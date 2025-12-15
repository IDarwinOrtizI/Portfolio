import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import ItemLineaTiempo from './timeLineItem'; 

const Experiencia = () => {
    
    // --- CONSTANTES DE EXPERIENCIA Y EDUCACIÓN ---
    const EXPERIENCIA_LABORAL = [/*
        {
            tipo: "laboral",
            titulo: "Desarrollador Web Full Stack",
            empresa: "Tech Solutions S.A.",
            fecha: "Enero 2023 - Presente",
            descripcion: "Lideré el desarrollo y mantenimiento de aplicaciones web con React y Node.js. Implementación de CI/CD para despliegues automáticos.",
            tecnologias: ["React", "Node.js", "MongoDB", "AWS", "Docker"]
        },
        {
            tipo: "laboral",
            titulo: "Desarrollador Frontend Junior",
            empresa: "Innovate Digital",
            fecha: "Julio 2021 - Diciembre 2022",
            descripcion: "Colaboración en la refactorización de interfaces de usuario utilizando TypeScript y Tailwind CSS. Mejora del rendimiento en un 20%.",
            tecnologias: ["TypeScript", "Tailwind CSS", "Vue.js", "Git"]
        },*/
    ];

    const EDUCACION = [
        {
            tipo: "educacion",
            titulo: "Full Stack Java",
            institucion: "Generation Colombia",
            fecha: "Octubre 2025 - Enero 2026",
            descripcion: "Especialización en desarrollo de software y bases de datos. Proyecto de tesis sobre sistemas distribuidos.",
        },
        {
            tipo: "educacion",
            titulo: "Tecnolo En Analisis Y Desarrollo De Software",
            institucion: "Politecnico Grancolombiano",
            fecha: "Enero 2022 - Septiembre 2025",
            descripcion: "Especialización en desarrollo de software y bases de datos. Proyecto de tesis sobre sistemas distribuidos.",
        },
    ];

    // Combinamos y ordenamos
    const DATOS_LINEA_TIEMPO = [...EXPERIENCIA_LABORAL, ...EDUCACION].sort(() => 0);

    return (
        <section className="bg-white dark:bg-gray-950 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Título de la Sección */}
                <h2 className="text-4xl font-extrabold mb-12 text-center 
                    text-cyan-800 dark:text-red-500 transition-colors duration-500">
                    
                    <Briefcase className='h-8 w-8 mr-3 inline-block 
                        text-cyan-600 dark:text-red-500 align-middle'/>
                    Experiencia & Educación
                </h2>

                {/* Contenedor de la Línea de Tiempo */}
                <div className="relative">
                    {/* Línea vertical central */}
                    <div className="absolute left-1/2 hidden md:block w-0.5 bg-gray-300 dark:bg-gray-700 h-full transform -translate-x-1/2"></div>
                    
                    {/* Mapeo de los ítems de la línea de tiempo */}
                    {DATOS_LINEA_TIEMPO.map((item, indice) => (
                        <ItemLineaTiempo // Componente 
                            key={indice}
                            datos={item} // Propiedad 
                            esIzquierda={indice % 2 === 0} // Propiedad 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experiencia;