import React, { useState } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const ProyectoTarjeta = React.memo(({ proyecto }) => {
    
    // Desestructuración
    const { 
        titulo, 
        descripcion, 
        tecnologias, 
        enlaceDemo, 
        enlaceRepo, 
        color,
        imagenes // <-- AÑADIDO: Imágenes del proyecto
    } = proyecto;

    // Estado para manejar el índice de la imagen actual
    const [indiceActual, setIndiceActual] = useState(0);

    // Número total de imágenes
    const totalImagenes = imagenes ? imagenes.length : 0;
    
    // Función para ir a la imagen anterior
    const irAnterior = () => {
        if (totalImagenes <= 1) return;
        setIndiceActual((prevIndice) => 
            prevIndice === 0 ? totalImagenes - 1 : prevIndice - 1
        );
    };

    // Función para ir a la siguiente imagen
    const irSiguiente = () => {
        if (totalImagenes <= 1) return;
        setIndiceActual((prevIndice) => 
            prevIndice === totalImagenes - 1 ? 0 : prevIndice + 1
        );
    };

    const tieneCarrusel = totalImagenes > 0;
    
    return (
        // Contenedor principal
        <div className={`
            bg-white dark:bg-gray-800/90 rounded-xl overflow-hidden shadow-xl
            border-t-4 ${color} 
            transition duration-300 transform hover:scale-[1.02] hover:shadow-2xl
        `}>
            
            {/* 1. Área de Carrusel/Imagen */}
            <div className="h-48 relative overflow-hidden bg-gray-200 dark:bg-gray-900">
                
                {/* Lógica y renderizado del Carrusel */}
                {tieneCarrusel ? (
                    <>
                        {/* Contenedor de las imágenes (Mueve el contenedor para la transición) */}
                        <div 
                            className="flex h-full transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${indiceActual * 100}%)` }}
                        >
                            {imagenes.map((src, index) => (
                                <img 
                                    key={index}
                                    src={src} 
                                    alt={`Captura ${index + 1} de ${titulo}`} 
                                    className="w-full h-full object-cover flex-shrink-0"
                                />
                            ))}
                        </div>

                        {/* Botones de Navegación */}
                        {totalImagenes > 1 && (
                            <>
                                <button 
                                    onClick={irAnterior}
                                    className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 mx-2 bg-black/50 hover:bg-black/70 rounded-full text-white z-10"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button 
                                    onClick={irSiguiente}
                                    className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 mx-2 bg-black/50 hover:bg-black/70 rounded-full text-white z-10"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </>
                        )}

                        {/* Puntos Indicadores */}
                        <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2 z-10">
                            {imagenes.map((_, index) => (
                                <div 
                                    key={index}
                                    onClick={() => setIndiceActual(index)}
                                    className={`
                                        h-2 w-2 rounded-full cursor-pointer transition
                                        ${indiceActual === index ? 'bg-white' : 'bg-gray-400/70'}
                                    `}
                                />
                            ))}
                        </div>
                    </>
                ) : (
                    /* Placeholder si no hay imágenes */
                    <div className="flex items-center justify-center h-full text-gray-400">
                        [No hay imágenes de previsualización]
                    </div>
                )}
            </div>

            {/* 2. Contenido del Proyecto (Resto del código sin cambios) */}
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 
                    text-gray-900 dark:text-white">
                    {titulo}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    {descripcion}
                </p>
                {/* ... (Tecnologías y Enlaces) */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {tecnologias.map((tech, i) => (
                        <span key={i} className="
                            bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200
                            px-3 py-1 text-xs font-semibold rounded-full
                        ">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex space-x-4 pt-2">
                    {enlaceRepo && (
                        <a 
                            href={enlaceRepo} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center space-x-2 text-cyan-600 dark:text-red-400 hover:underline transition"
                        >
                            <Github className="w-5 h-5" />
                            <span>Código</span>
                        </a>
                    )}
                    
                    {enlaceDemo && enlaceDemo !== "N/A" && (
                        <a 
                            href={enlaceDemo} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center space-x-2 text-cyan-600 dark:text-red-400 hover:underline transition"
                        >
                            <ExternalLink className="w-5 h-5" />
                            <span>Demo</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
});

export default ProyectoTarjeta;