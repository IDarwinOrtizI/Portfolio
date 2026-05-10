import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProyectoTarjeta = React.memo(({ proyecto }) => {
    
    // Desestructuración
    const { 
        titulo, 
        descripcion, 
        tecnologias, 
        enlaceDemo, 
        enlaceRepo, 
        color,
        imagenes = []
    } = proyecto;
    
    const [imagenActual, setImagenActual] = useState(0);

    return (
        // Contenedor principal
        <div className={`
            bg-white dark:bg-gray-800/90 rounded-xl overflow-hidden shadow-xl
            border-t-4 ${color} 
            transition duration-300 transform hover:scale-[1.02] hover:shadow-2xl
            p-4 sm:p-6
        `}>
            
            {/* Imagen del proyecto */}
            {imagenes.length > 0 && (
                <div className="relative mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700">
                    <img 
                        src={imagenes[imagenActual]} 
                        alt={`${titulo} - imagen ${imagenActual + 1}`}
                        className="w-full h-auto max-h-48 object-contain"
                    />
                    {imagenes.length > 1 && (
                        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
                            {imagenes.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setImagenActual(i)}
                                    className={`w-2 h-2 rounded-full transition ${
                                        imagenActual === i 
                                        ? 'bg-white' 
                                        : 'bg-white/50'
                                    }`}
                                    aria-label={`Ver imagen ${i + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}
            
            {/* Título */}
            <h3 className="text-xl sm:text-2xl font-bold mb-2 
                text-gray-900 dark:text-white">
                {titulo}
            </h3>
            
            {/* Descripción */}
            <p className="text-base sm:text-sm text-gray-600 dark:text-gray-400 mb-4">
                {descripcion}
            </p>
            
            {/* Tecnologías */}
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

            {/* Enlaces */}
            <div className="flex space-x-4 pt-2">
                {enlaceRepo && (
                    <a 
                        href={enlaceRepo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center space-x-2 text-cyan-600 dark:text-red-400 hover:underline transition"
                        aria-label={`Ver código fuente de ${titulo} en GitHub`}
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
                        aria-label={`Ver demo de ${titulo}`}
                    >
                        <ExternalLink className="w-5 h-5" />
                        <span>Demo</span>
                    </a>
                )}
            </div>
        </div>
    );
});

export default ProyectoTarjeta;