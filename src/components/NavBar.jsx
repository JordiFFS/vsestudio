import React from 'react'

export const NavBar = () => {
    return (
        <nav className="w-full bg-white shadow-sm px-8 py-4 flex justify-end items-center">
            <button className="flex items-center gap-2 text-blue-500 font-medium transition-all duration-200 hover:text-blue-700 hover:scale-105 group cursor-pointer">
                {/* Icono persona */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 transition-transform duration-200 group-hover:scale-110"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.121 17.804A8.966 8.966 0 0112 15c2.21 0 4.233.8 5.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
                <span className="text-sm tracking-wide">Iniciar sesión</span>
            </button>
        </nav>
    )
}