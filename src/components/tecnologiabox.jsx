import React from 'react';
import Tarjeta from './tarjeta'; 

const TecnologiaBox = ({ title, items, colorClass }) => {
    return (
        <div className={`
            // Fondo de la Caja
            bg-white/90 dark:bg-gray-900/70 border-t-4 ${colorClass} 
            rounded-2xl p-6 shadow-xl dark:shadow-gray-900/50
            min-h-[250px]
        `}>
            <h3 className="text-xl font-bold mb-6 text-center
                text-cyan-700 dark:text-red-400 ">
                {title}
            </h3>
            <div className="
                // grid-cols-2: Móviles pequeños (2 por fila)
                // sm:grid-cols-3: Móviles grandes/tablets (3 por fila)
                // lg:grid-cols-3: Escritorio (3 por fila)
                grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 
                
                // Mantenemos el gap alto para la separación que logramos antes
                gap-8 justify-items-center 
            ">
                {items.map((tec, index) => (
                    <Tarjeta 
                        key={index}
                        name={tec.name}
                        icon={tec.Icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default TecnologiaBox;