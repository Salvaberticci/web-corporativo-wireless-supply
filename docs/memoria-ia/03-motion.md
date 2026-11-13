# Sistema de movimiento

## Principios

- El movimiento explica jerarquía, no decora por decorar.
- Animar solo `transform` y `opacity`; evitar `width`, `height`, `top` y `left`.
- Nada de animaciones infinitas pesadas en móvil.
- Las animaciones están activas por defecto; no se consulta `prefers-reduced-motion` (ADR-017).
- El contenido debe ser visible si JavaScript falla.

## Tokens

| Token | Valor |
|---|---|
| Duración rápida | 150 ms |
| Duración media | 300 ms |
| Duración lenta | 600 ms |
| Duración hero | 900–1200 ms |
| Easing estándar | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Easing premium | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Stagger | 60–100 ms |

## Catálogo

| Efecto | Dónde | Implementación | Prioridad |
|---|---|---|---|
| Red de fibra animada | Hero home y 404 | Canvas 2D + pointer parallax | Alta |
| Intro coreografiada | Hero de las 7 páginas | GSAP timeline (`opacity` + `y`), stagger 80 ms | Alta |
| Parallax de imágenes | Home, about y servicios (≥768 px) | GSAP + ScrollTrigger, `scrub: 0.6` | Media |
| Revelado de imágenes | Home, about y servicios | IntersectionObserver en el padre + `clip-path` y `scale` | Alta |
| Texto “decode” | Etiquetas de sección y hero | `requestAnimationFrame` con glifos técnicos | Media |
| Punto de progreso | Global | JS scroll + `translate3d()` | Baja |
| Reveal on scroll | Secciones | IntersectionObserver + CSS (`opacity` + `translate`) | Alta |
| Stagger de cards | Servicios, planes, proceso | `transition-delay` progresivo (máx. 320 ms) | Media |
| Contadores | Home y about | `requestAnimationFrame` (1.4 s) + destello final | Media |
| Tilt 3D + spotlight | Cards | GSAP + pointer, ±6° | Alta |
| Botones magnéticos | CTAs | GSAP + pointer, fuerza 0.18 | Media |
| Cursor glow + punto | Desktop con pointer fino | JS pointer + radial gradient + `scale` | Opcional |
| Progreso de scroll | Global | JS scroll + `transform: scaleX()` | Baja |
| Marquee de tecnologías | Home | CSS keyframes 34 s; pausa al hover | Media |
| Transición de página | Navegación interna | Fade de `opacity` 220 ms; sin View Transitions API | Media |
| Barras de señal | 404 | CSS keyframes 1.8 s | Baja |
| Haces de fibra | Hero home | CSS gradients + keyframes `fiber-pulse` | Media |
| Flotación y glow del visual | Hero home | CSS `float-slow` + `cyber-glow` | Baja |
| Pulso del botón de envío | Formularios | CSS keyframes `whatsapp-glow` | Baja |
| Shimmer del degradado | Home y 404 | `background-position` 9 s | Media |
| Scanline del hero | Home | CSS repeating gradient + banda móvil 6.5 s | Media |
| Borde cónico animado | Plan destacado y CTA | `@property` + `conic-gradient` 8 s | Media |
| Brillo de botón secundario | CTAs secundarios | Barrido con `transform` al hover | Baja |
| Glitch RGB | 404 | `drop-shadow` cian/magenta 5.5 s | Baja |
| Entrada al filtrar planes | Planes | Keyframe CSS + delay de 35 ms por card | Baja |

## Implementación actual

- `effects.js` añade `has-effects` a `<html>`; si el script falla, el contenido permanece visible.
- Los reveals se activan una sola vez con `IntersectionObserver` y usan la propiedad `translate` para no pisar el `transform` de las cards.
- La intro del hero y el parallax usan GSAP/ScrollTrigger; el resto de efectos ambientales son CSS o `requestAnimationFrame` para no añadir dependencias.
- El revelado de imágenes observa el contenedor padre: el `clip-path` del propio elemento hace que `IntersectionObserver` lo considere no visible. Incluye un fallback de 3 s para no ocultar contenido.
- El texto “decode” se ejecuta una sola vez por etiqueta al entrar en viewport y restaura el texto final al terminar.
- El canvas usa entre 18 y 46 nodos, DPR máximo 2, y se pausa al salir del viewport o con la pestaña oculta.
- El tilt y los botones magnéticos solo se activan con `pointer: fine`.
- El marquee se pausa al hover.
- Los contadores emiten un destello al llegar al valor final.
- El header cambia de estado (`is-scrolled`) a partir de 20 px de scroll.
- En móvil (<768 px) se desactivan el barrido de métricas, el borde cónico y la scanline para aligerar el pintado; el resto de efectos se mantiene.
- Todas las animaciones están activas siempre; no hay botón ni opción de reducirlas (decisión del cliente, ADR-017).

## Reglas de rendimiento

- El canvas del hero se pausa con `document.hidden` y al salir del viewport.
- Limitar el canvas a ~46 nodos y DPR 2; se pausa al salir del viewport o con la pestaña oculta.
- No usar `backdrop-filter` en listas largas; solo en cards, header y menú móvil.
- Evitar `will-change` permanente; aplicarlo solo durante la animación.
- Las animaciones de scroll se activan una sola vez (`once: true`).
- Animar `transform`, `opacity`, `clip-path` o propiedades compositadas; evitar `left`, `top`, `width` y `height`.
- Presupuesto JS objetivo: ≤120 KB gzip para todo el sitio (pendiente de medir en producción).

## Accesibilidad

- Las animaciones están siempre activas, incluso si el sistema tiene `prefers-reduced-motion: reduce`; es una decisión explícita del cliente (ADR-017) y no hay botón para reducirlas.
- La renuncia a respetar la preferencia del sistema queda documentada; el resto de requisitos de accesibilidad (foco, contraste, teclado, `aria-live`) se mantiene.
- Nunca mover el foco ni bloquear la lectura por una animación.
- Los estados de carga y éxito deben anunciarse con `aria-live`.
- El texto “decode” conserva el texto final accesible y no se usa en contenido crítico.
