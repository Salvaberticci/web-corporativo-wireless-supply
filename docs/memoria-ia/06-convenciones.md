# Convenciones de código

## HTML

- Indentación de 2 espacios.
- Atributos en minúsculas y comillas dobles.
- Un `<h1>` por página.
- Clases de Tailwind primero; clases propias después.
- Comentarios de sección con `<!-- Sección: ... -->`.
- Enlaces internos relativos (`contacto.html`), nunca rutas absolutas del sistema.
- Iconos decorativos con `aria-hidden="true"`.

## CSS

- Variables en `:root` para colores, sombras y tiempos.
- Componentes con prefijo semántico: `.btn-primary`, `.card-glass`, `.section-label`.
- Animaciones en `estilos.css` o `src/input.css`, no inline.
- Usar `@layer components` para componentes Tailwind.
- Evitar `!important`; si es necesario, justificar en comentario.
- Mobile-first: estilos base para móvil y `@media (min-width: ...)` para ampliar.

## JavaScript

- Vanilla ES2020+, sin frameworks.
- IIFE o módulos con `defer`.
- `const`/`let`, nunca `var`.
- Funciones con nombre y responsabilidad única.
- No contaminar `window` salvo funciones que deban llamarse desde `onclick`.
- Guardas tempranas (`if (!el) return;`).
- Comentarios solo para lógica no obvia.
- Respetar `prefers-reduced-motion` antes de animar.

## Nombres

| Tipo | Convención | Ejemplo |
|---|---|---|
| Archivos HTML | kebab-case español | `sobre-nosotros.html` |
| CSS | kebab-case | `.plan-card` |
| JS | camelCase | `iniciarContadores` |
| IDs | snake_case para formularios | `input_nombre` |
| IDs UI | kebab-case | `mobile-menu` |
| Variables CSS | kebab-case | `--color-cyan` |

## Git

- Conventional Commits: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`.
- Alcance entre paréntesis: `feat(home): hero animado`.
- Un commit por unidad lógica; no mezclar rediseño y limpieza.
- Ramas: `feature/...`, `fix/...`, `docs/...`.
- Tags: `v1.0.0` baseline, `v2.0.0` rediseño, `v2.0.1` logo, `v2.1.0` impacto visual, `v2.1.1` 404 anidado y `v2.1.2` cache busting.

## Calidad antes de commit

```bash
node --check assets/js/*.js
npm run build
```

- Sin errores de consola.
- Sin enlaces rotos.
- Sin overflow horizontal.
- Documentación actualizada.
