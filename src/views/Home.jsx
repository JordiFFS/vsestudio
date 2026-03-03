import { Footer, MisionVision, NavBar, PropuestaValor, QuienesSomos } from "../components"
import { useRef, useEffect, useState } from "react"

function Home() {
    const infoRef = useRef(null)
    const [displayedText, setDisplayedText] = useState('')
    const [showContent, setShowContent] = useState(false)
    const fullText = 'Confianza y Liquidez sin Fronteras.'

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowContent(true)
            let i = 0
            const interval = setInterval(() => {
                setDisplayedText(fullText.slice(0, i + 1))
                i++
                if (i >= fullText.length) clearInterval(interval)
            }, 50)
            return () => clearInterval(interval)
        }, 800)
        return () => clearTimeout(timeout)
    }, [])

    const scrollToInfo = () => {
        infoRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const beforeGreen = displayedText.slice(0,
        displayedText.indexOf('sin Fronteras.') === -1
            ? displayedText.length
            : displayedText.indexOf('sin Fronteras.')
    )
    const greenPart = displayedText.indexOf('sin Fronteras.') !== -1
        ? displayedText.slice(displayedText.indexOf('sin Fronteras.'))
        : ''

    return (
        <div className="relative">

            {/* ── Fondo fijo global: fondo.avif ── */}
            <div className="fixed inset-0" style={{ zIndex: 0 }}>
                <img
                    src="/fondo.avif"
                    alt=""
                    className="w-full h-full object-cover"
                />
                {/* Overlay oscuro suave para legibilidad */}
                <div className="absolute inset-0" style={{ background: 'rgba(10,15,30,0.6)' }} />
            </div>

            {/* ── Todo el contenido encima del fondo ── */}
            <div className="relative" style={{ zIndex: 1 }}>
                <NavBar />

                {/* ── SECCIÓN 1: Hero pantalla completa ── */}
                <section className="relative w-full h-screen overflow-hidden">
                    <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-8">

                        {/* logo.avif con estrella y texto centrados encima */}
                        <div
                            className="relative w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl"
                            style={{ animation: 'fadeInUp 1s ease forwards', opacity: 0 }}
                        >
                            {/* Imagen logo */}
                            <img
                                src="/logo.avif"
                                alt="Logo"
                                className="w-full rounded-2xl object-cover"
                                style={{ maxHeight: '660px', objectPosition: 'center' }}
                            />

                            {/* Overlay sobre la imagen */}
                            <div className="absolute inset-0 rounded-2xl"
                                style={{ background: 'rgba(10,15,30,0.45)' }} />

                            {/* Estrella + texto centrados */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 rounded-2xl">
                                {/* <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="drop-shadow-xl"
                                    style={{
                                        color: 'white',
                                        width: 'clamp(28px, 5vw, 48px)',
                                        height: 'clamp(28px, 5vw, 48px)',
                                        animation: 'starPop 0.6s ease forwards',
                                        opacity: 0
                                    }}
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg> */}

                                <h1
                                    className="font-bold text-white text-center leading-tight drop-shadow-xl"
                                    style={{
                                        fontSize: 'clamp(14px, 3vw, 32px)',
                                        minHeight: '2em',
                                        animation: 'fadeIn 0.5s 0.4s ease forwards',
                                        opacity: 0
                                    }}
                                >
                                    {beforeGreen}
                                    <span style={{ color: '#b7e620' }}>{greenPart}</span>
                                    {showContent && displayedText.length < fullText.length && (
                                        <span className="animate-pulse" style={{ color: '#b7e620' }}>|</span>
                                    )}
                                </h1>
                            </div>
                        </div>
                    </div>

                    {/* Flecha scroll */}
                    <button
                        onClick={scrollToInfo}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
                        style={{ color: 'rgba(255,255,255,0.4)', animation: 'fadeInUp 2s ease forwards', opacity: 0 }}
                    >
                        <span className="text-xs tracking-widest uppercase">Ver más</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </section>

                {/* ── SECCIÓN 2: billete.avif + cuadro blanco ── */}
                <section ref={infoRef} className="relative w-full overflow-hidden" style={{ minHeight: '480px' }}>
                    <img src="/billete.avif" alt="billete" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{ background: 'rgba(10,15,30,0.5)' }} />

                    <div className="relative z-10 flex items-center justify-center py-20 px-4">
                        <div
                            className="flex flex-col items-center gap-6 rounded-3xl text-center"
                            style={{
                                background: 'rgba(255,255,255,0.80)',
                                backdropFilter: 'blur(12px)',
                                maxWidth: '620px',
                                width: '100%',
                                padding: 'clamp(2rem, 5vw, 4rem)',
                                boxShadow: '0 8px 48px rgba(0,0,0,0.4)'
                            }}
                        >
                            {/* Línea top */}
                            <div className="w-14 h-1.5 rounded-full" style={{ background: '#b7e620' }} />

                            {/* Título */}
                            <h2 style={{
                                fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                                fontWeight: 900,
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                color: '#111827',
                                lineHeight: 1.1
                            }}>
                                Crypto <span style={{ color: '#b7e620' }}>Exchange</span>
                            </h2>

                            {/* Divisor */}
                            <div className="w-full h-px" style={{ background: 'rgba(0,0,0,0.08)' }} />

                            {/* Slogan */}
                            <p style={{
                                fontSize: 'clamp(1.1rem, 3.5vw, 1.75rem)',
                                fontWeight: 600,
                                color: '#1f2937',
                                lineHeight: 1.4
                            }}>
                                Confianza y Liquidez <br />
                                <span style={{ fontWeight: 900, color: '#b7e620' }}>sin Fronteras.</span>
                            </p>

                            {/* Línea bottom */}
                            <div className="w-14 h-1.5 rounded-full" style={{ background: '#b7e620' }} />
                        </div>
                    </div>
                </section>

                {/* ── SECCIONES RESTANTES ── */}
                <QuienesSomos />
                <MisionVision />
                <PropuestaValor />
                <Footer />
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes starPop {
                    0%   { opacity: 0; transform: scale(0.4); }
                    70%  { transform: scale(1.15); }
                    100% { opacity: 1; transform: scale(1); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to   { opacity: 1; }
                }
            `}</style>
        </div>
    )
}

export default Home