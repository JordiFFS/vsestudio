import React, { useEffect, useRef } from 'react'
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll'

export const Footer = () => {
    const { ref, visible } = useAnimateOnScroll()
    const trackRef = useRef(null)
    const canvasRef = useRef(null)

    // ── Lluvia de $ en canvas ──
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')

        const resize = () => {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }
        resize()
        window.addEventListener('resize', resize)

        const drops = Array.from({ length: 40 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speed: 0.4 + Math.random() * 0.8,
            size: 10 + Math.random() * 10,
            opacity: 0.05 + Math.random() * 0.12,
        }))

        let animId
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            drops.forEach(d => {
                ctx.font = `bold ${d.size}px monospace`
                ctx.fillStyle = `rgba(183,230,32,${d.opacity})`
                ctx.fillText('$', d.x, d.y)
                d.y += d.speed
                if (d.y > canvas.height + 20) {
                    d.y = -20
                    d.x = Math.random() * canvas.width
                }
            })
            animId = requestAnimationFrame(draw)
        }
        draw()

        return () => {
            cancelAnimationFrame(animId)
            window.removeEventListener('resize', resize)
        }
    }, [])

    const sponsors = [
        { src: '/binance.jpeg', alt: 'Binance' },
        { src: '/bingx.jpeg', alt: 'BingX' },
        { src: '/bybit.jpeg', alt: 'Bybit' },
        { src: '/okx.jpeg', alt: 'OKX' },
        { src: '/trust.jpeg', alt: 'Trust' },
    ]

    const socials = [
        {
            href: 'http://wa.me/593982136689',
            hoverColor: '#25d366', label: 'WhatsApp',
            path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'
        },
        {
            href: 'https://www.instagram.com/beracryptoexchange',
            hoverColor: '#e1306c', label: 'Instagram',
            path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'
        },
        {
            href: '#', hoverColor: '#ffffff', label: 'TikTok',
            path: 'M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.55V6.79a4.85 4.85 0 01-1.07-.1z'
        },
        {
            href: '#', hoverColor: '#1877f2', label: 'Facebook',
            path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'
        },
        {
            href: '#', hoverColor: '#59e06c', label: 'Kik',
            path: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 17.5l-3-3.5 3-3.5H8l-3 3.5 3 3.5h2.5zm3-3.5l3 3.5h-2.5l-3-3.5 3-3.5H16l-3 3.5z'
        },
    ]

    return (
        <footer
            ref={ref}
            className="relative w-full pt-12 pb-6 px-6 md:px-16 overflow-hidden"
            style={{
                background: '#0a0f1e',
                borderTop: '1px solid rgba(183,230,32,0.15)',
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                opacity: visible ? 1 : 0,
                transition: 'all 0.8s ease'
            }}
        >
            {/* ── Canvas lluvia de $ ── */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: 0 }}
            />

            {/* ── Contenido sobre el canvas ── */}
            <div className="relative" style={{ zIndex: 1 }}>

                {/* Info grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">

                    {/* Contacto */}
                    <div className="flex flex-col items-center sm:items-start gap-2">
                        <h3 className="font-semibold text-sm uppercase tracking-widest mb-1" style={{ color: '#b7e620' }}>
                            Contacto
                        </h3>
                        <a
                            href="http://wa.me/593982136689"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-sm transition-colors duration-200 hover:text-white"
                            style={{ color: 'rgba(255,255,255,0.5)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: '#b7e620' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span>+593 982136689</span>
                        </a>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col items-center sm:items-start gap-2">
                        <h3 className="font-semibold text-sm uppercase tracking-widest mb-1" style={{ color: '#b7e620' }}>
                            Email
                        </h3>
                        <a
                            href="mailto:beracryptoexchange@gmail.com"
                            className="flex items-center gap-2 text-sm transition-colors duration-200 hover:text-white"
                            style={{ color: 'rgba(255,255,255,0.5)' }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: '#b7e620' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span>beracryptoexchange@gmail.com</span>
                        </a>
                    </div>

                    {/* Redes */}
                    <div className="flex flex-col items-center sm:items-start gap-2">
                        <h3 className="font-semibold text-sm uppercase tracking-widest mb-1" style={{ color: '#b7e620' }}>
                            Follow
                        </h3>
                        <div className="flex items-center gap-4 flex-wrap">
                            {socials.map((s, i) => (
                                <a
                                    key={i}
                                    href={s.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    title={s.label}
                                    className="transition-all duration-200 hover:scale-125 transform"
                                    style={{ color: 'rgba(255,255,255,0.35)' }}
                                    onMouseEnter={e => { e.currentTarget.style.color = s.hoverColor }}
                                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.35)' }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d={s.path} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divisor */}
                <div className="mb-8" style={{ borderTop: '1px solid rgba(183,230,32,0.12)' }} />

                {/* ── Patrocinadores slider ── */}
                <div className="mb-8">
                    <h3 className="text-center font-semibold text-xs uppercase tracking-widest mb-6" style={{ color: '#b7e620' }}>
                        Patrocinadores
                    </h3>

                    <div className="flex justify-center">
                        <div
                            style={{
                                width: '50%',
                                overflow: 'hidden',
                                maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
                                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
                            }}
                        >
                            <div
                                ref={trackRef}
                                style={{
                                    display: 'flex',
                                    gap: '2rem',
                                    width: 'max-content',
                                    animation: 'sponsorScroll 12s linear infinite',
                                }}
                            >
                                {[...sponsors, ...sponsors, ...sponsors, ...sponsors].map((s, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            width: '110px',
                                            height: '80px',
                                            flexShrink: 0,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            background: 'rgba(255,255,255,0.05)',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            borderRadius: '1rem',
                                        }}
                                    >
                                        <img
                                            src={s.src}
                                            alt={s.alt}
                                            style={{
                                                height: '55px',
                                                width: 'auto',
                                                maxWidth: '90px',
                                                objectFit: 'contain',
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divisor */}
                <div className="mb-6" style={{ borderTop: '1px solid rgba(183,230,32,0.12)' }} />

                {/* Copyright */}
                <p className="text-center text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
                    © {new Date().getFullYear()} Crypto Exchange. Todos los derechos reservados.
                </p>
            </div>

            <style>{`
                @keyframes sponsorScroll {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </footer>
    )
}