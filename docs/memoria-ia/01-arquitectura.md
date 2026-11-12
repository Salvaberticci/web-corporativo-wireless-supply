# Arquitectura del sitio

## Stack

- HTML5 estático, sin framework.
- Tailwind CSS compilado con CLI a `assets/css/tailwind.css` (sin CDN en producción). El archivo generado se versiona porque el despliegue es estático.
- JavaScript vanilla + GSAP/ScrollTrigger vendorizado para animaciones complejas.
- Material Symbols para iconografía.
- Google Fonts: Space Grotesk, Plus Jakarta Sans y JetBrains Mono (etiquetas técnicas).
- Sin backend: los formularios generan mensajes y abren WhatsApp.

## Estructura

```
web-corporativa-wireless/
├── index.html
├── sobre-nosotros.html
├── servicios.html
├── planes.html
├── contacto.html
├── legal.html
├── 404.html
├── assets/
│   ├── css/
│   │   ├── tailwind.css      # generado por Tailwind CLI
│   │   └── estilos.css       # componentes y animaciones propias
│   ├── js/
│   │   ├── main.js           # navegación móvil y shell
│   │   ├── effects.js        # reveals, intro, parallax, tilt, contadores, cursor, canvas
│   │   ├── cotizador.js
│   │   ├── contacto.js
│   │   └── planes.js
│   ├── img/
│   └── vendor/               # GSAP/ScrollTrigger local
├── src/
│   └── input.css             # entrada de Tailwind
├── docs/
│   ├── memoria-ia/
│   └── sistema-de-diseno.md
├── _source/                  # export original de Stitch (respaldo)
├── scripts/
│   └── build-vercel.js       # genera public/ para Vercel
├── package.json
├── package-lock.json
├── tailwind.config.js
├── vercel.json
├── .vercelignore
├── AGENTS.md
├── README.md
├── CHANGELOG.md
├── robots.txt
└── sitemap.xml
```

## Scripts

```bash
npm install          # dependencias de desarrollo
npm run dev          # Tailwind en watch
npm run build        # CSS minificado
npm run build:vercel # compila y genera public/ solo con archivos publicables
```

## Despliegue

- **Repositorio:** `https://github.com/Salvaberticci/web-corporativo-wireless-supply`.
- **Producción:** `https://web-corporativo-wireless-supply.vercel.app`.
- Vercel ejecuta `npm run build:vercel` y publica `public/`; el proyecto está conectado al repositorio de GitHub.
- `.vercelignore` excluye `_source/`, `docs/`, `node_modules/` y archivos de desarrollo.
- XAMPP/Apache: copiar la carpeta a `htdocs` y abrir `http://localhost/web-corporativa-wireless/`.
- Hosting estático: subir solo HTML, `assets/`, `robots.txt` y `sitemap.xml`.
- Excluir `_source/`, `docs/`, `src/`, `node_modules/` y archivos de configuración de desarrollo.

## Reglas técnicas

- Rutas relativas desde la raíz del proyecto (`assets/...`).
- Scripts con `defer` cuando sea posible.
- Imágenes con dimensiones explícitas, `loading="lazy"` y `decoding="async"`.
- Nada de dependencias por CDN en producción.
- El HTML debe funcionar sin JavaScript en su contenido esencial.
