import React, { useState } from 'react'

export const PropuestaValor = () => {
    const [activeTab, setActiveTab] = useState(0)

    const tabs = ['Proceso Institucional', 'Ventajas', 'Para Influencers']

    const proceso = [
        { num: '01', text: 'Validación privada del cliente (KYC discreto).' },
        { num: '02', text: 'Cotización personalizada según mercado y volumen.' },
        { num: '03', text: 'Confirmación y bloqueo de precio.' },
        { num: '04', text: 'Ejecución OTC segura.' },
        { num: '05', text: 'Liquidación inmediata y comprobante digital.' },
        { num: '06', text: 'Seguimiento post-operación.' },
    ]

    const ventajas = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: 'Liquidez inmediata',
            desc: 'Para montos medianos y altos sin demoras.'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            ),
            title: 'Operaciones privadas',
            desc: 'Estricta confidencialidad en cada transacción.'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Bloqueo de tasa en tiempo real',
            desc: 'El precio acordado se congela al instante.'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ),
            title: 'Atención personalizada',
            desc: 'Trato directo con un operador dedicado a ti.'
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064" />
                </svg>
            ),
            title: 'Soporte estratégico regional',
            desc: 'Acompañamiento en movimientos de alto impacto en Latinoamérica.'
        },
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
        <section className="w-full bg-gray-50 py-20 px-4 sm:px-8 md:px-16">
            <div className="max-w-5xl mx-auto flex flex-col gap-10">

                {/* ── Header ── */}
                <div className="text-center">
                    <span className="text-[#b7e620] text-xs font-semibold uppercase tracking-widest">
                        Todo en un solo lugar
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                        Nuestra Propuesta de Valor
                    </h2>
                    <div className="w-12 h-1 bg-[#b7e620] rounded-full mx-auto mt-4" />
                </div>

                {/* ── Tabs ── */}
                <div className="flex items-center justify-center gap-2 flex-wrap">
                    {tabs.map((tab, i) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(i)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200
                                ${activeTab === i
                                    ? 'bg-[#b7e620] text-white shadow-md shadow-[#b7e620]/20'
                                    : 'bg-white text-gray-500 border border-gray-200 hover:border-[#b7e620] hover:text-[#b7e620]'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* ── Contenido tab 0: Proceso ── */}
                {activeTab === 0 && (
                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
                        style={{ animation: 'fadeIn .4s ease forwards' }}>
                        <div className="p-8 sm:p-10 flex flex-col gap-3">
                            {proceso.map((step, i) => (
                                <div key={i} className="flex items-start gap-4 group">
                                    {/* Línea conectora */}
                                    <div className="flex flex-col items-center shrink-0 pt-1">
                                        <div className="w-8 h-8 rounded-full bg-blue-50 border-2 border-blue-200 group-hover:bg-[#b7e620] group-hover:border-[#b7e620] flex items-center justify-center transition-all duration-200">
                                            <span className="text-xs font-bold text-blue-400 group-hover:text-white transition-colors duration-200">
                                                {step.num}
                                            </span>
                                        </div>
                                        {i < proceso.length - 1 && (
                                            <div className="w-px h-6 bg-blue-100 mt-1" />
                                        )}
                                    </div>
                                    <p className="text-gray-600 text-sm sm:text-base pt-1 group-hover:text-gray-800 transition-colors duration-200 pb-4">
                                        {step.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ── Contenido tab 1: Ventajas ── */}
                {activeTab === 1 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        style={{ animation: 'fadeIn .4s ease forwards' }}>
                        {ventajas.map((v, i) => (
                            <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 flex items-start gap-4 shadow-sm hover:shadow-md hover:border-[#b7e620] transition-all duration-200 group">
                                <div className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-[#b7e620] flex items-center justify-center shrink-0 text-blue-500 group-hover:text-white transition-all duration-200">
                                    {v.icon}
                                </div>
                                <div>
                                    <p className="text-gray-800 font-semibold text-sm">{v.title}</p>
                                    <p className="text-gray-400 text-xs mt-1 leading-relaxed">{v.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* ── Contenido tab 2: Influencers ── */}
                {activeTab === 2 && (
                    <div style={{ animation: 'fadeIn .4s ease forwards' }}>
                        {/* Banner */}
                        <div className="bg-[#b7e620] rounded-3xl p-8 sm:p-10 mb-6 flex flex-col gap-3 text-center shadow-lg shadow-[#b7e620]/20">
                            <span className="text-white text-xs uppercase tracking-widest font-semibold">Diseñado para ti</span>
                            <h3 className="text-white text-xl sm:text-2xl font-bold">
                                Soluciones exclusivas para Influencers
                            </h3>
                            <p className="text-white text-sm max-w-lg mx-auto leading-relaxed">
                                Sabemos que tu tiempo y reputación valen. Por eso ofrecemos un servicio diseñado
                                para quienes mueven grandes volúmenes y necesitan máxima discreción.
                            </p>
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {influencers.map((item, i) => (
                                <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col gap-2 shadow-sm hover:shadow-md hover:border-[#b7e620] transition-all duration-200">
                                    <span className="text-2xl">{item.emoji}</span>
                                    <p className="text-gray-800 font-semibold text-sm">{item.title}</p>
                                    <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    )
}