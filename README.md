# 🟢 VS Estudio — Bera Crypto Exchange

Landing page profesional para **Bera Crypto Exchange**, una plataforma OTC de intercambio de criptomonedas orientada al mercado latinoamericano. Construida con React + Vite, con animaciones personalizadas, diseño dark y paleta verde neón.

---

## 🚀 Tech Stack

- **React 18** — UI por componentes
- **Vite** — bundler ultrarrápido con HMR
- **Tailwind CSS** — utilidades de estilos
- **Canvas API** — efectos visuales animados (lluvia de `$`)
- **CSS Animations** — keyframes personalizados para sliders y transiciones

---

## 📁 Estructura del Proyecto

```
jordiffs-vsestudio/
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
├── public/
│   ├── logo.avif           # Logo principal
│   ├── somos.avif          # Imagen sección Quiénes Somos
│   ├── kick.jpg            # Ícono red social Kick
│   ├── binance.jpeg        # Logo patrocinador
│   ├── bingx.jpeg          # Logo patrocinador
│   ├── bybit.jpeg          # Logo patrocinador
│   ├── okx.jpeg            # Logo patrocinador
│   └── trust.jpeg          # Logo patrocinador
└── src/
    ├── main.jsx            # Entry point
    ├── App.jsx             # Componente raíz
    ├── index.css           # Estilos globales y keyframes
    ├── views/
    │   └── Home.jsx        # Vista principal (ensambla todos los componentes)
    ├── components/
    │   ├── index.js        # Barrel exports
    │   ├── NavBar.jsx      # Barra de navegación
    │   ├── GlobalBackground.jsx  # Fondo animado global
    │   ├── QuienesSomos.jsx      # Sección identidad de la empresa
    │   ├── MisionVision.jsx      # Sección misión y visión
    │   ├── PropuestaValor.jsx    # 3 cards: Proceso, Ventajas, Influencers
    │   └── Footer.jsx            # Footer con slider, redes y lluvia de $
    └── hooks/
        ├── useAnimateOnScroll.js # Hook para animaciones al hacer scroll
        └── useTypewriter.js      # Hook efecto máquina de escribir
```

---

## 🧩 Componentes

### `NavBar`
Barra de navegación fija con logo y links de sección.

### `GlobalBackground`
Fondo animado que aplica a toda la página con efecto visual oscuro consistente.

### `QuienesSomos`
Sección de presentación de la empresa con imagen y texto descriptivo.

### `MisionVision`
Cards con la misión y visión de Bera Crypto Exchange.

### `PropuestaValor`
Tres cards siempre visibles con efecto hover 3D (tilt + spotlight):
- **Proceso Institucional** — card glass con shimmer animado
- **Ventajas** — card oscura con pulso de borde verde
- **Para Influencers** — card verde con gradiente en movimiento

### `Footer`
Footer completo con:
- Contacto (WhatsApp + email)
- Redes sociales (WhatsApp, Instagram, TikTok, Facebook, Kick)
- Slider infinito de patrocinadores
- Efecto lluvia de `$` en canvas

---

## 🪝 Hooks Personalizados

### `useAnimateOnScroll`
Detecta cuando un elemento entra al viewport usando `IntersectionObserver` y expone `{ ref, visible }` para disparar animaciones CSS de entrada.

### `useTypewriter`
Recibe un texto y devuelve una versión que se va construyendo carácter a carácter, simulando el efecto de máquina de escribir. Se activa cuando `visible` es `true`.

---

## ⚙️ Instalación y Uso

```bash
# Clonar el repositorio
git clone https://github.com/jordiffs/vsestudio.git
cd vsestudio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

---

## 🎨 Paleta de Colores

| Nombre | Valor | Uso |
|--------|-------|-----|
| Verde neón | `#b7e620` | Acento principal, bordes, textos destacados |
| Fondo oscuro | `#0a0f1e` | Background global y cards dark |
| Blanco suave | `rgba(255,255,255,0.5)` | Textos secundarios |
| Glass | `rgba(255,255,255,0.07)` | Cards con efecto cristal |

---

## 📱 Responsive

El proyecto está optimizado para todos los tamaños de pantalla:

- **Mobile** — layout en columna, animaciones aceleradas para dar dinamismo sin hover
- **Tablet** — grids de 2 columnas
- **Desktop** — layout completo con efectos hover, tilt 3D y spotlight

---

## 📬 Contacto

**Bera Crypto Exchange**
- WhatsApp: [+593 982136689](http://wa.me/593982136689)
- Email: beracryptoexchange@gmail.com
- Instagram: [@beracryptoexchange](https://www.instagram.com/beracryptoexchange)