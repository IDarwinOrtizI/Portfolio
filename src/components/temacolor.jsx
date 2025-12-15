import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react'; 

const ThemeToggle = () => {
    // Inicializa en FALSE (modo claro) por seguridad. La lógica de carga se va al useEffect.
    const [esModoOscuro, setEsModoOscuro] = useState(false);

    // 1. Efecto de CARGA: Lee la preferencia del usuario de localStorage o del sistema
    useEffect(() => {
        const preferenciaGuardada = localStorage.getItem('tema');
        const preferenciaSistemaOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        let debeSerOscuro = false;

        if (preferenciaGuardada) {
            debeSerOscuro = preferenciaGuardada === 'oscuro';
        } else {
            // Si no hay preferencia guardada, usa la del sistema.
            debeSerOscuro = preferenciaSistemaOscuro;
        }

        setEsModoOscuro(debeSerOscuro);

        // Ya que el estado se actualizó, activa el efecto de CLASE (punto 2)
        // No hay necesidad de repetir la lógica aquí, el siguiente useEffect se encargará.
    }, []); // Se ejecuta solo una vez al cargar.

    // 2. Efecto de CLASE: Se dispara cada vez que 'esModoOscuro' cambia.
    useEffect(() => {
        const elementoHtml = document.documentElement;
        if (esModoOscuro) {
            elementoHtml.classList.add('dark');
            localStorage.setItem('tema', 'oscuro');
        } else {
            elementoHtml.classList.remove('dark');
            localStorage.setItem('tema', 'claro');
        }
    }, [esModoOscuro]); // Se ejecuta cuando el estado cambia.

    const cambiarTema = () => {
        setEsModoOscuro(!esModoOscuro);
    };

    return (
        <button
            onClick={cambiarTema}
            className="
                p-3 rounded-full 
                text-gray-600 dark:text-gray-300 
                hover:bg-gray-200 dark:hover:bg-gray-700 
                transition"
            title={esModoOscuro ? "Desactivar Modo Oscuro" : "Activar Modo Oscuro"}
        >
            {esModoOscuro ? (
                <Sun className="w-6 h-6 text-yellow-400" /> 
            ) : (
                <Moon className="w-6 h-6" /> 
            )}
        </button>
    );
};

export default ThemeToggle;