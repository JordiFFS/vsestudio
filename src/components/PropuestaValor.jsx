import React, { useState, useEffect, useRef } from 'react'
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll'
import { useTypewriter } from '../hooks/useTypewriter'

export const PropuestaValor = () => {
    const [activeTab, setActiveTab] = useState(0)
    const [paused, setPaused] = useState(false)
    const [progress, setProgress] = useState(0)
    const intervalRef = useRef(null)
    const progressRef = useRef(null)
    const { ref, visible } = useAnimateOnScroll()
    const title = useTypewriter('Nuestra Propuesta de Valor', visible, 40)

    const DURATION = 4000

    useEffect(() => {
        if (paused) return
        setProgress(0)
        const start = Date.now()

        progressRef.current = setInterval(() => {
            const elapsed = Date.now() - start
            setProgress(Math.min((elapsed / DURATION) * 100, 100))
        }, 30)

        intervalRef.current = setTimeout(() => {
            setActiveTab(prev => (prev + 1) % 3)
        }, DURATION)

        return () => {
            clearTimeout(intervalRef.current)
            clearInterval(progressRef.current)
        }
    }, [activeTab, paused])

    const handleTabClick = (i) => {
        setActiveTab(i)
        setPaused(true)
        setProgress(0)
    }

    const handleResume = () => {
        setPaused(false)
        setProgress(0)
    }

    const tabs = [
        { label: 'Proceso Institucional', bg: 'white' },
        { label: 'Ventajas', bg: '#0a0f1e' },
        { label: 'Para Influencers', bg: 'rgba(255,255,255,0.12)' },
    ]

    const textPrimary = activeTab === 0 ? '#111827' : 'white'
    const textSecondary = activeTab === 0 ? '#6b7280' : 'rgba(255,255,255,0.55)'
    const accentColor = '#b7e620'
    const borderColor = activeTab === 0 ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.1)'

    const proceso = [
        { num: '01', text: 'Validación privada del cliente (KYC discreto).' },
        { num: '02', text: 'Cotización personalizada según mercado y volumen.' },
        { num: '03', text: 'Confirmación y bloqueo de precio.' },
        { num: '04', text: 'Ejecución OTC segura.' },
        { num: '05', text: 'Liquidación inmediata y comprobante digital.' },
        { num: '06', text: 'Seguimiento post-operación.' },
    ]

    const ventajas = [
        { icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, title: 'Liquidez inmediata', desc: 'Para montos medianos y altos sin demoras.' },
        { icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>, title: 'Operaciones privadas', desc: 'Estricta confidencialidad en cada transacción.' },
        { icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Bloqueo de tasa en tiempo real', desc: 'El precio acordado se congela al instante.' },
        { icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>, title: 'Atención personalizada', desc: 'Trato directo con un operador dedicado a ti.' },
        { icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064" /></svg>, title: 'Soporte estratégico regional', desc: 'Acompañamiento en movimientos de alto impacto en Latinoamérica.' },
    ]

    const influencers = [
        { emoji: '🔒', title: 'Privacidad total', desc: 'Tus operaciones jamás son expuestas públicamente.' },
        { emoji: '⚡', title: 'Velocidad de ejecución', desc: 'Liquidamos en minutos, no en días.' },
        { emoji: '💬', title: 'Asesoría directa', desc: 'Canal exclusivo con tu operador asignado.' },
        { emoji: '📊', title: 'Grandes volúmenes', desc: 'Capacidad para manejar montos significativos sin fricciones.' },
        { emoji: '🌎', title: 'Alcance regional', desc: 'Operamos en toda Latinoamérica con liquidez garantizada.' },
        { emoji: '🤝', title: 'Confianza probada', desc: 'Relación a largo plazo basada en resultados y discreción.' },
    ]

    return (
        <section className="w-full py-20 px-4 sm:px-8 md:px-16" style={{ background: 'transparent' }}>
            <div ref={ref} className="max-w-5xl mx-auto">
                <div
                    className="rounded-3xl overflow-hidden"
                    style={{
                        background: tabs[activeTab].bg,
                        backdropFilter: 'blur(20px)',
                        boxShadow: activeTab === 0
                            ? '0 8px 48px rgba(0,0,0,0.2)'
                            : activeTab === 1
                                ? '0 8px 48px rgba(0,0,0,0.5)'
                                : '0 8px 48px rgba(0,0,0,0.3)',
                        transform: visible ? 'translateY(0)' : 'translateY(40px)',
                        opacity: visible ? 1 : 0,
                        transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1), background 0.7s ease, box-shadow 0.7s ease',
                    }}
                >
                    {/* ── Header ── */}
                    <div className="text-center px-8 pt-12 pb-8"
                        style={{ borderBottom: `1px solid ${borderColor}` }}>
                        <span className="text-xs font-semibold uppercase tracking-widest"
                            style={{ color: accentColor }}>
                            Todo en un solo lugar
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2"
                            style={{
                                color: textPrimary,
                                minHeight: '2.5rem',
                                transition: 'color 0.5s ease'
                            }}>
                            {title}
                            {visible && title.length < 26 && (
                                <span className="animate-pulse" style={{ color: accentColor }}>|</span>
                            )}
                        </h2>
                        <div className="w-12 h-1 rounded-full mx-auto mt-4"
                            style={{ background: accentColor }} />
                    </div>

                    {/* ── Tabs ── */}
                    <div className="px-8 py-6"
                        style={{ borderBottom: `1px solid ${borderColor}` }}>
                        <div className="flex flex-col sm:flex-row items-stretch gap-3">
                            {tabs.map((tab, i) => (
                                <button
                                    key={tab.label}
                                    onClick={() => handleTabClick(i)}
                                    className="relative flex-1 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 overflow-hidden text-center"
                                    style={activeTab === i
                                        ? {
                                            background: activeTab === 0 ? '#b7e620' : 'rgba(183,230,32,0.15)',
                                            color: activeTab === 0 ? '#0a0f1e' : '#b7e620',
                                            border: '1px solid rgba(183,230,32,0.5)',
                                            boxShadow: '0 4px 16px rgba(183,230,32,0.2)'
                                        }
                                        : {
                                            background: 'transparent',
                                            color: textSecondary,
                                            border: `1px solid ${borderColor}`
                                        }
                                    }
                                >
                                    {tab.label}
                                    {activeTab === i && !paused && (
                                        <div
                                            className="absolute bottom-0 left-0 h-0.5 rounded-full"
                                            style={{
                                                width: `${progress}%`,
                                                background: '#b7e620',
                                                transition: 'width 0.03s linear'
                                            }}
                                        />
                                    )}
                                </button>
                            ))}

                            {paused && (
                                <button
                                    onClick={handleResume}
                                    className="px-4 py-3 rounded-2xl text-xs font-semibold transition-all duration-200"
                                    style={{
                                        color: accentColor,
                                        border: `1px solid ${borderColor}`,
                                        background: 'transparent'
                                    }}
                                >
                                    ▶ Auto
                                </button>
                            )}
                        </div>
                    </div>

                    {/* ── Contenido ── */}
                    <div className="p-8 sm:p-10">

                        {/* Tab 0: Proceso — blanco */}
                        {activeTab === 0 && (
                            <div style={{ animation: 'fadeIn .5s ease forwards' }}>
                                <div className="flex flex-col gap-2">
                                    {proceso.map((step, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <div className="flex flex-col items-center shrink-0 pt-1">
                                                <div
                                                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 cursor-default"
                                                    style={{ background: 'rgba(183,230,32,0.12)', border: '1px solid rgba(183,230,32,0.3)' }}
                                                    onMouseEnter={e => e.currentTarget.style.background = '#b7e620'}
                                                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(183,230,32,0.12)'}
                                                >
                                                    <span className="text-xs font-bold" style={{ color: '#7aad00' }}>{step.num}</span>
                                                </div>
                                                {i < proceso.length - 1 && (
                                                    <div className="w-px h-6 mt-1" style={{ background: 'rgba(183,230,32,0.2)' }} />
                                                )}
                                            </div>
                                            <p className="text-sm sm:text-base pt-1 pb-3 text-gray-600">{step.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Tab 1: Ventajas — negro */}
                        {activeTab === 1 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                                style={{ animation: 'fadeIn .5s ease forwards' }}>
                                {ventajas.map((v, i) => (
                                    <div
                                        key={i}
                                        className="rounded-2xl p-5 flex items-start gap-4 transition-all duration-200 cursor-default"
                                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                                        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(183,230,32,0.1)'; e.currentTarget.style.border = '1px solid rgba(183,230,32,0.3)' }}
                                        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.border = '1px solid rgba(255,255,255,0.1)' }}
                                    >
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                                            style={{ background: 'rgba(183,230,32,0.1)', color: '#b7e620' }}>
                                            {v.icon}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-sm text-white">{v.title}</p>
                                            <p className="text-xs mt-1 leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{v.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Tab 2: Influencers — glass */}
                        {activeTab === 2 && (
                            <div style={{ animation: 'fadeIn .5s ease forwards' }}>
                                <div
                                    className="rounded-2xl p-8 mb-6 text-center"
                                    style={{ background: 'rgba(183,230,32,0.08)', border: '1px solid rgba(183,230,32,0.2)' }}
                                >
                                    <span className="text-xs uppercase tracking-widest font-semibold"
                                        style={{ color: '#b7e620' }}>
                                        Diseñado para ti
                                    </span>
                                    <h3 className="text-xl sm:text-2xl font-bold mt-2 text-white">
                                        Soluciones exclusivas para Influencers
                                    </h3>
                                    <p className="text-sm max-w-lg mx-auto leading-relaxed mt-3"
                                        style={{ color: 'rgba(255,255,255,0.5)' }}>
                                        Sabemos que tu tiempo y reputación valen. Por eso ofrecemos un servicio diseñado
                                        para quienes mueven grandes volúmenes y necesitan máxima discreción.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    {influencers.map((item, i) => (
                                        <div
                                            key={i}
                                            className="rounded-2xl p-5 flex flex-col gap-2 transition-all duration-200 cursor-default"
                                            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                                            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(183,230,32,0.1)'; e.currentTarget.style.border = '1px solid rgba(183,230,32,0.3)' }}
                                            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.border = '1px solid rgba(255,255,255,0.1)' }}
                                        >
                                            <span className="text-2xl">{item.emoji}</span>
                                            <p className="font-semibold text-sm text-white">{item.title}</p>
                                            <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(12px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    )
}