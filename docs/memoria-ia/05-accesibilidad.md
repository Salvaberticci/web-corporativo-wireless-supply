# Accesibilidad

Objetivo: **WCAG 2.2 AA** en todas las páginas.

## Checklist obligatorio

- [ ] `lang="es"` en `<html>`.
- [ ] Un solo `<h1>` por página y jerarquía de encabezados sin saltos.
- [ ] Landmarks: `header`, `nav`, `main`, `footer`.
- [ ] Skip link visible al enfocar.
- [ ] Foco visible en todos los elementos interactivos.
- [ ] Contraste mínimo 4.5:1 en texto normal y 3:1 en texto grande.
- [ ] No usar color como único indicador.
- [ ] Imágenes con `alt` descriptivo; decorativas con `alt=""` y `aria-hidden`.
- [ ] Iconos decorativos con `aria-hidden="true"`.
- [ ] Formularios con `<label>` asociado, `autocomplete` e `inputmode`.
- [ ] Errores descritos en texto y asociados con `aria-describedby`.
- [ ] Estados de envío con `aria-live="polite"`.
- [ ] Menú móvil con `aria-expanded`, foco atrapado y cierre con Escape.
- [x] Animaciones siempre activas por decisión del cliente (excepción documentada en ADR-017).
- [ ] Enlaces con texto descriptivo (evitar “clic aquí”).
- [ ] Tablas con `<caption>` o título asociado.
- [ ] Contraste de botones sobre gradientes verificado.

## Teclado

- Tab recorre en orden lógico.
- Enter/Espacio activan botones.
- Escape cierra menú y modales.
- El foco regresa al disparador al cerrar.
- No hay trampas de foco fuera de modales.

## Movimiento

- Las animaciones no se desactivan con `prefers-reduced-motion`; el canvas se pausa al salir del viewport o con la pestaña oculta.
- No usar parpadeos rápidos ni animaciones que impidan leer.
- Las transiciones de página no deben retrasar la navegación.

## Pruebas

- Navegación completa solo con teclado.
- Lighthouse Accessibility ≥95.
- Revisión manual de contraste en textos sobre cristal y gradientes.
- Prueba con zoom 200% y ventana de 320 px.
