import { useEffect, useState } from 'react'

export const useTypewriter = (text, visible, speed = 40) => {
    const [displayed, setDisplayed] = useState('')

    useEffect(() => {
        if (!visible) return
        setDisplayed('')
        let i = 0
        const interval = setInterval(() => {
            setDisplayed(text.slice(0, i + 1))
            i++
            if (i >= text.length) clearInterval(interval)
        }, speed)
        return () => clearInterval(interval)
    }, [visible, text, speed])

    return displayed
}