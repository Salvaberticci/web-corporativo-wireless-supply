# Changelog

Todas las versiones relevantes de este proyecto se documentan aquí. El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y el versionado semántico.

## [2.1.1] — 2026-11-12

### Corregido

- El 404 servido en rutas anidadas resolvía sus assets contra la ruta inexistente. El HTML fuente calcula una base dinámica para XAMPP/subdirectorios y el build de Vercel inyecta una base estática `/` para evitar preloads incorrectos.

### QA

- 404 probado en `/foo/bar` y `/ruta-inexistente`: estado 404, CSS/JS/logo cargados y sin errores de recursos.
- `npm run build` y `npm run build:vercel` sin errores.

## [2.1.0] — 2026-11-12

### Añadido

- Capa de impacto visual v2.1 en las 7 páginas: intro coreografiada del hero con GSAP, parallax de imágenes desde 768 px, revelado cinematográfico con `clip-path` + `scale`, texto “decode” en etiquetas y punto de progreso de scroll.
- Scanline y barrido del visual del hero, shimmer del degradado, borde cónico animado en el plan destacado y el CTA, brillo de barrido en botones secundarios, destello del contador y glitch RGB en el 404.
- Cursor de punto con expansión sobre elementos interactivos en desktop.
- Entrada escalonada de las tarjetas al cambiar los filtros de planes.
- Hooks declarativos `data-hero`, `data-hero-item`, `data-scramble`, `data-image-reveal` y `data-parallax` en las 7 páginas.

### Cambiado

- El revelado de imágenes observa el contenedor padre para evitar que el `clip-path` del propio elemento anule el `IntersectionObserver`.
- El canvas del hero se dibuja una sola vez con movimiento reducido y no vuelve a animarse al hacer scroll.
- El brillo de los botones secundarios usa `transform` en lugar de `left`.
- Animaciones ambientales aligeradas por debajo de 768 px: sin barrido de métricas, borde cónico ni scanline.

### QA

- 7 páginas × 320, 390, 768, 1024, 1280 y 1920 px sin overflow horizontal.
- Sin errores de consola ni requests fallidos.
- Imágenes con revelado activado, menú móvil, filtros de planes, prefill y 404 verificados.
- `prefers-reduced-motion`: sin scanline, cursor, parallax, glitch, shimmer, progreso ni reveals ocultos; canvas estático.
- `node --check` en los 5 scripts y `npm run build` sin errores.

## [2.0.1] — 2026-11-12

### Cambiado

- Logo del header sin la píldora blanca: se eliminaron fondo, borde y sombra del contenedor.
- Logo del header ampliado a 56 px en móvil y 64 px en desktop, con un `drop-shadow` cian sutil para destacar sobre el fondo oscuro.
- El logo del footer conserva su tratamiento original.

### Despliegue

- Repositorio remoto en GitHub: `https://github.com/Salvaberticci/web-corporativo-wireless-supply`.
- Producción en Vercel: `https://web-corporativo-wireless-supply.vercel.app`.
- Script `build:vercel` que compila Tailwind y genera `public/` solo con HTML y assets publicables.
- `vercel.json` con `framework: null` y `outputDirectory: public`.
- `.vercelignore` para excluir `_source/`, `docs/`, `node_modules/` y archivos de desarrollo.
- 404 personalizado verificado en producción con estado HTTP 404.

### QA

- Header verificado a 390, 1024, 1280 y 1920 px: sin overflow, sin solapamiento y con altura de 85 px en móvil y 93 px en desktop.
- `npm run build` sin errores.

## [2.0.0] — 2026-11-12

### Añadido

- Sistema de diseño cyber-premium: fondo oscuro, acentos cian, superficies de cristal, rejilla y ruido sutil.
- Tailwind CLI compilado a `assets/css/tailwind.css`; sin CDN en producción.
- Capa visual v2 en `assets/css/estilos.css` con remapeo de los tokens heredados `light-*`.
- `assets/js/effects.js`: canvas de red, reveals, stagger, contadores, tilt 3D, botones magnéticos, cursor glow, progreso de scroll, header con estado y transiciones de página.
- Home rediseñada: hero con badge y titular en gradiente, métricas, marquee tecnológico, proceso de contratación y CTA final con cotizador.
- Rediseño de `sobre-nosotros.html`, `servicios.html`, `planes.html`, `contacto.html` y `legal.html`.
- `404.html` con concepto “señal perdida”, diagnóstico de ruta, canvas y barras de señal.
- Memoria IA completa en `docs/memoria-ia/`, `AGENTS.md` y este changelog.
- Repositorio Git con baseline `v1.0.0` en `main` y rama de trabajo `feature/redesign-v2`.

### Cambiado

- Header responsive: menú móvil por debajo de 1024 px, nav desktop desde 1024 px y CTA “Factibilidad” desde 1280 px.
- Navegación móvil con focus trap, bloqueo de scroll, cierre con Escape y clic fuera.
- Formularios con `autocomplete`, `inputmode`, estados accesibles `role="status"`/`aria-live` y prefill por `?plan=`/`?servicio=`.
- `planes.html`: filtros con `aria-pressed`, tabs de 44 px y tabla con scroll interno, primera columna sticky y aviso móvil.
- Escala tipográfica móvil ajustada para titulares largos en pantallas de 320 px.

### Corregido

- Overflow horizontal del header a 768 px y solapamiento de la nav sobre el logo a 1024 px.
- Desborde de “Telecomunicaciones” en los H1 de `sobre-nosotros.html` y `servicios.html` a 320 px.
- Touch targets por debajo de 44 px: toggle del menú, WhatsApp del header y tabs de planes.
- El contador “24/7” del hero ya no anima desde cero.
- El botón flotante de WhatsApp tapaba la tarjeta de diagnóstico del 404 en móvil.

### QA

- 7 páginas con respuesta 200; sin errores de consola, requests fallidos ni enlaces internos rotos.
- Sin overflow horizontal en 320, 360, 390, 768, 1024, 1280 y 1920 px.
- Header verificado a 768, 1024, 1100, 1280 y 1920 px.
- Menú móvil probado a 390 y 768 px: apertura, foco, focus trap, Escape, scroll lock y cierre al pasar a 1024 px.
- Filtros, prefill, payloads de WhatsApp, 404 y `prefers-reduced-motion` verificados.
- `npm run build` y `node --check` en los 5 scripts sin errores.

## [1.0.0] — 2026-11-12

### Añadido

- Reestructuración del export de Stitch a 6 páginas en la raíz.
- Assets locales (CSS, JS, imágenes).
- Menú móvil accesible.
- Formularios conectados a WhatsApp.
- Prefill por URL y filtros de planes.
- `README.md`, `robots.txt`, `sitemap.xml`.
