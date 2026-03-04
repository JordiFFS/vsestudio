import React, { useState, useEffect } from 'react'
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll'
import { useTypewriter } from '../hooks/useTypewriter'

export const MisionVision = () => {
    const [activeStep, setActiveStep] = useState(0)
    const { ref, visible } = useAnimateOnScroll()
    const title = useTypewriter('Lo que nos define', visible, 45)

    // Secuencia automática que recorre los steps
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep(prev => (prev + 1) % 5)
        }, 1200)
        return () => clearInterval(interval)
    }, [])

    const steps = [
        { number: '01', title: 'Verificación del cliente', desc: 'KYC básico y validación de identidad para garantizar operaciones seguras.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
        { number: '02', title: 'Cotización en tiempo real', desc: 'Precio actualizado según el mercado en el momento exacto de la operación.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> },
        { number: '03', title: 'Confirmación y bloqueo de tasa', desc: 'Confirmamos la operación y bloqueamos la tasa para asegurar el valor acordado.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg> },
        { number: '04', title: 'Liquidación inmediata', desc: 'Procesamos el pago al instante y emitimos el comprobante de transacción.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg> },
        { number: '05', title: 'Seguimiento post-operación', desc: 'Soporte personalizado y acompañamiento después de cada transacción.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg> },
    ]

    return (
        <section className="w-full py-20 px-4 sm:px-8 md:px-16" style={{ background: 'transparent' }}>
            <div ref={ref} className="max-w-6xl mx-auto flex flex-col gap-10">

                <div
                    className="rounded-3xl overflow-hidden"
                    style={{
                        background: 'rgba(255,255,255,0.92)',
                        backdropFilter: 'blur(12px)',
                        boxShadow: '0 8px 48px rgba(0,0,0,0.25)',
                        transform: visible ? 'translateY(0)' : 'translateY(40px)',
                        opacity: visible ? 1 : 0,
                        transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)'
                    }}
                >
                    {/* ── Header ── */}
                    <div className="text-center px-8 pt-12 pb-8"
                        style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                        {/* <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#b7e620' }}>
                            Nuestra Esencia
                        </span> */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2"
                            style={{ minHeight: '2.5rem' }}>
                            {title}
                            {visible && title.length < 18 && (
                                <span className="animate-pulse" style={{ color: '#b7e620' }}>|</span>
                            )}
                        </h2>
                        <div className="w-12 h-1 rounded-full mx-auto mt-4" style={{ background: '#b7e620' }} />
                    </div>

                    {/* ── Misión y Visión ── */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0"
                        style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                        {[
                            {
                                label: 'Misión',
                                subtitle: 'Nuestro propósito',
                                text: 'Proveer un servicio profesional de intercambio de criptoactivos con altos estándares de seguridad, transparencia y eficiencia en toda Latinoamérica.',
                                icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" /></svg>
                            },
                            {
                                label: 'Visión',
                                subtitle: 'Hacia dónde vamos',
                                text: 'Convertirnos en un referente regional en operaciones OTC de criptomonedas, reconocido por nuestra credibilidad, confidencialidad y excelencia operativa.',
                                icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            }
                        ].map((card, i) => (
                            <div
                                key={card.label}
                                className="group flex flex-col gap-4 p-8 sm:p-10 cursor-default transition-all duration-300"
                                style={{ borderRight: i === 0 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}
                                onMouseEnter={e => e.currentTarget.style.background = 'rgba(183,230,32,0.04)'}
                                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                            >
                                {/* Icono */}
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                                    style={{ background: 'rgba(183,230,32,0.1)', color: '#b7e620' }}>
                                    {card.icon}
                                </div>

                                {/* Título grande */}
                                <h3 className="font-black text-gray-900"
                                    style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', lineHeight: 1.1 }}>
                                    {card.label}
                                </h3>

                                {/* Subtítulo pequeño */}
                                <p className="text-xs font-semibold uppercase tracking-widest"
                                    style={{ color: '#b7e620' }}>
                                    {card.subtitle}
                                </p>

                                <p className="text-sm leading-relaxed text-gray-500">{card.text}</p>

                                <div className="w-0 h-0.5 rounded-full transition-all duration-500 group-hover:w-14"
                                    style={{ background: '#b7e620' }} />
                            </div>
                        ))}
                    </div>

                    {/* ── Procesos: secuencia animada ── */}
                    <div className="p-8 sm:p-10 flex flex-col gap-6">
                        <div className="flex flex-col gap-3">
                            {steps.map((step, index) => {
                                const isActive = activeStep === index
                                return (
                                    <div
                                        key={step.number}
                                        className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl transition-all duration-500"
                                        style={{
                                            background: isActive ? 'rgba(183,230,32,0.1)' : 'rgba(0,0,0,0.02)',
                                            border: isActive ? '1px solid rgba(183,230,32,0.5)' : '1px solid rgba(0,0,0,0.05)',
                                            transform: isActive ? 'translateX(6px)' : 'translateX(0)',
                                            boxShadow: isActive ? '0 4px 20px rgba(183,230,32,0.1)' : 'none',
                                        }}
                                    >
                                        {/* Icono */}
                                        <div
                                            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500"
                                            style={{
                                                background: isActive ? '#b7e620' : 'rgba(0,0,0,0.05)',
                                                color: isActive ? '#0a0f1e' : '#9ca3af',
                                                transform: isActive ? 'scale(1.1)' : 'scale(1)',
                                            }}
                                        >
                                            {step.icon}
                                        </div>

                                        {/* Texto */}
                                        <div className="flex-1 min-w-0">
                                            <p className="font-semibold text-sm sm:text-base transition-colors duration-500"
                                                style={{ color: isActive ? '#7aad00' : '#1f2937' }}>
                                                {step.title}
                                            </p>
                                            <p className="text-xs sm:text-sm mt-0.5 transition-colors duration-500"
                                                style={{ color: isActive ? '#9dc930' : '#9ca3af' }}>
                                                {step.desc}
                                            </p>
                                        </div>

                                        {/* Dot indicador */}
                                        <div
                                            className="w-2 h-2 rounded-full shrink-0 transition-all duration-500"
                                            style={{
                                                background: isActive ? '#b7e620' : 'rgba(0,0,0,0.1)',
                                                transform: isActive ? 'scale(1.4)' : 'scale(1)',
                                            }}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}