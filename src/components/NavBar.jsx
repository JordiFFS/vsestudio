import React from 'react'

export const NavBar = () => {
    return (
        <nav className="w-full px-8 py-4 flex justify-between items-center"
            style={{ background: 'rgba(10,15,30,0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>

            {/* Logo / marca */}
            <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 animate-pulse" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#b7e620' }}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="text-white text-sm font-bold tracking-widest uppercase">Crypto Exchange</span>
            </div>

            {/* Iniciar sesión */}
            <button className="flex items-center gap-2 font-medium transition-all duration-200 hover:scale-105 group cursor-pointer"
                style={{ color: '#b7e620' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A8.966 8.966 0 0112 15c2.21 0 4.233.8 5.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm tracking-wide">Iniciar sesión</span>
            </button>
        </nav>
    )
}