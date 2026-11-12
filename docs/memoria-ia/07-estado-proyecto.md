# Estado del proyecto

> Actualizar al terminar cada fase.

## Fase actual

**Fase 9 — Impacto visual v2.1:** implementada y verificada en local. Pendiente de publicar en GitHub y Vercel.

## Hecho

- 7 páginas en la raíz: inicio, sobre nosotros, servicios, planes, contacto, legal y 404.
- Tailwind CLI compilado a `assets/css/tailwind.css`; sin CDN en producción.
- Capa visual cyber-premium en `assets/css/estilos.css`: fondos, rejilla, ruido, cristal, botones, cards, formularios, tabla y estados de foco.
- Remapeo de los tokens heredados `light-*` a la paleta oscura sin reescribir todo el HTML.
- Header responsive: menú móvil por debajo de 1024 px, nav desktop desde 1024 px y CTA “Factibilidad” desde 1280 px.
- Logo del header sin píldora blanca: 56 px en móvil, 64 px en desktop y glow cian sutil; el logo del footer se mantiene igual.
- Home rediseñada: canvas de red, badge, titular con gradiente, contadores, marquee tecnológico, banda de métricas, proceso de contratación y CTA final.
- `sobre-nosotros.html`, `servicios.html`, `planes.html`, `contacto.html` y `legal.html` actualizadas con reveals, stagger, tilt, contadores y CTAs.
- `planes.html`: filtros con `aria-pressed`, tabs de 44 px de alto mínimo, tabla con scroll interno, primera columna sticky y aviso móvil.
- `contacto.html` e `index.html`: formularios con `autocomplete`, `inputmode`, estados `role="status"` y `aria-live`, y prefill por `?plan=`/`?servicio=`.
- `404.html`: concepto “señal perdida”, diagnóstico de ruta, canvas y barras de señal. Sin botón flotante para no tapar la tarjeta.
- `assets/js/main.js`: menú móvil con focus trap, bloqueo de scroll, cierre con Escape, clic fuera y cambio a escritorio en 1024 px.
- Accesibilidad: `aria-current`, `aria-hidden` en iconos, alt en imágenes, labels, foco visible, touch targets de 44 px y `prefers-reduced-motion`.
- Memoria IA completa en `docs/memoria-ia/`, `AGENTS.md` y `CHANGELOG.md`.
- Repositorio Git inicializado: baseline `v1.0.0` en `main`, rama activa `feature/redesign-v2`.
- Remoto GitHub: `https://github.com/Salvaberticci/web-corporativo-wireless-supply`.
- Producción en Vercel: `https://web-corporativo-wireless-supply.vercel.app`.
- Vercel ejecuta `npm run build:vercel`, que compila Tailwind y genera `public/` solo con HTML, assets, `robots.txt` y `sitemap.xml`.
- **v2.1:** motor de efectos ampliado en `effects.js` con intro GSAP del hero, parallax, revelado de imágenes, texto “decode”, cursor de punto y punto de progreso.
- **v2.1:** capa CSS de impacto en `estilos.css` con shimmer del degradado, scanline del hero, barrido de métricas, borde cónico, brillo de botones secundarios, destello de contadores, glitch 404 y entrada al filtrar planes.
- **v2.1:** hooks `data-hero`, `data-hero-item`, `data-scramble`, `data-image-reveal` y `data-parallax` aplicados en las 7 páginas.

## QA ejecutada

- Las 7 páginas responden 200; sin errores de consola, requests fallidos ni enlaces internos rotos.
- Sin overflow horizontal en 320, 360, 390, 768, 1024, 1280 y 1920 px.
- Header probado a 768, 1024, 1100, 1280 y 1920: sin solapamiento y sin saltos de línea.
- Logo del header verificado a 390, 1024, 1280 y 1920: sin overflow, sin solapamiento y header de 85/93 px.
- Menú móvil probado a 390 y 768: apertura, foco inicial, focus trap, Escape, scroll lock y cierre al pasar a 1024.
- Filtros de planes: 4 cards, segmentos pymes/corporativo, `aria-pressed` correcto, tabs de 44 px y animación de entrada al filtrar.
- Formularios: prefill `?plan=500M`, payload completo y número placeholder `584120000000` intacto.
- 404: título, `noindex`, ruta dinámica, 5 barras de señal y glitch RGB.
- `prefers-reduced-motion`: sin scanline, cursor, parallax, glitch, shimmer ni progreso; reveals visibles, canvas estático y contadores en valor final.
- `npm run build` y `node --check` en los 5 scripts sin errores.
- Producción verificada a 390 y 1280 px: 7 páginas 200, sin errores de consola, sin requests fallidos, sin overflow y sin imágenes rotas.
- 404 real de Vercel: devuelve estado 404 y sirve la página “señal perdida” con ruta dinámica y `noindex`.
- Archivos internos (`package.json`, `docs/`, `_source/`, `src/`, `README.md`) devuelven 404 en producción.
- Menú móvil, filtros de planes y prefill `?plan=500M` verificados en la URL de producción.
- **v2.1:** 7 páginas × 320/390/768/1024/1280/1920 sin overflow; imágenes con `clip-path` reveladas; `hiddenReveals`, `hiddenStagger` y `hiddenImages` en 0 tras el scroll.
- **v2.1:** consola y red limpias en las 7 páginas; menú, filtros, prefill y 404 verificados con navegador headless.

## Siguiente

- Publicar `v2.1.0` en GitHub y desplegar en Vercel.
- Verificar el despliegue de producción y el 404 real.
- Configurar el dominio definitivo y sus certificados en Vercel.
- Sustituir el número de WhatsApp placeholder por el oficial.
- Completar redes sociales, datos de contacto y fotos reales.
- Auditoría Lighthouse y prueba en Safari/iOS y Android reales.

## Bloqueos

- Número de WhatsApp real pendiente (`584120000000` es placeholder).
- Redes sociales y datos de contacto reales pendientes.
- Fotos reales de la empresa pendientes; se usa stock de Pexels.
- Dominio definitivo pendiente de configuración en Vercel.

## Riesgos

- La home es larga (incluye contenido legal); revisar si el cliente prefiere moverlo solo a `legal.html`.
- Los formularios dependen de `window.open`; algunos navegadores pueden bloquear la pestaña si el usuario tarda en interactuar.
- El canvas y los blurs pueden penalizar equipos de gama baja; `prefers-reduced-motion` es el fallback actual.
- La tabla de planes requiere scroll horizontal interno en móvil; está señalizado, pero conviene validarlo con usuarios.
