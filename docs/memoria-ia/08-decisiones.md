# Decisiones de arquitectura (ADR)

## ADR-001 — Sitio estático sin framework

- **Fecha:** 2026-11-12
- **Contexto:** sitio corporativo de 6 páginas, sin backend ni contenido dinámico.
- **Decisión:** mantener HTML/CSS/JS estático.
- **Consecuencias:** despliegue simple, SEO directo, sin coste de servidor. La duplicación de header/footer se asume.

## ADR-002 — Dark-first

- **Fecha:** 2026-11-12
- **Contexto:** se busca una imagen más futurista y premium.
- **Decisión:** tema oscuro global con acentos cian, superficies de cristal y secciones de lectura de alto contraste.
- **Consecuencias:** mayor impacto visual; exige cuidar contraste, legibilidad y rendimiento de blur.

## ADR-003 — Tailwind CLI en producción

- **Fecha:** 2026-11-12
- **Contexto:** el CDN de Tailwind no es recomendable en producción.
- **Decisión:** compilar Tailwind con CLI a `assets/css/tailwind.css`.
- **Consecuencias:** build necesario; CSS más pequeño y sin dependencia externa. Fallback: CDN si no hay Node.

## ADR-004 — GSAP + ScrollTrigger para movimiento complejo

- **Fecha:** 2026-11-12
- **Contexto:** se requieren timelines, parallax y stagger.
- **Decisión:** GSAP vendorizado localmente; CSS/IntersectionObserver para lo simple.
- **Consecuencias:** +~70 KB JS; se compensa con carga diferida y uso limitado.

## ADR-005 — Git local primero

- **Fecha:** 2026-11-12
- **Contexto:** no hay remoto definido.
- **Decisión:** repositorio local con `main` y `feature/redesign-v2`; remoto opcional después.
- **Consecuencias:** control de versiones inmediato; publicación en GitHub/GitLab pendiente de URL.

## ADR-006 — Fotos de stock Pexels

- **Fecha:** 2026-11-12
- **Contexto:** la generación de imágenes con IA falló por cuota.
- **Decisión:** usar fotos libres de Pexels, guardadas localmente.
- **Consecuencias:** sitio completo sin depender de URLs externas; reemplazables por material real.

## ADR-007 — Capa visual v2 sobre los tokens heredados

- **Fecha:** 2026-11-12
- **Contexto:** el HTML venía del export de Stitch con cientos de utilidades `light-*` y estilos inline.
- **Decisión:** cargar `estilos.css` después de `tailwind.css` y remapear los tokens heredados a la paleta oscura; los componentes nuevos se construyen con clases propias (`surface-card`, `btn-primary`, `table-shell`, etc.).
- **Consecuencias:** se evita reescribir todo el HTML y se conserva el contenido; a cambio, hay una capa de compatibilidad que debe revisarse al cambiar tokens o añadir componentes.

## ADR-008 — Navegación móvil hasta 1024 px

- **Fecha:** 2026-11-12
- **Contexto:** a 768 px convivían la nav desktop, “Factibilidad” y “WhatsApp Directo”, y el header desbordaba 31 px; además la nav se montaba sobre el logo a 1024 px.
- **Decisión:** nav desktop desde `lg` (1024 px), menú móvil por debajo, `desktopQuery` de `main.js` en 1024 px y CTA “Factibilidad” del header desde `xl` (1280 px). Los enlaces usan `whitespace-nowrap` y el logo/acciones no se encogen.
- **Consecuencias:** header limpio en tablet y laptop; entre 1024 y 1279 px el CTA “Factibilidad” vive en el menú/contenido y WhatsApp sigue visible en el header.

## ADR-009 — 404 sin botón flotante de WhatsApp

- **Fecha:** 2026-11-12
- **Contexto:** en móvil, el botón flotante tapaba la tarjeta de diagnóstico de la página 404.
- **Decisión:** quitar el CTA flotante solo en `404.html`; el header mantiene el botón de WhatsApp y la página ofrece “Contactar soporte”.
- **Consecuencias:** la tarjeta se lee completa y la página queda más limpia; es una excepción deliberada al shell global.

## ADR-010 — Titulares largos en 320 px

- **Fecha:** 2026-11-12
- **Contexto:** “Telecomunicaciones” desbordaba 32 px en los H1 a 320 px.
- **Decisión:** `overflow-wrap: break-word` en `h1`, `h2` y `h3`, y mínimo del clamp móvil en `1.875rem` (30 px).
- **Consecuencias:** la palabra cabe sin cortes arbitrarios; si se añaden términos más largos, revisar la escala en 320 px.

## ADR-011 — Logo del header sin contenedor

- **Fecha:** 2026-11-12
- **Contexto:** el logo del header estaba dentro de una píldora blanca con borde y sombra; el cliente lo percibía pequeño y recargado.
- **Decisión:** quitar el fondo, borde y sombra del contenedor, subir la imagen a 56 px en móvil y 64 px en desktop, y añadir un `drop-shadow` cian sutil para separarla del fondo oscuro.
- **Consecuencias:** el logo gana presencia sin aumentar el ancho del header; el footer conserva su tratamiento aclarado. Si el cliente entrega un logo para fondos oscuros, sustituir el PNG y revisar el glow.

## ADR-016 — Opt-in explícito de movimiento

- **Fecha:** 2026-11-12
- **Contexto:** el cliente reportó que el sitio se veía estático; la causa era `prefers-reduced-motion: reduce` activo en su sistema. El sitio lo respetaba apagando todas las animaciones.
- **Decisión:** mantener la preferencia del sistema por defecto y mostrar un botón discreto “Activar” solo cuando está activa. Al pulsarlo se guarda `ws-motion=full` en `localStorage`, se recarga la página y la clase `force-motion` reactiva las animaciones.
- **Consecuencias:** accesibilidad y control del usuario; quien quiera movimiento puede activarlo sin tocar el sistema operativo. Para volver al modo reducido hay que borrar la clave `ws-motion` de `localStorage`.

## ADR-015 — Cache busting de assets

- **Fecha:** 2026-11-12
- **Contexto:** tras desplegar `v2.1.0`, el navegador del cliente seguía mostrando CSS/JS antiguos pese a que Vercel servía la versión nueva.
- **Decisión:** versionar las referencias a CSS, JS y vendor con `?v=2.1.2` en las 7 páginas. La versión se actualiza en cada release que cambie assets.
- **Consecuencias:** el navegador descarga la versión nueva aunque tenga caché; hay que recordar subir el sufijo al publicar cambios de CSS/JS.

## ADR-014 — Base del 404 para rutas anidadas

- **Fecha:** 2026-11-12
- **Contexto:** Vercel sirve `404.html` para cualquier ruta; con rutas anidadas los assets relativos se resolvían contra la ruta inexistente y la página quedaba sin estilos.
- **Decisión:** el HTML fuente calcula una base dinámica (`/` o `/web-corporativa-wireless/`) antes de cargar los assets para conservar la portabilidad local. El build de Vercel reemplaza ese script por `<base href="/">` estático, de modo que el preload scanner resuelva todo desde la raíz y no emita preloads fallidos.
- **Consecuencias:** el 404 funciona en producción para rutas de cualquier profundidad y sigue siendo portable en XAMPP; si el sitio se despliega en otro subdirectorio, ajustar la detección de `base-404` o el build.

## ADR-013 — Capa de impacto visual v2.1 sin dependencias nuevas

- **Fecha:** 2026-11-12
- **Contexto:** el cliente pidió más animaciones e impacto visual sin romper la estética cyber-premium, el responsive ni el rendimiento.
- **Decisión:** usar GSAP/ScrollTrigger solo para la intro coreografiada del hero y el parallax; el resto de efectos se implementa con CSS (`keyframes`, `clip-path`, `@property`) e `IntersectionObserver` mediante hooks declarativos (`data-hero`, `data-hero-item`, `data-scramble`, `data-image-reveal`, `data-parallax`). No se añaden dependencias.
- **Consecuencias:** los efectos ambientales no bloquean el render y se aligeran en móvil o se desactivan con `prefers-reduced-motion`; el HTML incorpora atributos `data-*` que deben replicarse al crear páginas nuevas. El revelado de imágenes observa el contenedor padre porque el `clip-path` del propio elemento anula el `IntersectionObserver`.

## ADR-012 — Despliegue estático en Vercel

- **Fecha:** 2026-11-12
- **Contexto:** el sitio es estático, pero el repositorio incluye `_source/`, `docs/`, `src/` y configuración de desarrollo que no debe publicarse.
- **Decisión:** desplegar en Vercel con `npm run build:vercel`, que compila Tailwind y copia a `public/` solo los 7 HTML, `assets/`, `robots.txt` y `sitemap.xml`. `vercel.json` fija `framework: null` y `outputDirectory: public`; `.vercelignore` excluye el resto.
- **Consecuencias:** el sitio se sirve limpio y el 404 personalizado funciona con estado 404. Cualquier archivo nuevo que deba publicarse hay que añadirlo a `scripts/build-vercel.js`. El proyecto queda conectado al repositorio de GitHub para despliegues automáticos.

