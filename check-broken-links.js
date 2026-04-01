import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');

// Índice de archivos existentes
const existingFiles = new Set();
const existingRoutes = new Set();
const existingAssets = new Set();

// Recolectar archivos del dist
function indexFiles(dir, baseDir = distDir) {
  try {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      try {
        const fullPath = path.join(dir, file);
        const stats = fs.statSync(fullPath);
        const relativePath = path.relative(baseDir, fullPath);
        
        if (stats.isDirectory()) {
          // Agregar ruta de carpeta (para /about/ -> /about/index.html)
          existingRoutes.add('/' + relativePath.replace(/\\/g, '/') + '/');
          indexFiles(fullPath, baseDir);
        } else {
          existingFiles.add(relativePath);
          // Agregar ruta de asset estático 
          existingAssets.add('/' + relativePath.replace(/\\/g, '/'));
          
          // Si es index.html, agregar ruta
          if (file === 'index.html') {
            const routePath = '/' + path.dirname(relativePath).replace(/\\/g, '/') + '/';
            existingRoutes.add(routePath === '//' ? '/' : routePath);
          }
        }
      } catch (err) {
        console.warn(`⚠️  No se puede leer archivo: ${file}`);
      }
    });
  } catch (err) {
    console.warn(`⚠️  No se puede leer directorio: ${dir}`);
  }
}

// Buscar enlaces en archivos HTML
function findBrokenLinks() {
  const brokenLinks = [];
  
  function scanFiles(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const fullPath = path.join(dir, file);
      
      if (fs.statSync(fullPath).isDirectory()) {
        scanFiles(fullPath);
      } else if (file.endsWith('.html')) {
        const content = fs.readFileSync(fullPath, 'utf-8');
        
        // Buscar href="..." y src="..."
        const linkRegex = /(?:href|src)=["']([^"']+)["']/g;
        let match;
        
        while ((match = linkRegex.exec(content)) !== null) {
          const link = match[1];
          
          // Ignorar enlaces externos y protocolos
          if (link.startsWith('http') || link.startsWith('//') || link.startsWith('mailto:') || link.startsWith('tel:') || link.startsWith('#') || link === '') {
            continue;
          }
          
          // Verificar si existe
          const cleanLink = link.split('?')[0].split('#')[0]; // Remover query y hash
          
          // Decodificar URL encoding si es necesario
          let decodedLink = cleanLink;
          try {
            decodedLink = decodeURIComponent(cleanLink);
          } catch (e) {}
          
          // Buscar en assets estáticos o routes
          const isValid = existingAssets.has(cleanLink) || 
                         existingAssets.has(decodedLink) ||
                         existingRoutes.has(cleanLink) || 
                         existingRoutes.has(cleanLink + '/') ||
                         existingRoutes.has(decodedLink) ||
                         existingRoutes.has(decodedLink + '/');
          
          if (!isValid) {
            brokenLinks.push({
              file: path.relative(distDir, fullPath),
              link: link,
              type: match[0].startsWith('href') ? 'href' : 'src'
            });
          }
        }
      }
    });
  }
  
  scanFiles(distDir);
  return brokenLinks;
}

console.log('🔍 Analizando Enlaces Rotos...\n');

indexFiles(distDir);
// Agregar ruta raíz si existe index.html
if (existingAssets.has('/index.html')) {
  existingRoutes.add('/');
}

console.log(`✓ Archivos indexados: ${existingFiles.size}`);
console.log(`✓ Assets accesibles: ${existingAssets.size}`);
console.log(`✓ Rutas encontradas: ${existingRoutes.size}`);
console.log(`✓ Rutas: ${Array.from(existingRoutes).slice(0, 10).join(', ')}${existingRoutes.size > 10 ? '...' : ''}\n`);

const broken = findBrokenLinks();

if (broken.length === 0) {
  console.log('✅ No hay enlaces rotos encontrados');
} else {
  console.log(`❌ Se encontraron ${broken.length} enlace(s) roto(s):\n`);
  
  const grouped = {};
  broken.forEach(item => {
    if (!grouped[item.link]) {
      grouped[item.link] = [];
    }
    grouped[item.link].push(item.file);
  });
  
  // Detectar problemas comunes
  const missingVideos = Object.keys(grouped).filter(link => link.startsWith('/videos/'));
  const missingImages = Object.keys(grouped).filter(link => link.startsWith('/images/'));
  const missingPages = Object.keys(grouped).filter(link => !link.startsWith('/videos/') && !link.startsWith('/images/') && !link.startsWith('/_astro/'));
  
  if (missingVideos.length > 0) {
    console.log('[VIDEOS FALTANTES]');
    missingVideos.forEach(link => {
      console.log(`  - ${link}`);
    });
    console.log();
  }
  
  if (missingImages.length > 0) {
    console.log('[IMÁGENES FALTANTES]');
    missingImages.forEach(link => {
      console.log(`  - ${link}`);
    });
    console.log();
  }
  
  if (missingPages.length > 0) {
    console.log('[PÁGINAS/ENLACES ROTOS]');
    missingPages.forEach(link => {
      const files = grouped[link];
      console.log(`  ${link}`);
      console.log(`    Usado en: ${files.slice(0, 3).join(', ')}${files.length > 3 ? ` (+${files.length - 3} más)` : ''}`);
    });
  }
}
