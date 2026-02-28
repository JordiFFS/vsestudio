import { Footer, MisionVision, NavBar, PropuestaValor, QuienesSomos, GlobalBackground } from "../components"
import { useRef } from "react"

function Home() {
    const infoRef = useRef(null)

    const scrollToInfo = () => {
        infoRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="relative min-h-screen" style={{ background: '#0a0f1e' }}>

            {/* ── Fondo animado global ── */}
            <GlobalBackground />

            {/* ── Gradiente radial decorativo ── */}
            <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
                <div style={{
                    position: 'absolute', top: '-10%', left: '-10%',
                    width: '50%', height: '40%',
                    background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
                    borderRadius: '50%'
                }} />
                <div style={{
                    position: 'absolute', bottom: '10%', right: '-5%',
                    width: '40%', height: '40%',
                    background: 'radial-gradient(circle, rgba(183,230,32,0.05) 0%, transparent 70%)',
                    borderRadius: '50%'
                }} />
            </div>

            {/* ── Contenido ── */}
            <div className="relative" style={{ zIndex: 1 }}>
                <NavBar />

                {/* ── Hero ── */}
                <section className="relative w-full h-screen flex items-center px-4 sm:px-8 md:px-16 overflow-hidden">
                    <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-10">

                        {/* Texto */}
                        <div
                            className="flex-1 flex flex-col items-center md:items-start gap-6 text-center md:text-left"
                            style={{ animation: 'fadeInLeft 1s ease forwards', opacity: 0 }}
                        >
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 animate-pulse" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#b7e620' }}>
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#b7e620' }}>
                                    CRYPTO EXCHANGE
                                </span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
                                Confianza y Liquidez <br />
                                <span style={{ color: '#b7e620' }}>sin Fronteras.</span>
                            </h1>

                            <p className="text-sm sm:text-base max-w-md" style={{ color: 'rgba(255,255,255,0.5)' }}>
                                Tu plataforma de confianza para gestionar y mover tu dinero de forma rápida, segura y sin límites.
                            </p>

                            <div className="flex items-center gap-4 mt-2">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-6 py-3 rounded-full shadow transition-all duration-200 hover:scale-105">
                                    Comenzar ahora
                                </button>

                                <div className="relative cursor-pointer group">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} style={{ color: 'rgba(255,255,255,0.3)' }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                    <span className="absolute -top-1.5 -right-1.5 bg-blue-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow">
                                        0
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Imagen */}
                        <div
                            className="flex-1 w-full max-w-sm sm:max-w-md md:max-w-lg"
                            style={{ animation: 'fadeInRight 1s ease forwards', opacity: 0 }}
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl"
                                style={{ boxShadow: '0 0 40px rgba(59,130,246,0.15)' }}>
                                <img
                                    src="/logo.avif"
                                    alt="Confianza y Liquidez"
                                    className="w-full h-64 sm:h-80 md:h-96 object-contain"
                                    style={{ background: 'rgba(255,255,255,0.03)' }}
                                />
                                <div className="absolute inset-0 rounded-2xl pointer-events-none"
                                    style={{ boxShadow: 'inset 0 0 0 1px rgba(59,130,246,0.2)' }} />
                            </div>
                        </div>
                    </div>

                    {/* Flecha */}
                    <button
                        onClick={scrollToInfo}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-colors duration-200"
                        style={{ color: 'rgba(255,255,255,0.3)', animation: 'fadeInUp 1.5s ease forwards', opacity: 0 }}
                    >
                        <span className="text-xs tracking-widest uppercase">Ver más</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </section>

                {/* ── Secciones ── */}
                <div ref={infoRef}>
                    <QuienesSomos />
                    <MisionVision />
                    <PropuestaValor />
                </div>

                <Footer />
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
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(16px) translateX(-50%); }
                    to   { opacity: 1; transform: translateY(0) translateX(-50%); }
                }
            `}</style>
        </div>
    )
}

export default Home