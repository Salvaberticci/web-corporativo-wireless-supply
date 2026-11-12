# Sistema de diseño v2 — “Cyber-premium Telecom”

## Principios

1. **Oscuro, no sombrío:** fondos profundos con luz cian controlada.
2. **Técnico y legible:** datos, etiquetas y métricas con monoespaciada.
3. **Profundidad real:** capas, cristal, bordes luminosos, no solo sombras.
4. **Movimiento con propósito:** cada animación comunica jerarquía o estado.
5. **Contraste primero:** los efectos nunca sacrifican lectura ni accesibilidad.

## Paleta

| Token | Hex | Uso |
|---|---|---|
| `ink` | `#050B18` | Fondo global |
| `surface` | `#0A1628` | Secciones alternas |
| `surface-2` | `#0C1D36` | Cards y formularios |
| `surface-3` | `#132D52` | Hover / elevación |
| `line` | `#1E3A5F` | Bordes base |
| `line-glow` | `rgba(0,210,255,.35)` | Bordes activos |
| `cyan` | `#00D2FF` | Acento principal |
| `blue` | `#298FC2` | Marca secundaria |
| `ice` | `#7DD3FC` | Texto de apoyo |
| `white` | `#F0F9FF` | Titulares |
| `muted` | `#94A3B8` | Texto secundario |
| `success` | `#10B981` | WhatsApp / checks |
| `warning` | `#F59E0B` | Avisos |
| `error` | `#EF4444` | Errores |

Gradiente de marca:

```css
linear-gradient(135deg, #00D2FF 0%, #298FC2 55%, #7DD3FC 100%)
```

## Tipografía

- **Display / titulares:** Space Grotesk 500–700.
- **Cuerpo / UI:** Plus Jakarta Sans 400–700.
- **Datos / labels:** JetBrains Mono 400–600, tracking amplio, mayúsculas.

Escala real definida en `tailwind.config.js`. Las utilidades `*-mobile` se usan por defecto y las de escritorio se activan con `md:`:

| Utilidad | Tamaño | Line-height | Uso |
|---|---|---|---|
| `display-lg` | `clamp(2.75rem, 6vw, 4.5rem)` | 1.05 | H1 en desktop |
| `display-lg-mobile` | `clamp(1.875rem, 9vw, 3rem)` | 1.08 | H1 en móvil |
| `headline-xl` | `clamp(2rem, 4.5vw, 3.25rem)` | 1.1 | H2 de sección en desktop |
| `headline-xl-mobile` | `clamp(1.75rem, 7vw, 2.5rem)` | 1.15 | H2 de sección en móvil |
| `headline-lg` | `clamp(1.5rem, 3vw, 2.25rem)` | 1.2 | Títulos de bloque |
| `headline-lg-mobile` | `clamp(1.35rem, 5vw, 1.75rem)` | 1.25 | Títulos de bloque en móvil |
| `headline-md` | `clamp(1.25rem, 2.5vw, 1.75rem)` | 1.3 | Títulos de card |
| `body-lg` | `1.125rem` | 1.75rem | Párrafo destacado |
| `body-md` | `0.975rem` | 1.6rem | Cuerpo base |
| `body-sm` | `0.8125rem` | 1.35rem | Texto auxiliar |
| `label-lg` | `0.875rem` | 1.25rem | Botones y navegación |
| `label-md` | `0.75rem` | 1rem | Badges y metadatos |

Los titulares llevan `overflow-wrap: break-word` para evitar desbordes en 320 px.

## Espaciado y radios

- Escala base 4 px: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Secciones: `clamp(64px, 10vw, 128px)` vertical.
- Radios: 8 px inputs, 16 px cards, 24 px paneles, 999 px pills.
- Ancho de lectura: 65–75 caracteres.

## Superficies

```css
background: rgba(12, 29, 54, 0.62);
border: 1px solid rgba(125, 211, 252, 0.12);
backdrop-filter: blur(16px);
box-shadow: 0 20px 60px -30px rgba(0, 210, 255, 0.25);
```

Añadir una capa de ruido sutil al fondo global y una rejilla de 48 px con opacidad 0.04.

## Componentes

- **Botón primario:** gradiente cian→azul, texto oscuro, brillo al hover, icono que se desplaza.
- **Botón secundario:** cristal con borde cian, texto claro.
- **Botón fantasma:** solo texto + flecha.
- **Logo del header:** PNG original sin contenedor, 56 px en móvil y 64 px en desktop, con `drop-shadow` cian sutil. El footer usa la versión aclarada.
- **Card:** superficie de cristal, borde 1 px, hover con elevación y spotlight.
- **Badge técnico:** monoespaciada, fondo cian 10%, borde cian 30%.
- **Section label:** punto cian + texto monoespaciado en mayúsculas.
- **Input:** fondo `surface`, borde `line`, foco cian con glow suave.
- **Tab:** pill; activo con gradiente y texto oscuro.
- **Accordion:** borde inferior, icono +/×, transición de altura.
- **Tabla:** cabecera sticky, primera columna sticky, scroll horizontal con indicador.

## Reglas

- No usar más de dos acentos por sección.
- Los titulares pueden llevar gradiente; el cuerpo siempre color sólido.
- No usar `!important` salvo en utilidades de accesibilidad.
- Cualquier componente nuevo se documenta aquí antes de reutilizarlo.
