# Wireless Supply C.A. — Sitio web corporativo

Sitio estático corporativo de **Wireless Supply C.A.** (RIF: J507358860), proveedor de internet dedicado, fibra óptica GPON y soluciones de telecomunicaciones en Venezuela.

## Estructura del proyecto

```
web-corporativa-wireless/
├── index.html                  # Inicio (hero, servicios, planes destacados, cotizador)
├── sobre-nosotros.html         # Quiénes somos, misión, visión, valores
├── servicios.html              # Servicios y soluciones de fibra óptica
├── planes.html                 # Tarifas y filtros por categoría
├── contacto.html               # Formulario inteligente + WhatsApp
├── legal.html                  # Políticas, términos y cumplimiento
├── assets/
│   ├── css/
│   │   └── estilos.css         # Animaciones y estilos personalizados compartidos
│   ├── js/
│   │   ├── tailwind.config.js  # Configuración de Tailwind (colores, tipografías)
│   │   ├── main.js             # Menú móvil accesible
│   │   ├── cotizador.js        # Formulario de cotización del inicio
│   │   ├── contacto.js         # Formulario de contacto + prefill por URL
│   │   └── planes.js           # Filtros de categoría en planes
│   └── img/
│       ├── logo-wireless-supply.png
│       ├── fibra-optica.jpg
│       ├── ingenieros-telecom.jpg
│       └── infraestructura-gpon.jpg
├── docs/
│   └── sistema-de-diseno.md    # Sistema de diseño original (Stitch)
├── _source/
│   └── stitch-export/          # Export original de Stitch (respaldo, no publicar)
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

> No abras los HTML con doble clic (`file://`): Tailwind CDN y las rutas relativas funcionan mejor con un servidor local.

## Tecnologías

- **HTML5** semántico y accesible.
- **Tailwind CSS** vía CDN (`cdn.tailwindcss.com`) con configuración externa en `assets/js/tailwind.config.js`.
- **Material Symbols** de Google Fonts para iconografía.
- **JavaScript vanilla** sin dependencias ni build step.
- Fuentes: Space Grotesk (titulares) y Plus Jakarta Sans (cuerpo).

> **Nota de producción:** Tailwind CDN está pensado para prototipos. Para un despliegue final se recomienda compilar Tailwind y servir un CSS estático.

## Datos que debes personalizar

| Dato | Dónde | Valor actual |
|---|---|---|
| Número de WhatsApp | `assets/js/cotizador.js`, `assets/js/contacto.js`, enlaces `wa.me` en los 6 HTML | `584120000000` (placeholder) |
| Dominio | `sitemap.xml`, `robots.txt`, etiquetas `og:image` | `https://wirelesssupply.com.ve` |
| Redes sociales | Footer de cada página | Enlaces `#` pendientes |
| Dirección / correo | `contacto.html`, footer | Pendiente de datos reales |

Busca `584120000000` en todo el proyecto y reemplázalo por el número oficial antes de publicar.

## Funcionalidades implementadas

- **Menú móvil** accesible: `aria-expanded`, cierre con Escape, clic fuera y cambio a escritorio (`assets/js/main.js`).
- **Cotizador del inicio**: arma un mensaje estructurado y abre WhatsApp.
- **Formulario de contacto**: valida campos y redirige a WhatsApp con el detalle de la solicitud.
- **Prefill por URL**: `contacto.html?plan=Fibra%20Start%20100M` o `contacto.html?servicio=GPON` preselecciona el servicio.
- **Filtros de planes**: categorías Residencial / Pyme / Empresarial en `planes.html`.
- **Animaciones** respetando `prefers-reduced-motion`.
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
- Añadir enlaces reales de redes sociales.
- Comprimir/convertir las imágenes a WebP y añadir `srcset`.
- Compilar Tailwind para producción.
- Añadir política de cookies si se incorporan analíticas.
