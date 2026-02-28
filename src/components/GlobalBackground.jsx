import React, { useEffect, useRef } from 'react'

export const GlobalBackground = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let animationId
        let particles = []

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = document.body.scrollHeight
        }

        class Particle {
            constructor() {
                this.reset()
            }
            reset() {
                this.x = Math.random() * canvas.width
                this.y = Math.random() * canvas.height
                this.size = Math.random() * 1.5 + 0.3
                this.speedX = (Math.random() - 0.5) * 0.4
                this.speedY = (Math.random() - 0.5) * 0.4
                this.opacity = Math.random() * 0.5 + 0.1
                this.color = Math.random() > 0.6 ? '#3b82f6' : Math.random() > 0.5 ? '#b7e620' : '#ffffff'
            }
            update() {
                this.x += this.speedX
                this.y += this.speedY
                if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                    this.reset()
                }
            }
            draw() {
                ctx.save()
                ctx.globalAlpha = this.opacity
                ctx.fillStyle = this.color
                ctx.shadowBlur = 6
                ctx.shadowColor = this.color
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
                ctx.restore()
            }
        }

        const init = () => {
            resize()
            particles = Array.from({ length: 160 }, () => new Particle())
        }

        const drawConnections = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x
                    const dy = particles[i].y - particles[j].y
                    const dist = Math.sqrt(dx * dx + dy * dy)
                    if (dist < 120) {
                        ctx.save()
                        ctx.globalAlpha = (1 - dist / 120) * 0.08
                        ctx.strokeStyle = '#3b82f6'
                        ctx.lineWidth = 0.5
                        ctx.beginPath()
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.stroke()
                        ctx.restore()
                    }
                }
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            particles.forEach(p => { p.update(); p.draw() })
            drawConnections()
            animationId = requestAnimationFrame(animate)
        }

        // Resize canvas when page height changes (content loads)
        const resizeObserver = new ResizeObserver(() => {
            resize()
            particles.forEach(p => p.reset())
        })
        resizeObserver.observe(document.body)

        window.addEventListener('resize', init)
        init()
        animate()

        return () => {
            cancelAnimationFrame(animationId)
            window.removeEventListener('resize', init)
            resizeObserver.disconnect()
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
        />
    )
}