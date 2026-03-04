import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll'
import { useTypewriter } from '../hooks/useTypewriter'

export const PropuestaValor = () => {
    const { ref, visible } = useAnimateOnScroll()
    const title = useTypewriter('Nuestra Propuesta de Valor', visible, 40)

    const proceso = [
        { num: '01', text: 'Validación privada del cliente (KYC discreto).' },
        { num: '02', text: 'Cotización personalizada según mercado y volumen.' },
        { num: '03', text: 'Confirmación y bloqueo de precio.' },
        { num: '04', text: 'Ejecución OTC segura.' },
        { num: '05', text: 'Liquidación inmediata y comprobante digital.' },
        { num: '06', text: 'Seguimiento post-operación.' },
    ]

    const ventajas = [
        { icon: '⚡', title: 'Liquidez inmediata', desc: 'Para montos medianos y altos sin demoras.' },
        { icon: '🔒', title: 'Operaciones privadas', desc: 'Estricta confidencialidad en cada transacción.' },
        { icon: '⏱️', title: 'Bloqueo de tasa', desc: 'El precio acordado se congela al instante.' },
        { icon: '👤', title: 'Atención personalizada', desc: 'Trato directo con un operador dedicado.' },
        { icon: '🌎', title: 'Soporte regional', desc: 'Acompañamiento en movimientos de alto impacto en LATAM.' },
    ]

    const influencers = [
        { emoji: '🔒', title: 'Privacidad total', desc: 'Tus operaciones jamás son expuestas públicamente.' },
        { emoji: '⚡', title: 'Velocidad', desc: 'Liquidamos en minutos, no en días.' },
        { emoji: '💬', title: 'Asesoría directa', desc: 'Canal exclusivo con tu operador asignado.' },
        { emoji: '📊', title: 'Grandes volúmenes', desc: 'Sin fricciones para montos significativos.' },
        { emoji: '🤝', title: 'Confianza probada', desc: 'Relación a largo plazo basada en resultados.' },
    ]

    const handleMouseMove = (e, card) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const cx = rect.width / 2
        const cy = rect.height / 2
        const rotX = ((y - cy) / cy) * -8
        const rotY = ((x - cx) / cx) * 8
        card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`
        const spotlight = card.querySelector('.card-spotlight')
        if (spotlight) {
            spotlight.style.opacity = '1'
            spotlight.style.background = `radial-gradient(300px circle at ${x}px ${y}px, rgba(183,230,32,0.18), transparent 70%)`
        }
    }

    const handleMouseLeave = (card) => {
        card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)'
        const spotlight = card.querySelector('.card-spotlight')
        if (spotlight) spotlight.style.opacity = '0'
    }

    const cards = [
        {
            id: 'proceso',
            label: 'Proceso Institucional',
            animClass: 'card-glass',
            labelColor: '#b7e620',
            content: (
                <div className="flex flex-col gap-3 mt-4">
                    {proceso.map((step, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <div className="flex flex-col items-center shrink-0 pt-0.5">
                                <div className="w-7 h-7 rounded-full flex items-center justify-center"
                                    style={{ background: 'rgba(183,230,32,0.15)', border: '1px solid rgba(183,230,32,0.35)' }}>
                                    <span className="text-xs font-bold" style={{ color: '#b7e620' }}>{step.num}</span>
                                </div>
                                {i < proceso.length - 1 && (
                                    <div className="w-px h-4 mt-1" style={{ background: 'rgba(183,230,32,0.2)' }} />
                                )}
                            </div>
                            <p className="text-sm leading-relaxed pt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>{step.text}</p>
                        </div>
                    ))}
                </div>
            )
        },
        {
            id: 'ventajas',
            label: 'Ventajas',
            animClass: 'card-dark',
            labelColor: '#b7e620',
            content: (
                <div className="flex flex-col gap-3 mt-4">
                    {ventajas.map((v, i) => (
                        <div key={i} className="flex items-start gap-3 rounded-xl p-3"
                            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                            <span className="text-xl">{v.icon}</span>
                            <div>
                                <p className="font-semibold text-sm text-white">{v.title}</p>
                                <p className="text-xs mt-0.5 leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>{v.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )
        },
        {
            id: 'influencers',
            label: 'Para Influencers',
            animClass: 'card-green',
            labelColor: 'rgba(10,15,30,0.5)',
            content: (
                <div className="flex flex-col gap-3 mt-4">
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(10,15,30,0.7)' }}>
                        Servicio diseñado para quienes mueven grandes volúmenes y necesitan máxima discreción.
                    </p>
                    {influencers.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 rounded-xl p-3"
                            style={{ background: 'rgba(10,15,30,0.08)', border: '1px solid rgba(10,15,30,0.12)' }}>
                            <span className="text-lg">{item.emoji}</span>
                            <div>
                                <p className="font-semibold text-sm" style={{ color: '#0a0f1e' }}>{item.title}</p>
                                <p className="text-xs mt-0.5 leading-relaxed" style={{ color: 'rgba(10,15,30,0.6)' }}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )
        },
    ]

    return (
        <section className="w-full py-20 px-4 sm:px-8 md:px-16" style={{ background: 'transparent' }}>
            <div ref={ref} className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12"
                    style={{
                        transform: visible ? 'translateY(0)' : 'translateY(30px)',
                        opacity: visible ? 1 : 0,
                        transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
                    }}>
                    {/* <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#b7e620' }}> */}
                        {/* Todo en un solo lugar */}
                    {/* </span> */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 text-white" style={{ minHeight: '2.5rem' }}>
                        {title}
                        {visible && title.length < 26 && (
                            <span className="animate-pulse" style={{ color: '#b7e620' }}>|</span>
                        )}
                    </h2>
                    <div className="w-12 h-1 rounded-full mx-auto mt-4" style={{ background: '#b7e620' }} />
                </div>

                {/* Dos arriba, uno abajo centrado */}
                <div className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {cards.slice(0, 2).map((card, i) => (
                            <div
                                key={card.id}
                                className={`rounded-3xl p-6 card-hover ${card.animClass}`}
                                style={{
                                    transform: visible ? 'translateY(0)' : 'translateY(50px)',
                                    opacity: visible ? 1 : 0,
                                    transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.15}s`,
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                                onMouseMove={e => handleMouseMove(e, e.currentTarget)}
                                onMouseLeave={e => handleMouseLeave(e.currentTarget)}
                            >
                                <div className="card-spotlight" />
                                <span className="text-xs font-bold uppercase tracking-widest relative"
                                    style={{ zIndex: 1, color: card.labelColor }}>
                                    {card.label}
                                </span>
                                <div style={{ position: 'relative', zIndex: 1 }}>{card.content}</div>
                            </div>
                        ))}
                    </div>

                    {/* Card inferior centrada */}
                    <div className="flex justify-center">
                        <div
                            className={`rounded-3xl p-6 card-hover ${cards[2].animClass}`}
                            style={{
                                width: '100%',
                                maxWidth: '600px',
                                transform: visible ? 'translateY(0)' : 'translateY(50px)',
                                opacity: visible ? 1 : 0,
                                transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                            onMouseMove={e => handleMouseMove(e, e.currentTarget)}
                            onMouseLeave={e => handleMouseLeave(e.currentTarget)}
                        >
                            <div className="card-spotlight" />
                            <span className="text-xs font-bold uppercase tracking-widest relative"
                                style={{ zIndex: 1, color: cards[2].labelColor }}>
                                {cards[2].label}
                            </span>
                            <div style={{ position: 'relative', zIndex: 1 }}>{cards[2].content}</div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .card-spotlight {
                    position: absolute;
                    inset: 0;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    pointer-events: none;
                    z-index: 0;
                    border-radius: inherit;
                }

                .card-hover {
                    transition: transform 0.15s ease, box-shadow 0.3s ease !important;
                    cursor: default;
                    will-change: transform;
                }

                /* Card glass */
                .card-glass {
                    background: rgba(255,255,255,0.07);
                    border: 1px solid rgba(255,255,255,0.12);
                    backdrop-filter: blur(20px);
                    animation: shimmerGlass 8s ease infinite;
                }
                .card-glass:hover {
                    border-color: rgba(183,230,32,0.4);
                    box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(183,230,32,0.2);
                }
                @keyframes shimmerGlass {
                    0%   { background-color: rgba(255,255,255,0.07); }
                    50%  { background-color: rgba(255,255,255,0.11); }
                    100% { background-color: rgba(255,255,255,0.07); }
                }

                /* Card dark */
                .card-dark {
                    background: #0a0f1e;
                    border: 1px solid rgba(255,255,255,0.1);
                    animation: pulseDark 8s ease infinite;
                }
                .card-dark:hover {
                    border-color: rgba(183,230,32,0.4);
                    box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(183,230,32,0.08);
                }
                @keyframes pulseDark {
                    0%   { box-shadow: 0 0 0px rgba(183,230,32,0);     border-color: rgba(255,255,255,0.10); }
                    50%  { box-shadow: 0 0 28px rgba(183,230,32,0.12); border-color: rgba(183,230,32,0.3);  }
                    100% { box-shadow: 0 0 0px rgba(183,230,32,0);     border-color: rgba(255,255,255,0.10); }
                }

                /* Card green */
                .card-green {
                    background: linear-gradient(135deg, #b7e620, #c8f030, #9fd010, #b7e620);
                    background-size: 400% 400%;
                    border: 1px solid rgba(183,230,32,0.6);
                    animation: flowGreen 6s ease infinite;
                }
                .card-green:hover {
                    box-shadow: 0 20px 60px rgba(183,230,32,0.3), 0 0 80px rgba(183,230,32,0.15);
                }
                .card-green .card-spotlight {
                    background: radial-gradient(300px circle, rgba(255,255,255,0.25), transparent 70%) !important;
                }
                @keyframes flowGreen {
                    0%   { background-position: 0% 50%;   }
                    50%  { background-position: 100% 50%; }
                    100% { background-position: 0% 50%;   }
                }

                /* Mobile — sin hover, más dinamismo en animaciones */
                @media (hover: none) {
                    .card-glass, .card-dark, .card-green {
                        animation-duration: 4s;
                    }
                    .card-dark {
                        animation: pulseDarkMobile 3s ease infinite;
                    }
                    @keyframes pulseDarkMobile {
                        0%   { box-shadow: 0 0 0px rgba(183,230,32,0);    }
                        50%  { box-shadow: 0 0 20px rgba(183,230,32,0.2); }
                        100% { box-shadow: 0 0 0px rgba(183,230,32,0);    }
                    }
                    .card-green {
                        animation: flowGreen 3s ease infinite;
                    }
                }
            `}</style>
        </section>
    )
}