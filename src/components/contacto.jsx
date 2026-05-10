import React, { useRef, useState } from 'react';
import { Mail, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

/**
 * INSTRUCCIONES PARA CONFIGURAR EMAILJS:
 * 
 * 1. Ve a https://www.emailjs.com/
 * 2. Crea una cuenta (es gratis)
 * 3. En tu dashboard, ve a "Email Services" y conecta tu email (Gmail, Outlook, etc)
 * 4. Ve a "Email Templates" y crea una plantilla con estos campos:
 *    - {{nombre_usuario}}
 *    - {{email_usuario}}
 *    - {{mensaje_usuario}}
 * 5. Copia tus valores aquí:
 */

// REEMPLAZA ESTOS VALORES CON TUS CLAVES REALES DE EMAILJS
const ID_SERVICIO = "service_7wzf4mp";        // Tu ID de servicio
const ID_PLANTILLA = "template_obidtio";     // Tu ID de plantilla
const CLAVE_PUBLICA = "dCiWHuCiJ-KJyu9UI";        // Tu User ID (Public Key)

const Contacto = () => {
    // Referencia para acceder a los datos del formulario
    const referenciaFormulario = useRef();
    
    // Estado para dar feedback al usuario: '', 'enviando', 'exito', 'error'
    const [estadoEnvio, establecerEstadoEnvio] = useState(''); 
    
    // Estado para guardar el mensaje de error
    const [mensajeError, establecerMensajeError] = useState('');

    /**
     * Función que se llama al enviar el formulario
     * Usa EmailJS para enviar el correo
     */
    const manejarEnvioCorreo = (evento) => {
        evento.preventDefault();
        
        // Validar que las claves estén configuradas
        if (ID_SERVICIO.includes('xxxxxxxx') || 
            ID_PLANTILLA.includes('xxxxxxxx') || 
            CLAVE_PUBLICA.includes('xxxxxxxx')) {
            establecerEstadoEnvio('error');
            establecerMensajeError('⚠️ Por favor, configura tus claves de EmailJS primero');
            setTimeout(() => {
                establecerEstadoEnvio('');
                establecerMensajeError('');
            }, 5000);
            return;
        }

        establecerEstadoEnvio('enviando');
        establecerMensajeError('');

        // Enviar el correo usando EmailJS
        emailjs.sendForm(
            ID_SERVICIO, 
            ID_PLANTILLA, 
            referenciaFormulario.current, 
            CLAVE_PUBLICA
        )
            .then((resultado) => {
                console.log('✅ Correo enviado con éxito!', resultado.text);
                establecerEstadoEnvio('exito');
                
                // Limpiar el formulario
                referenciaFormulario.current.reset(); 
                
                // Mostrar mensaje de éxito durante 5 segundos
                setTimeout(() => {
                    establecerEstadoEnvio('');
                }, 5000);
            })
            .catch((error) => {
                console.error('❌ Fallo al enviar el correo:', error);
                establecerEstadoEnvio('error');
                establecerMensajeError('Error: ' + (error.text || 'No se pudo enviar el correo'));
                
                // Mostrar mensaje de error durante 5 segundos
                setTimeout(() => {
                    establecerEstadoEnvio('');
                    establecerMensajeError('');
                }, 5000);
            });
    };

    // Texto dinámico para el botón
    let textoBoton = 'Enviar Mensaje';
    if (estadoEnvio === 'enviando') {
        textoBoton = 'Enviando...';
    } else if (estadoEnvio === 'exito') {
        textoBoton = '✅ ¡Enviado!';
    } else if (estadoEnvio === 'error') {
        textoBoton = 'Reintentar Envío';
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

                {/* Caja principal del formulario */}
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 sm:p-8 rounded-lg shadow-xl border border-gray-200 dark:border-gray-800">
                    {/* Mensaje de Éxito */}
                    {estadoEnvio === 'exito' && (
                        <div className="p-4 mb-6 text-sm font-medium text-green-700 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200 border border-green-300 dark:border-green-700" role="alert">
                            ✅ ¡Mensaje enviado con éxito! Te responderé lo antes posible.
                        </div>
                    )}
                    
                    {/* Mensaje de Error */}
                    {estadoEnvio === 'error' && (
                        <div className="p-4 mb-6 text-sm font-medium text-red-700 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200 border border-red-300 dark:border-red-700" role="alert">
                            ❌ {mensajeError || 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.'}
                        </div>
                    )}

                    {/* Formulario */}
                    <form ref={referenciaFormulario} onSubmit={manejarEnvioCorreo} className="space-y-6">
                        
                        {/* Campo Nombre */}
                        <div>
                            <label htmlFor="nombre_usuario" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-200">
                                Tu Nombre
                            </label>
                            <input 
                                type="text" 
                                id="nombre_usuario" 
                                name="nombre_usuario"
                                placeholder="Ej: Juan Pérez"
                                required 
                                className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:focus:ring-red-500 transition-all duration-300" 
                                disabled={estadoEnvio === 'enviando'}
                            />
                        </div>

                        {/* Campo Email */}
                        <div>
                            <label htmlFor="email_usuario" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-200">
                                Tu Email
                            </label>
                            <input 
                                type="email" 
                                id="email_usuario" 
                                name="email_usuario"
                                placeholder="tu.email@ejemplo.com"
                                required 
                                className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:focus:ring-red-500 transition-all duration-300" 
                                disabled={estadoEnvio === 'enviando'}
                            />
                        </div>

                        {/* Campo Mensaje */}
                        <div>
                            <label htmlFor="mensaje_usuario" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-200">
                                Tu Mensaje
                            </label>
                            <textarea 
                                id="mensaje_usuario" 
                                name="mensaje_usuario"
                                placeholder="Cuéntame sobre tu propuesta..."
                                rows="6" 
                                required 
                                className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:focus:ring-red-500 resize-none transition-all duration-300"
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
                                text-white transition-all duration-300 shadow-md
                                ${estadoEnvio === 'enviando' 
                                    ? 'bg-gray-500 cursor-not-allowed opacity-70' 
                                    : 'bg-cyan-600 hover:bg-cyan-700 dark:bg-red-500 dark:hover:bg-red-600 active:scale-95'}
                            `}
                        >
                            <Send className='w-5 h-5'/>
                            <span>{textoBoton}</span>
                        </button>

                    </form>

                    {/* Nota informativa sobre EmailJS */}
                    {(ID_SERVICIO.includes('xxxxxxxx') || ID_PLANTILLA.includes('xxxxxxxx')) && (
                        <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                            <p className="text-sm text-yellow-800 dark:text-yellow-200">
                                <strong>📝 Nota:</strong> El formulario aún no está configurado con EmailJS. 
                                Por favor, actualiza tus claves en el archivo <code className="bg-yellow-100 dark:bg-yellow-900/40 px-2 py-1 rounded">contacto.jsx</code>
                            </p>
                        </div>
                    )}
                </div>

                {/* Información de contacto adicional */}
                <div className="mt-12 text-center">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        O puedes contactarme directamente a través de:
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a 
                            href="mailto:sebastiancaballero0811@gmail.com" 
                            className="inline-flex items-center space-x-2 text-cyan-600 dark:text-red-400 hover:text-cyan-700 dark:hover:text-red-300 transition-colors duration-300"
                        >
                            <Mail className="w-5 h-5" />
                            <span>Email</span>
                        </a>
                        <a 
                            href="https://wa.me/573202164566" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 text-cyan-600 dark:text-red-400 hover:text-cyan-700 dark:hover:text-red-300 transition-colors duration-300"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.006a9.87 9.87 0 00-4.255.949c-1.238.505-2.337 1.236-3.256 2.154a9.798 9.798 0 003.271 15.997c1.628.464 3.331.528 5.003.152 2.182-.514 4.166-1.889 5.434-3.8.529-.836.983-1.786 1.329-2.776.168-.5.297-1.007.373-1.52.032-.227.044-.461.039-.694a9.898 9.898 0 00-7.938-9.062zm4.376.092a8.113 8.113 0 012.906 15.209c-1.584.463-3.259.405-4.895-.12-1.894-.644-3.497-1.888-4.676-3.499.528.341 1.083.631 1.646.876 1.666.786 3.346 1.057 5.01.55 2.303-.713 4.048-2.869 4.009-5.016z"/>
                            </svg>
                            <span>WhatsApp</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacto;