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

