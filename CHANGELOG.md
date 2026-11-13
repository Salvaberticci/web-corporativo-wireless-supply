# Changelog

Todas las versiones relevantes de este proyecto se documentan aquí. El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y el versionado semántico.

## [2.3.0] — 2026-11-12

### Cambiado

- La home queda limitada a hero, marquee de tecnologías, métricas, proceso de contratación y CTA final.
- Se eliminan de `index.html` las secciones `#sobre-nosotros`, `#servicios`, `#planes` y `#contacto`, que duplicaban `sobre-nosotros.html`, `servicios.html`, `planes.html` y `contacto.html`.
- El CTA del hero apunta a `contacto.html#formulario`; “Conoce Nuestras Soluciones” apunta a `servicios.html`; “Explorar” baja al `#proceso`.
- Se retira `assets/js/cotizador.js` de la home y se elimina el archivo, porque ninguna página lo carga.
- Assets CSS/JS/vendor actualizados a `?v=2.3.0`.

### QA

- La home no contiene las secciones duplicadas ni enlaces internos a `#contacto`, `#servicios`, `#planes`, `#sobre-nosotros` o `#cotizador-whatsapp`.
- Hero, métricas, proceso y CTA final se mantienen; enlaces del hero verificados.
- Sin overflow ni errores de consola en local y producción.

### Despliegue

- Producción verificada: home con hero, marquee, métricas, proceso y CTA final; CTA del hero abre `contacto.html#formulario`, “Explorar” baja al proceso y `cotizador.js` devuelve 404.
- 7 páginas × 320/390/1280 sin overflow ni imágenes rotas, assets `?v=2.3.0` y 404 anidado con estado 404; solo el 404 esperado en consola.

## [2.2.1] — 2026-11-12

### Cambiado

- Se elimina de la home la sección “Términos Legales & Políticas de Privacidad”; el contenido legal queda únicamente en `legal.html`, con ancla `#politicas`.
- El checkbox del formulario de la home enlaza a `legal.html#politicas` y abre en una pestaña nueva para no perder los datos introducidos.
- Assets CSS/JS/vendor actualizados a `?v=2.2.1`.

### QA

- La home ya no muestra el marco legal ni el `id="politicas"`.
- `legal.html#politicas` contiene privacidad, estándares Meta API, términos y derechos ARCO.
- Sin errores de consola ni overflow.

### Despliegue

- Producción verificada: home sin sección legal, enlace a `legal.html#politicas` y ancla con scroll; 404 anidado con assets `?v=2.2.1`.

## [2.2.0] — 2026-11-12

### Cambiado

- Las animaciones quedan activas siempre, también con `prefers-reduced-motion: reduce`.
- Se elimina el botón flotante “Activar”, la lógica `ws-motion`/`force-motion` y los bloques CSS de movimiento reducido.
- Assets CSS/JS/vendor actualizados a `?v=2.2.0` para invalidar caché.

### QA

- Con movimiento reducido simulado: scanline, shimmer, cursor, progreso, canvas, parallax, reveals y marquesina activos; sin botón `.motion-toggle`.
- Sin errores de consola ni overflow.

### Despliegue

- Producción verificada con `prefers-reduced-motion: reduce`: animaciones activas, sin toggle y sin overflow; 404 anidado con glitch activo.

## [2.1.3] — 2026-11-12

### Añadido

- Botón discreto “Activar” cuando el sistema tiene `prefers-reduced-motion: reduce`: guarda `ws-motion=full` en `localStorage`, recarga y habilita la experiencia completa sin cambiar la configuración del sistema.
- Clase `force-motion` que reactiva las animaciones CSS/JS cuando el usuario acepta explícitamente el movimiento.

### Cambiado

- Assets CSS/JS/vendor actualizados a `?v=2.1.3` para invalidar caché.

### QA

- Con movimiento reducido: aparece el botón, el sitio respeta la preferencia por defecto y al activarlo se habilitan scanline, shimmer, cursor, progreso, canvas, parallax e image reveal.
- En modo normal: el botón no aparece y las animaciones siguen activas.
- Sin errores de consola ni overflow.

### Despliegue

- Producción: `https://web-corporativo-wireless-supply.vercel.app`.
- Botón y modo forzado verificados en producción con `prefers-reduced-motion: reduce`.

## [2.1.2] — 2026-11-12

### Cambiado

- CSS, JS y vendor de las 7 páginas referenciados con `?v=2.1.2` para forzar la actualización en navegadores y CDN y evitar que se siga viendo la versión anterior en caché.

### QA

- Las 7 páginas cargan los assets con la versión nueva.
- `npm run build` y `npm run build:vercel` sin errores.
- Producción verificada con HTML, CSS y JS nuevos.

## [2.1.1] — 2026-11-12

### Corregido

- El 404 servido en rutas anidadas resolvía sus assets contra la ruta inexistente. El HTML fuente calcula una base dinámica para XAMPP/subdirectorios y el build de Vercel inyecta una base estática `/` para evitar preloads incorrectos.

### QA

- 404 probado en `/foo/bar` y `/ruta-inexistente`: estado 404, CSS/JS/logo cargados y sin errores de recursos.
- `npm run build` y `npm run build:vercel` sin errores.

### Despliegue

- Producción: `https://web-corporativo-wireless-supply.vercel.app`.
- 404 anidado verificado en producción con estado 404 y assets raíz.

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
