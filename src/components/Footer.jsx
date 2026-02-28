import React from 'react'

export const Footer = () => {
    return (
        <footer className="w-full bg-white border-t border-gray-100 pt-10 pb-6 px-6 md:px-16">

            {/* ── Sección superior: 3 columnas ── */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">

                {/* Columna 1 - Contacto */}
                <div className="flex flex-col items-center sm:items-start gap-1">
                    <h3 className="text-[#b7e620] font-semibold text-sm uppercase tracking-widest mb-2">Contacto</h3>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#b7e620]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>+52 555 123 4567</span>
                    </div>
                </div>

                {/* Columna 2 - Email */}
                <div className="flex flex-col items-center sm:items-start gap-1">
                    <h3 className="text-[#b7e620] font-semibold text-sm uppercase tracking-widest mb-2">Email</h3>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#b7e620]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>contacto@empresa.com</span>
                    </div>
                </div>

                {/* Columna 3 - Follow */}
                <div className="flex flex-col items-center sm:items-start gap-1">
                    <h3 className="text-[#b7e620] font-semibold text-sm uppercase tracking-widest mb-2">Follow</h3>
                    <div className="flex items-center gap-3 flex-wrap">

                        {/* WhatsApp */}
                        <a href="#" className="text-gray-400 hover:text-green-500 transition-colors duration-200 hover:scale-110 transform">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                        </a>

                        {/* TikTok */}
                        <a href="#" className="text-gray-400 hover:text-black transition-colors duration-200 hover:scale-110 transform">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z" />
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors duration-200 hover:scale-110 transform">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                        </a>

                        {/* Facebook */}
                        <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>

                        {/* Kik */}
                        <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200 hover:scale-110 transform">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 15.575l-1.992-.8c-.362-.145-.537-.562-.392-.924l.008-.02c.013-.033.028-.065.045-.096l1.26-2.38-1.848-2.08a.68.68 0 01.1-.96l.02-.016 1.54-1.12c.303-.22.727-.153.948.15l2.5 3.45a.69.69 0 010 .8l-1.5 3.6a.69.69 0 01-.69.396zm-7.45 1.89l-.3-3.04-2.85 2.15a.93.93 0 01-1.3-.18l-.016-.022-.96-1.28a.93.93 0 01.18-1.3l2.85-2.15-2.85-2.15a.93.93 0 01-.18-1.3l.016-.022.96-1.28a.93.93 0 011.3-.18l2.85 2.15.3-3.04a.93.93 0 01.93-.85h1.6a.93.93 0 01.93.93v.1l-.48 10.27a.93.93 0 01-.93.9h-1.6a.93.93 0 01-.88-.71z" />
                            </svg>
                        </a>

                    </div>
                </div>
            </div>

            {/* ── Divisor ── */}
            <div className="border-t border-gray-100 mb-6" />

            {/* ── Sección inferior: Patrocinadores ── */}
            <div>
                <h3 className="text-center text-[#b7e620] font-semibold text-sm uppercase tracking-widest mb-6">Patrocinadores</h3>
                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                    {/* Reemplaza los src con tus imágenes reales */}
                    <img src="https://static.wixstatic.com/media/b51ae6_3933f6f0a4c44eb7bf3d66e417809d5e~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/104_BINANCE_I1.png 1x, https://static.wixstatic.com/media/b51ae6_3933f6f0a4c44eb7bf3d66e417809d5e~mv2.png/v1/fill/w_300,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/104_BINANCE_I1.png 2x" alt="Patrocinador 1" className="h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                    <img src="https://static.wixstatic.com/media/b51ae6_6faf963e4ec042a1bc38914d3820f0bd~mv2.jpeg/v1/fill/w_150,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/QmQH7MD3r5YZgcAxv1GKRo8UdvknLtsX5h5uzV7YArwSYi.jpeg 1x, https://static.wixstatic.com/media/b51ae6_6faf963e4ec042a1bc38914d3820f0bd~mv2.jpeg/v1/fill/w_300,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/QmQH7MD3r5YZgcAxv1GKRo8UdvknLtsX5h5uzV7YArwSYi.jpeg 2x" alt="Patrocinador 2" className="h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                    <img src="https://static.wixstatic.com/media/b51ae6_43e995abadd449429a598a80492dcbda~mv2.png/v1/fill/w_150,h_150,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0x0.png 1x, https://static.wixstatic.com/media/b51ae6_43e995abadd449429a598a80492dcbda~mv2.png/v1/fill/w_300,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0x0.png 2x" alt="Patrocinador 3" className="h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                    <img src="https://static.wixstatic.com/media/b51ae6_8f22c66555e14c32abf10a895f087f4b~mv2.jpg/v1/fill/w_150,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/maxresdefault.jpg 1x, https://static.wixstatic.com/media/b51ae6_8f22c66555e14c32abf10a895f087f4b~mv2.jpg/v1/fill/w_300,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/maxresdefault.jpg 2x" alt="Patrocinador 4" className="h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                    <img src="https://static.wixstatic.com/media/b51ae6_cea7736d44434527b95e7018dd1aef47~mv2.webp/v1/fill/w_150,h_150,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/trust-wallet-rounded-logo-design-free-png.webp 1x, https://static.wixstatic.com/media/b51ae6_cea7736d44434527b95e7018dd1aef47~mv2.webp/v1/fill/w_300,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/trust-wallet-rounded-logo-design-free-png.webp 2x" alt="Patrocinador 4" className="h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
            </div>

            {/* ── Copyright ── */}
            <p className="text-center text-gray-400 text-xs mt-8">© {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>

        </footer>
    )
}