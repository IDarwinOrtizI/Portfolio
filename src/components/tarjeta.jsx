import React from 'react';

const Tarjeta = ({ name, icon }) => {
    return (
        <div className="
            flex flex-col items-center justify-center space-y-1
            
            // AGREGAR w-full para que ocupe el ancho de la celda de la cuadrícula
            w-full
            
            // Fondo de la Tarjeta
            bg-gray-100 dark:bg-gray-800/70 backdrop-blur-sm
            
            // p-3 es el padding compacto que elegimos
            rounded-xl p-3 text-center 
            
            // SOLO TRANSICIÓN DE MOVIMIENTO (transform)
            transition-transform duration-300
            
            // Borde y Sombra en Hover
            border border-transparent hover:border-cyan-500 dark:hover:border-red-500
            hover:shadow-lg dark:hover:shadow-red-500/50 
            
            // Efecto de levantamiento
            transform hover:-translate-y-1
            cursor-pointer
        ">
            
            <div className="w-10 h-10 mx-auto mb-0"> 
                {icon}
            </div>
            
            <p className="font-semibold text-xs
                text-gray-900 dark:text-gray-200 
                
                // AJUSTE CLAVE: Estas clases controlan el desbordamiento del texto
                overflow-hidden text-ellipsis whitespace-nowrap max-w-full
                
                // Aplicamos la transición de color al texto
                transition-colors duration-500
                ">
                {name}
            </p>
        </div>
    );
};

export default Tarjeta;