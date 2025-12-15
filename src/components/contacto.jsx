import React, { useRef, useState } from 'react';
import { Mail, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

// NOTA IMPORTANTE: REEMPLAZA ESTOS VALORES CON TUS CLAVES REALES DE EMAILJS
const ID_SERVICIO = "service_7wzf4mp";   // Tu ID de servicio (ej: gmail)
const ID_PLANTILLA = "template_xxxxxxxx"; // Tu ID de plantilla
const CLAVE_PUBLICA = "user_xxxxxxxx";  // Tu User ID (Public Key)

const Contacto = () => {
    // Referencia para acceder a los datos del formulario (ref)
    const referenciaFormulario = useRef();
    
    // Estado para dar feedback al usuario: '', 'enviando', 'exito', 'error'
    const [estadoEnvio, establecerEstadoEnvio] = useState(''); 

    // Función que se llama al enviar el formulario
    const manejarEnvioCorreo = (evento) => {
        evento.preventDefault();
        establecerEstadoEnvio('enviando');

        emailjs.sendForm(ID_SERVICIO, ID_PLANTILLA, referenciaFormulario.current, CLAVE_PUBLICA)
            .then((resultado) => {
                console.log('Correo enviado con éxito!', resultado.text);
                establecerEstadoEnvio('exito');
                // Limpiar el formulario
                referenciaFormulario.current.reset(); 
                setTimeout(() => establecerEstadoEnvio(''), 5000);
            }, (error) => {
                console.error('Fallo al enviar el correo:', error.text);
                establecerEstadoEnvio('error');
                setTimeout(() => establecerEstadoEnvio(''), 5000);
            });
    };

    // Texto dinámico para el botón
    let textoBoton;
    switch (estadoEnvio) {
        case 'enviando':
            textoBoton = 'Enviando...';
            break;
        case 'exito':
            textoBoton = '¡Enviado!';
            break;
        case 'error':
            textoBoton = 'Reintentar Envío';
            break;
        default:
            textoBoton = 'Enviar Mensaje';
    }


    return (
        <section className="bg-white dark:bg-gray-950 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Título de la Sección */}
                <h2 className="text-4xl font-extrabold mb-12 text-center 
                    text-cyan-800 dark:text-red-500 transition-colors duration-500">
                    
                    <Mail className='h-8 w-8 mr-3 inline-block 
                        text-cyan-600 dark:text-red-500 align-middle'/>
                    Contáctame
                </h2>

                <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-xl">
                    
                    {/* Mensajes de Feedback */}
                    {estadoEnvio === 'exito' && (
                        <p className="p-3 mb-4 text-sm font-medium text-green-700 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200" role="alert">
                            ¡Mensaje enviado con éxito! Te responderé lo antes posible.
                        </p>
                    )}
                    {estadoEnvio === 'error' && (
                        <p className="p-3 mb-4 text-sm font-medium text-red-700 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200" role="alert">
                            Hubo un error al enviar el mensaje. Por favor, revisa tus datos e inténtalo de nuevo.
                        </p>
                    )}

                    {/* Formulario */}
                    <form ref={referenciaFormulario} onSubmit={manejarEnvioCorreo} className="space-y-6">
                        
                        {/* Campo Nombre */}
                        <div>
                            <label htmlFor="nombre_usuario" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">
                                Tu Nombre
                            </label>
                            <input 
                                type="text" 
                                id="nombre_usuario" 
                                name="nombre_usuario" // El atributo 'name' debe coincidir con la plantilla de EmailJS
                                required 
                                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-cyan-500 focus:border-cyan-500" 
                                disabled={estadoEnvio === 'enviando'}
                            />
                        </div>

                        {/* Campo Email */}
                        <div>
                            <label htmlFor="email_usuario" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">
                                Tu Email
                            </label>
                            <input 
                                type="email" 
                                id="email_usuario" 
                                name="email_usuario" // El atributo 'name' debe coincidir con la plantilla de EmailJS
                                required 
                                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-cyan-500 focus:border-cyan-500" 
                                disabled={estadoEnvio === 'enviando'}
                            />
                        </div>

                        {/* Campo Mensaje */}
                        <div>
                            <label htmlFor="mensaje_usuario" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-200">
                                Tu Mensaje
                            </label>
                            <textarea 
                                id="mensaje_usuario" 
                                name="mensaje_usuario" // El atributo 'name' debe coincidir con la plantilla de EmailJS
                                rows="6" 
                                required 
                                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-cyan-500 focus:border-cyan-500"
                                disabled={estadoEnvio === 'enviando'}
                            ></textarea>
                        </div>

                        {/* Botón de Envío */}
                        <button 
                            type="submit" 
                            disabled={estadoEnvio === 'enviando'}
                            className={`
                                w-full flex items-center justify-center space-x-2 
                                px-6 py-3 text-lg font-semibold rounded-lg 
                                text-white transition duration-300 shadow-md
                                ${estadoEnvio === 'enviando' 
                                    ? 'bg-gray-500 cursor-not-allowed' 
                                    : 'bg-cyan-600 hover:bg-cyan-700 dark:bg-red-500 dark:hover:bg-red-600'}
                            `}
                        >
                            <Send className='w-5 h-5'/>
                            <span>{textoBoton}</span>
                        </button>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contacto;