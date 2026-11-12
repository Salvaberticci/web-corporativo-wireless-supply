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

fs.cpSync(path.join(root, 'assets'), path.join(out, 'assets'), { recursive: true });

console.log(`Sitio publicado en ${path.relative(root, out)}/`);
