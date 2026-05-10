import React from 'react';

const Tarjeta = ({ name, icon }) => {
    return (
        <div className="
            flex flex-col items-center justify-center space-y-1
            w-full
            bg-gray-100 dark:bg-gray-800/70 backdrop-blur-sm
            rounded-xl p-3 text-center 
            transition-transform duration-300
            border border-transparent hover:border-cyan-500 dark:hover:border-red-500
            hover:shadow-lg dark:hover:shadow-red-500/50 
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