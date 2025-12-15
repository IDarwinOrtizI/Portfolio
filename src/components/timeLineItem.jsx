import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

// Renombramos el componente y las props a español
const ItemLineaTiempo = ({ datos, esIzquierda }) => {
    
    // Asignación de iconos y colores
    const Icono = datos.tipo === 'laboral' ? Briefcase : GraduationCap;
    
    const colorPrimario = datos.tipo === 'laboral' ? 'text-green-500' : 'text-blue-500';
    const fondoPrimario = datos.tipo === 'laboral' ? 'bg-green-500' : 'bg-blue-500'; // 'bgPrimario' a 'fondoPrimario'

    // Clases para alternar la alineación (izquierda vs. derecha en desktop)
    const claseAlineacion = esIzquierda ? 'md:flex-row' : 'md:flex-row-reverse'; // 'alignClass' a 'claseAlineacion'
    const alineacionTexto = esIzquierda ? 'md:text-right' : 'md:text-left'; // 'textAlignment' a 'alineacionTexto'

    return (
        <div className={`relative flex flex-col md:flex-row items-center justify-between py-6 ${claseAlineacion}`}>
            
            {/* Contenido (Tarjeta) */}
            <div className={`
                w-full md:w-[45%] p-6 rounded-lg shadow-xl dark:shadow-none
                bg-white dark:bg-gray-800 transition duration-300
                border-t-4 ${fondoPrimario} border-opacity-75
                ${alineacionTexto} // Alineación del texto dentro de la tarjeta
            `}>
                <h3 className={`text-xl font-bold mb-1 ${colorPrimario}`}>
                    {datos.titulo}
                </h3>
                <p className="font-semibold text-gray-700 dark:text-gray-200 mb-1">
                    {datos.empresa || datos.institucion}
                </p>
                <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-3">
                    {datos.fecha}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify">
                    {datos.descripcion}
                </p>

                {/* Tecnologías (Solo si es laboral) */}
                {datos.tecnologias && (
                    <div className="flex flex-wrap gap-2 pt-2">
                        {datos.tecnologias.map((tec, indice) => ( // 'tech' a 'tec', 'i' a 'indice'
                            <span key={indice} className="
                                bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200
                                px-3 py-1 text-xs font-semibold rounded-full
                            ">
                                {tec}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Círculo y Punto Central */}
            <div className="
                md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2
                my-4 md:my-0
            ">
                <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center 
                    border-4 border-white dark:border-gray-950 z-10 
                    shadow-md ${fondoPrimario}
                `}>
                    <Icono className={`w-5 h-5 text-white`} />
                </div>
            </div>

            {/* Espacio en el lado opuesto */}
            <div className="hidden md:block w-[45%]">
                {/* Vacío */}
            </div>
        </div>
    );
};

export default ItemLineaTiempo;