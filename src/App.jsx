import React, { useState } from 'react';
import Menu from "./components/menu"
import Body from "./components/body" // Asumimos que este es tu componente 'profile' o 'inicio'
import Tecnologias from "./components/tecnologias"
import Proyectos from "./components/proyectos"
import Experiencia from "./components/experiencia"
import Contacto from "./components/contacto"

function App() {
    // 1. Estado para rastrear la sección activa (útil para el resaltado del menú)
    const [seccionActiva, establecerSeccionActiva] = useState('inicio'); 

    // 2. Función para manejar el desplazamiento (scroll)
    const manejarNavegacion = (idSeccion) => {
        const elemento = document.getElementById(idSeccion);
        
        if (elemento) {
            // Desplaza la vista al elemento con un scroll suave
            elemento.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start'
            });
            // Actualiza el estado para que el menú resalte el botón clicado
            establecerSeccionActiva(idSeccion); 
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 relative"> 
            
            {/* 2. BARRA LATERAL (Menu):
                - Le pasamos el estado actual
                - Le pasamos la función para que los botones la llamen
            */}
            <Menu 
                activeSection={seccionActiva} 
                onNavigate={manejarNavegacion}
            />
            
            {/* 3. CONTENIDO PRINCIPAL */}
            <main className="">  
                
                {/* NOTA: Usamos <section id="..."> para que la función manejarNavegacion pueda encontrarlos. */}
                {/* Los IDs deben coincidir con los IDs definidos en Menu.jsx:
                    'inicio', 'technologies', 'projects', 'experience', 'contact' 
                */}

                {/* INICIO / BODY (ID: profile o inicio) */}
                <section id="Inicio" className="py-8 sm:py-16">
                    <Body /> 
                </section>
                
                {/* TECNOLOGÍAS (ID: technologies) */}
                <section id="Tecnologías" className="py-8 sm:py-16">
                    <Tecnologias/>
                </section>
                
                {/* PROYECTOS (ID: projects) */}
                <section id="Proyectos" className="py-8 sm:py-16">
                    <Proyectos/>
                </section>
                
                {/* EXPERIENCIA (ID: experience) */}
                <section id="Experiencia" className="py-8 sm:py-16">
                    <Experiencia/>
                </section>
                
                {/* CONTACTO (ID: contact) */}
                <section id="Contacto" className="py-8 sm:py-16">
                    <Contacto/>
                </section>
                
            </main>
        </div>
    )
}

export default App