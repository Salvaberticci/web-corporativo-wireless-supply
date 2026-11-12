# Responsive y UX

## Breakpoints

| Rango | Nombre | Layout |
|---|---|---|
| 320–479 | xs | 1 columna, menú sheet, cards apiladas |
| 480–639 | sm | 1–2 columnas |
| 640–767 | md | 2 columnas |
| 768–1023 | lg | 2–3 columnas, nav móvil todavía |
| 1024–1279 | xl | 3 columnas, nav desktop |
| 1280–1535 | 2xl | 4 columnas, contenedor 1280 |
| 1536+ | 3xl | contenedor 1440, más aire |

## Reglas

- Sin scroll horizontal en ningún ancho.
- Tipografía fluida con `clamp()`; no saltos bruscos entre breakpoints.
- Touch targets ≥44×44 px y separación ≥8 px.
- El menú móvil se usa hasta 1024 px.
- Formularios a una columna en móvil; labels siempre visibles.
- Tabla comparativa: scroll horizontal con primera columna sticky y aviso visual; alternativa de cards en móvil si se complica.
- Imágenes: `width`/`height` explícitos, `srcset`, `sizes`, `loading="lazy"`.
- Probar zoom 200%, landscape y safe areas de iPhone.

## Implementación real

- **Header:** menú móvil por debajo de 1024 px; nav desktop desde `lg` (1024 px); CTA “Factibilidad” solo desde `xl` (1280 px). Los enlaces usan `whitespace-nowrap` y el logo y el grupo de acciones llevan `shrink-0` para no solaparse.
- **Titulares a 320 px:** `display-lg-mobile` arranca en `1.875rem` (30 px) y `h1`, `h2` y `h3` tienen `overflow-wrap: break-word`; así “Telecomunicaciones” cabe sin cortes arbitrarios.
- **Logo del header:** sin contenedor; 56 px en móvil y 64 px en desktop, con `drop-shadow` cian sutil. No reduce el ancho disponible porque elimina el padding de la antigua píldora.
- **Touch targets:** toggle del menú 44×44 px, WhatsApp del header `min-h-11` y tabs de planes `min-h-11` (44 px). Mantener este mínimo al añadir controles.
- **Tabla de planes:** `.table-shell` tiene scroll horizontal interno intencional; la primera columna es sticky y `.table-hint` avisa en móvil. No cuenta como overflow global.
- **QA medida:** 320, 360, 390, 768, 1024, 1280 y 1920 px sin overflow de documento. La tabla se valida dentro de su contenedor.

## Patrones por página

- **Home:** hero 1 col → 2 col; bento 1 → 2 → 3; planes 1 → 2 → 4.
- **About:** hero 1 col → 2 col; timeline vertical → horizontal en desktop.
- **Servicios:** tabs scrollables en móvil; proceso 1 → 2 → 4.
- **Planes:** cards 1 → 2 → 4; tabla con scroll.
- **Contacto:** formulario 1 col → 2 col; aside sticky en desktop.
- **Legal:** contenido 1 col, TOC colapsable en móvil.

## Matriz de pruebas

| Ancho | Navegador | Qué revisar |
|---|---|---|
| 320 | Chrome | overflow, botones, tabla |
| 390 | Chrome/Safari | menú, formularios, safe area |
| 768 | Chrome | grillas, nav |
| 1024 | Chrome | cambio a nav desktop |
| 1280 | Chrome | layout completo |
| 1920 | Chrome | max-width y aire |

## UX

- Un CTA primario claro por sección.
- Mensajes de error junto al campo, no en alerts.
- Estados de carga y éxito visibles.
- El botón flotante de WhatsApp no debe tapar campos ni botones.
- Navegación con página activa visible.
- Breadcrumbs en páginas internas si aportan contexto.
- Enlaces externos con `rel="noopener noreferrer"`.
