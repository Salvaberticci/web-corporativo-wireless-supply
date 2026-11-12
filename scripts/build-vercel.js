/* Genera una carpeta public/ con solo los archivos publicables del sitio. */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const out = path.join(root, 'public');

execSync('npm run build', { cwd: root, stdio: 'inherit' });

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

const files = [
  'index.html',
  'sobre-nosotros.html',
  'servicios.html',
  'planes.html',
  'contacto.html',
  'legal.html',
  '404.html',
  'robots.txt',
  'sitemap.xml',
];

for (const file of files) {
  fs.copyFileSync(path.join(root, file), path.join(out, file));
}

/* En Vercel el sitio vive en la raíz: fijar una base estática evita que el
   preload scanner resuelva los assets del 404 contra rutas anidadas. */
const notFoundPath = path.join(out, '404.html');
const notFoundHtml = fs
  .readFileSync(notFoundPath, 'utf8')
  .replace(/<script id="base-404">[\s\S]*?<\/script>/, '<base href="/">');
fs.writeFileSync(notFoundPath, notFoundHtml);

fs.cpSync(path.join(root, 'assets'), path.join(out, 'assets'), { recursive: true });

console.log(`Sitio publicado en ${path.relative(root, out)}/`);
