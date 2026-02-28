import React from 'react'

export const QuienesSomos = () => {
    return (
        <section className="w-full bg-gray-50 py-16 px-4 sm:px-8 md:px-16">
            <div className="max-w-6xl mx-auto">

                {/* ── Carta principal ── */}
                <div className="bg-white rounded-3xl shadow-lg overflow-hidden" style={{ maxHeight: '90vh' }}>
                    <div className="flex flex-col md:flex-row h-full">

                        {/* ── Lado izquierdo: contenido ── */}
                        <div
                            className="flex-1 flex flex-col justify-center gap-6 p-8 sm:p-10 md:p-14"
                            style={{ animation: 'fadeInLeft 1s ease forwards', opacity: 0 }}
                        >
                            {/* Etiqueta */}
                            <span className="text-[#b7e620] text-xs font-semibold uppercase tracking-widest">
                                Nuestra Historia
                            </span>

                            {/* Título */}
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                                ¿Quiénes <span className="text-[#b7e620]">Somos?</span>
                            </h2>

                            {/* Empresa */}
                            <div className="flex items-center gap-3">
                                <div className="w-1 h-8 bg-[#b7e620] rounded-full" />
                                <p className="text-gray-700 font-semibold text-lg tracking-wide">
                                    Crypto Exchange
                                </p>
                            </div>

                            {/* Descripción */}
                            <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-lg">
                                Es un operador independiente de intercambio de criptoactivos enfocado en la compra y
                                venta segura de activos digitales en Latinoamérica. Brindamos liquidez inmediata,
                                operaciones privadas (OTC) y atención personalizada para clientes e influenciadores
                                que requieren rapidez, confidencialidad y confianza.
                            </p>

                            {/* Divisor */}
                            <div className="w-12 h-px bg-gray-200" />

                            {/* Redes sociales */}
                            <div className="flex items-center gap-4">
                                <span className="text-gray-400 text-xs uppercase tracking-widest">Síguenos</span>

                                {/* TikTok */}
                                <a href="#" className="text-gray-400 hover:text-black transition-all duration-200 hover:scale-110 transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z" />
                                    </svg>
                                </a>

                                {/* Facebook */}
                                <a href="#" className="text-gray-400 hover:text-blue-600 transition-all duration-200 hover:scale-110 transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>

                                {/* Instagram */}
                                <a href="#" className="text-gray-400 hover:text-pink-500 transition-all duration-200 hover:scale-110 transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* ── Lado derecho: imagen ── */}
                        <div
                            className="w-full md:w-2/5 min-h-64 md:min-h-0"
                            style={{ animation: 'fadeInRight 1s ease forwards', opacity: 0 }}
                        >
                            <img
                                src="/somos.avif"
                                alt="Quiénes Somos"
                                className="w-full h-64 sm:h-80 md:h-full object-cover"
                            />
                        </div>

                    </div>
                </div>

            </div>

            <style>{`
                @keyframes fadeInLeft {
                    from { opacity: 0; transform: translateX(-28px); }
                    to   { opacity: 1; transform: translateX(0); }
                }
                @keyframes fadeInRight {
                    from { opacity: 0; transform: translateX(28px); }
                    to   { opacity: 1; transform: translateX(0); }
                }
            `}</style>
        </section>
    )
}