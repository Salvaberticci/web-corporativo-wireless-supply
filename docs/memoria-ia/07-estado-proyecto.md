# Estado del proyecto

> Actualizar al terminar cada fase.

## Fase actual

**Fase 8 — QA, documentación y cierre:** completada. Rediseño `v2.0.0` y ajuste de logo `v2.0.1` listos para revisión del cliente.

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
- `assets/js/effects.js`: fondo, ruido, progreso de scroll, header scrolled, reveals, stagger, contadores, tilt, botones magnéticos, cursor glow, canvas y transiciones.
- `assets/js/main.js`: menú móvil con focus trap, bloqueo de scroll, cierre con Escape, clic fuera y cambio a escritorio en 1024 px.
- Accesibilidad: `aria-current`, `aria-hidden` en iconos, alt en imágenes, labels, foco visible, touch targets de 44 px y `prefers-reduced-motion`.
- Memoria IA completa en `docs/memoria-ia/`, `AGENTS.md` y `CHANGELOG.md`.
- Repositorio Git inicializado: baseline `v1.0.0` en `main`, rama activa `feature/redesign-v2`.

## QA ejecutada

- Las 7 páginas responden 200; sin errores de consola, requests fallidos ni enlaces internos rotos.
- Sin overflow horizontal en 320, 360, 390, 768, 1024, 1280 y 1920 px.
- Header probado a 768, 1024, 1100, 1280 y 1920: sin solapamiento y sin saltos de línea.
- Logo del header verificado a 390, 1024, 1280 y 1920: sin overflow, sin solapamiento y header de 85/93 px.
- Menú móvil probado a 390 y 768: apertura, foco inicial, focus trap, Escape, scroll lock y cierre al pasar a 1024.
- Filtros de planes: 4 cards, segmentos pymes/corporativo, `aria-pressed` correcto y tabs de 44 px.
- Formularios: prefill `?plan=500M`, payload completo y número placeholder `584120000000` intacto.
- 404: título, `noindex`, ruta dinámica y 5 barras de señal.
- `prefers-reduced-motion`: reveals visibles, marquee/cursor desactivados y contadores en valor final.
- `npm run build` y `node --check` en los 5 scripts sin errores.

## Siguiente

- Publicar el repositorio en el remoto definitivo.
- Sustituir el número de WhatsApp placeholder por el oficial.
- Completar redes sociales, datos de contacto y fotos reales.
- Definir remoto GitHub/GitLab y publicar.
- Configurar el 404 real del servidor de producción.
- Auditoría Lighthouse y prueba en Safari/iOS y Android reales.

## Bloqueos

- Número de WhatsApp real pendiente (`584120000000` es placeholder).
- Redes sociales y datos de contacto reales pendientes.
- Fotos reales de la empresa pendientes; se usa stock de Pexels.
- Remoto Git no definido.

## Riesgos

- La home es larga (incluye contenido legal); revisar si el cliente prefiere moverlo solo a `legal.html`.
- Los formularios dependen de `window.open`; algunos navegadores pueden bloquear la pestaña si el usuario tarda en interactuar.
- El canvas y los blurs pueden penalizar equipos de gama baja; `prefers-reduced-motion` es el fallback actual.
- La tabla de planes requiere scroll horizontal interno en móvil; está señalizado, pero conviene validarlo con usuarios.
