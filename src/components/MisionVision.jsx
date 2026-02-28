import React, { useState } from 'react'

export const MisionVision = () => {
    const [activeStep, setActiveStep] = useState(null)

    const steps = [
        {
            number: '01',
            title: 'Verificación del cliente',
            desc: 'KYC básico y validación de identidad para garantizar operaciones seguras.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            number: '02',
            title: 'Cotización en tiempo real',
            desc: 'Precio actualizado según el mercado en el momento exacto de la operación.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            )
        },
        {
            number: '03',
            title: 'Confirmación y bloqueo de tasa',
            desc: 'Confirmamos la operación y bloqueamos la tasa para asegurar el valor acordado.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            )
        },
        {
            number: '04',
            title: 'Liquidación inmediata',
            desc: 'Procesamos el pago al instante y emitimos el comprobante de transacción.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
            )
        },
        {
            number: '05',
            title: 'Seguimiento post-operación',
            desc: 'Soporte personalizado y acompañamiento después de cada transacción.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
            )
        },
    ]

    return (
        <section className="w-full bg-white py-20 px-4 sm:px-8 md:px-16">
            <div className="max-w-6xl mx-auto flex flex-col gap-20">

                {/* ── Header ── */}
                <div className="text-center">
                    <span className="text-[#b7e620] text-xs font-semibold uppercase tracking-widest">
                        Nuestra Esencia
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                        Lo que nos define
                    </h2>
                    <div className="w-12 h-1 bg-[#b7e620] rounded-full mx-auto mt-4" />
                </div>

                {/* ── Misión y Visión ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Misión */}
                    <div className="group relative bg-gray-50 hover:bg-[#b7e620] rounded-3xl p-8 sm:p-10 flex flex-col gap-5 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                        {/* Decoración fondo */}
                        <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-blue-100 group-hover:bg-[#b7e620] transition-colors duration-300 opacity-40" />

                        <div className="relative z-10 flex flex-col gap-5">
                            <div className="w-12 h-12 rounded-2xl bg-blue-100 group-hover:bg-white/20 flex items-center justify-center transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#b7e620] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                                </svg>
                            </div>
                            <div>
                                <span className="text-[#b7e620] group-hover:text-white text-xs font-semibold uppercase tracking-widest transition-colors duration-300">
                                    Misión
                                </span>
                                <h3 className="text-gray-800 group-hover:text-white font-bold text-xl mt-1 transition-colors duration-300">
                                    Nuestro propósito
                                </h3>
                            </div>
                            <p className="text-gray-500 group-hover:text-white text-sm leading-relaxed transition-colors duration-300">
                                Proveer un servicio profesional de intercambio de criptoactivos con altos estándares
                                de seguridad, transparencia y eficiencia en toda Latinoamérica.
                            </p>
                        </div>
                    </div>

                    {/* Visión */}
                    <div className="group relative bg-gray-50 hover:bg-[#b7e620] rounded-3xl p-8 sm:p-10 flex flex-col gap-5 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
                        <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-blue-100 group-hover:bg-[#b7e620] transition-colors duration-300 opacity-40" />

                        <div className="relative z-10 flex flex-col gap-5">
                            <div className="w-12 h-12 rounded-2xl bg-blue-100 group-hover:bg-white/20 flex items-center justify-center transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#b7e620] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <div>
                                <span className="text-[#b7e620] group-hover:text-white text-xs font-semibold uppercase tracking-widest transition-colors duration-300">
                                    Visión
                                </span>
                                <h3 className="text-gray-800 group-hover:text-white font-bold text-xl mt-1 transition-colors duration-300">
                                    Hacia dónde vamos
                                </h3>
                            </div>
                            <p className="text-gray-500 group-hover:text-white text-sm leading-relaxed transition-colors duration-300">
                                Convertirnos en un referente regional en operaciones OTC de criptomonedas, reconocido
                                por nuestra credibilidad, confidencialidad y excelencia operativa.
                            </p>
                        </div>
                    </div>

                </div>

                {/* ── Procesos Operativos ── */}
                <div className="flex flex-col gap-8">
                    <div className="text-center">
                        <span className="text-[#b7e620] text-xs font-semibold uppercase tracking-widest">
                            Cómo trabajamos
                        </span>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mt-2">
                            Procesos Operativos
                        </h3>
                    </div>

                    {/* Steps */}
                    <div className="flex flex-col gap-3">
                        {steps.map((step, index) => (
                            <button
                                key={step.number}
                                onClick={() => setActiveStep(activeStep === index ? null : index)}
                                className="w-full text-left"
                            >
                                <div className={`
                                    flex items-center gap-5 p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer
                                    ${activeStep === index
                                        ? 'bg-blue-500 border-blue-500 shadow-lg shadow-blue-100'
                                        : 'bg-gray-50 border-gray-100 hover:border-blue-200 hover:bg-blue-50'
                                    }
                                `}>
                                    {/* Número */}
                                    <span className={`
                                        text-2xl font-black tabular-nums shrink-0 transition-colors duration-300
                                        ${activeStep === index ? 'text-white/30' : 'text-blue-100'}
                                    `}>
                                        {step.number}
                                    </span>

                                    {/* Icono */}
                                    <div className={`
                                        w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300
                                        ${activeStep === index ? 'bg-white/20 text-white' : 'bg-blue-100 text-[#b7e620]'}
                                    `}>
                                        {step.icon}
                                    </div>

                                    {/* Texto */}
                                    <div className="flex-1 min-w-0">
                                        <p className={`font-semibold text-sm sm:text-base transition-colors duration-300 ${activeStep === index ? 'text-white' : 'text-gray-800'}`}>
                                            {step.title}
                                        </p>
                                        <p className={`text-xs sm:text-sm mt-0.5 transition-colors duration-300 ${activeStep === index ? 'text-blue-100' : 'text-gray-400'}`}>
                                            {step.desc}
                                        </p>
                                    </div>

                                    {/* Chevron */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`w-4 h-4 shrink-0 transition-all duration-300 ${activeStep === index ? 'text-white rotate-180' : 'text-gray-300'}`}
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}