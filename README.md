# Wireless Supply C.A. — Sitio web corporativo

Sitio estático corporativo de **Wireless Supply C.A.** (RIF: J507358860), proveedor de internet dedicado, fibra óptica GPON y soluciones de telecomunicaciones en Venezuela.

## Estructura del proyecto

```
web-corporativa-wireless/
├── index.html                  # Inicio (hero, métricas, sectores, proceso, FAQ y CTA)
├── sobre-nosotros.html         # Quiénes somos, misión, visión, valores
├── servicios.html              # Servicios y soluciones de fibra óptica
├── planes.html                 # Tarifas y filtros por categoría
├── contacto.html               # Formulario inteligente + WhatsApp
├── legal.html                  # Políticas, términos y cumplimiento
├── 404.html                    # Página de error “señal perdida”
├── assets/
│   ├── css/
│   │   ├── tailwind.css        # generado por Tailwind CLI
│   │   └── estilos.css         # Animaciones y estilos personalizados compartidos
│   ├── js/
│   │   ├── main.js             # Menú móvil accesible
│   │   ├── effects.js          # Reveals, tilt, contadores, canvas y transiciones
│   │   ├── contacto.js         # Formulario de contacto + prefill por URL
│   │   └── planes.js           # Filtros de categoría en planes
│   ├── img/
│   │   ├── logo-wireless-supply.png
│   │   ├── fibra-optica.jpg
│   │   ├── ingenieros-telecom.jpg
│   │   └── infraestructura-gpon.jpg
│   └── vendor/                 # GSAP y ScrollTrigger locales
├── src/
│   └── input.css               # Entrada de Tailwind
├── docs/
│   ├── memoria-ia/             # Memoria del proyecto para agentes
│   └── sistema-de-diseno.md    # Sistema de diseño original (Stitch)
├── _source/
│   └── stitch-export/          # Export original de Stitch (respaldo, no publicar)
├── package.json
├── tailwind.config.js
├── robots.txt
└── sitemap.xml
```

## Cómo verlo en local

### Opción A — XAMPP

1. Copia la carpeta a `C:\xampp\htdocs\web-corporativa-wireless`.
2. Inicia **Apache** desde el panel de XAMPP.
3. Abre `http://localhost/web-corporativa-wireless/`.

### Opción B — Servidor PHP integrado

```bash
cd web-corporativa-wireless
php -S 127.0.0.1:8080
```

Luego abre `http://127.0.0.1:8080/`.

> No abras los HTML con doble clic (`file://`): las rutas relativas y los scripts funcionan mejor con un servidor local.

## Build

```bash
npm install
npm run dev      # Tailwind en watch
npm run build    # CSS minificado para producción
```

El CSS compilado se sirve desde `assets/css/tailwind.css`. No se usa CDN en producción.

## Despliegue

- **Repositorio:** https://github.com/Salvaberticci/web-corporativo-wireless-supply
- **Producción:** https://web-corporativo-wireless-supply.vercel.app

Vercel ejecuta `npm run build:vercel`, que compila Tailwind y genera `public/` solo con los HTML, `assets/`, `robots.txt` y `sitemap.xml`. El proyecto está conectado al repositorio de GitHub.

## Tecnologías

- **HTML5** semántico y accesible.
- **Tailwind CSS** compilado con CLI y configuración en `tailwind.config.js`.
- **GSAP + ScrollTrigger** vendorizados en `assets/vendor/`.
- **Material Symbols** de Google Fonts para iconografía.
- **JavaScript vanilla** para navegación, formularios y efectos.
- Fuentes: Space Grotesk (titulares), Plus Jakarta Sans (cuerpo) y JetBrains Mono (datos).

## Datos que debes personalizar

| Dato | Dónde | Valor actual |
|---|---|---|
| Número de WhatsApp | `assets/js/contacto.js` y enlaces `wa.me` en los 7 HTML | `584120000000` (placeholder) |
| Dominio | `sitemap.xml`, `robots.txt`, etiquetas `og:image` | `https://wirelesssupply.com.ve` |
| Redes sociales | Footer de cada página | Enlaces `#` pendientes |
| Dirección / correo | `contacto.html`, footer | Pendiente de datos reales |

Busca `584120000000` en todo el proyecto y reemplázalo por el número oficial antes de publicar.

## Funcionalidades implementadas

- **Menú móvil** accesible: `aria-expanded`, focus trap, cierre con Escape, clic fuera y cambio a escritorio (`assets/js/main.js`).
- **Enlaces de conversión**: el hero y el CTA final llevan al formulario de `contacto.html#formulario`.
- **Sectores y FAQ en la home**: seis industrias y seis preguntas frecuentes con `<details>/<summary>` nativo, sin JavaScript.
- **Formulario de contacto**: valida campos y redirige a WhatsApp con el detalle de la solicitud.
- **Prefill por URL**: `contacto.html?plan=Fibra%20Start%20100M` o `contacto.html?servicio=GPON` preselecciona el servicio.
- **Filtros de planes**: Todos / Pymes / Corporativo en `planes.html`, con `aria-pressed`.
- **Página 404** con diagnóstico de ruta y recuperación.
- **Animaciones** siempre activas por decisión del cliente (ADR-017).
- **SEO**: metadatos, Open Graph, JSON-LD, `robots.txt` y `sitemap.xml`.

## Créditos de imágenes

Fotografías de stock bajo licencia libre de **Pexels**:

- `fibra-optica.jpg` — [Pexels #12932191](https://www.pexels.com/photo/12932191/)
- `ingenieros-telecom.jpg` — [Pexels #1181354](https://www.pexels.com/photo/1181354/)
- `infraestructura-gpon.jpg` — [Pexels #4486718](https://www.pexels.com/photo/4486718/)

El logo es propiedad de Wireless Supply C.A.

## Respaldo del export original

La carpeta `_source/stitch-export/` conserva los 6 `code.html` originales generados por Google Stitch, el sistema de diseño y el logo. No forma parte del sitio publicado; puede excluirse del despliegue o bloquearse desde el servidor.

## Pendientes sugeridos

- Reemplazar el número de WhatsApp placeholder.
- Añadir enlaces reales de redes sociales y datos de contacto.
- Sustituir las fotos de stock por material real de la empresa.
- Comprimir/convertir las imágenes a WebP y añadir `srcset`.
- Configurar el 404 real del servidor de producción.
- Añadir política de cookies si se incorporan analíticas.
