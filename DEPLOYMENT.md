# Deployment Guide - Proyectos CSI

## Pre-deployment Checklist

Antes de hacer el deployment a Hostinger, asegúrate de:

- [ ] Actualizar todas las URLs de placeholder a las reales
- [ ] Configurar Google Analytics ID en Layout.astro
- [ ] Agregar imágenes reales en `/public/images/`
- [ ] Agregar logos (logo.svg, logo-white.svg, logo.png)
- [ ] Configurar datos de contacto reales (teléfono, email)
- [ ] Configurar integración con HubSpot Forms
- [ ] Revisar y actualizar meta descriptions para SEO
- [ ] Verificar que todas las páginas tengan contenido real
- [ ] Configurar redirects 301 en .htaccess (WordPress → nuevo sitio)
- [ ] Probar el sitio localmente

## Build Process

### 1. Build del proyecto

```bash
npm run build
```

Esto generará la carpeta `/dist` con todos los archivos estáticos listos para producción.

### 2. Verificar el build localmente

```bash
npm run preview
```

Abre http://localhost:4321 y verifica que todo funcione correctamente.

## Upload a Hostinger

### Opción A: Via cPanel File Manager

1. Accede a tu cuenta de Hostinger
2. Ve a **cPanel → File Manager**
3. Navega a `public_html/`
4. **IMPORTANTE**: Haz backup de tu sitio WordPress actual antes de eliminar
5. Elimina todos los archivos de WordPress (excepto si decides mantener el blog)
6. Sube TODO el contenido de la carpeta `/dist` a `public_html/`
7. Asegúrate de que `.htaccess` esté en el root `public_html/`

### Opción B: Via FTP (FileZilla)

1. Descarga FileZilla: https://filezilla-project.org/
2. Configura conexión FTP:
   - Host: `ftp.proyectoscsi.mx` (o IP del servidor)
   - Username: Tu usuario FTP de Hostinger
   - Password: Tu contraseña FTP
   - Port: 21
3. Conecta al servidor
4. Navega a `public_html/`
5. Backup del sitio actual
6. Elimina archivos anteriores
7. Arrastra TODO el contenido de `/dist` a `public_html/`

### Opción C: Via SSH (si tienes acceso)

```bash
# Comprimir la carpeta dist localmente
cd dist
tar -czf site.tar.gz *

# Subir via SCP
scp site.tar.gz usuario@proyectoscsi.mx:/home/usuario/public_html/

# Conectar via SSH
ssh usuario@proyectoscsi.mx

# Descomprimir en el servidor
cd public_html
tar -xzf site.tar.gz
rm site.tar.gz
```

## ⚙️ Configuración Post-Deployment

### 1. Verificar .htaccess

El archivo `.htaccess` debe estar en `public_html/` y debe incluir:
- Force HTTPS
- Redirects 301 de WordPress
- Cache headers
- Compression (gzip)
- Security headers

### 2. Configurar DNS (si es necesario)

Si cambias de dominio o hosting:
- A Record: Apunta a la IP del servidor Hostinger
- CNAME (www): Apunta a tu dominio principal
- Espera 24-48 horas para propagación DNS

### 3. Configurar SSL

Hostinger ofrece SSL gratuito:
1. Ve a cPanel → SSL/TLS Status
2. Activa AutoSSL para tu dominio
3. Verifica que HTTPS funcione correctamente

### 4. Configurar redirects WordPress → Nuevo sitio

En `.htaccess`, agrega todas las URLs antiguas de WordPress:

```apache
# Redirects WordPress → Astro
Redirect 301 /vieja-pagina https://proyectoscsi.mx/nueva-pagina
Redirect 301 /servicios-antiguos https://proyectoscsi.mx/servicios
```

Usa un plugin como "Redirection" en WordPress para exportar todas las URLs antes de migrar.

### 5. Submit sitemap a Google

1. Ve a Google Search Console: https://search.google.com/search-console
2. Agrega la propiedad `proyectoscsi.mx`
3. Verifica el dominio (DNS o HTML tag)
4. Envía sitemap: `https://proyectoscsi.mx/sitemap-index.xml`

### 6. Configurar Google Analytics

1. Crea una propiedad GA4: https://analytics.google.com
2. Copia el Measurement ID (G-XXXXXXXXXX)
3. Actualiza en `src/layouts/Layout.astro` línea 40

### 7. Configurar Cloudflare (Opcional pero recomendado)

Cloudflare gratis ofrece:
- CDN global
- DDoS protection
- SSL adicional
- Minification automática
- Brotli compression

Pasos:
1. Crea cuenta gratuita: https://dash.cloudflare.com/sign-up
2. Agrega tu dominio `proyectoscsi.mx`
3. Cambia los nameservers en Hostinger a los de Cloudflare
4. Activa Auto Minify (CSS, JS, HTML)
5. Activa Brotli compression
6. Configura Page Rules para cache

## 🔍 Verificación Post-Launch

### Testing Esencial

- [ ] Todas las páginas cargan correctamente
- [ ] HTTPS funciona sin advertencias
- [ ] Formularios envían correctamente
- [ ] Links internos funcionan
- [ ] Imágenes cargan correctamente
- [ ] Mobile responsive en todos los dispositivos
- [ ] Velocidad: Lighthouse score 90+ (https://pagespeed.web.dev/)
- [ ] SEO: Verificar meta tags con https://metatags.io/
- [ ] Schema.org válido: https://validator.schema.org/
- [ ] Sitemap accesible: https://proyectoscsi.mx/sitemap-index.xml
- [ ] Robots.txt accesible: https://proyectoscsi.mx/robots.txt

### Cross-browser Testing

- [ ] Chrome
- [ ] Firefox
- [ ] Safari (macOS, iOS)
- [ ] Edge
- [ ] Opera

### Device Testing

- [ ] Desktop (1920x1080, 1366x768)
- [ ] Laptop (1440x900)
- [ ] Tablet (iPad, Android tablets)
- [ ] Mobile (iPhone, Android)

## 📈 Monitoreo Post-Launch

### Primeras 48 horas
- Monitorear Google Search Console para errores 404
- Verificar que Google empiece a indexar nuevas páginas
- Revisar analytics para tráfico anormal
- Verificar que formularios reciban mensajes

### Primera semana
- Revisar performance metrics (Core Web Vitals)
- Corregir cualquier error 404 con redirects
- Monitorear posicionamiento de keywords principales
- Revisar bounce rate y tiempo en sitio

### Primer mes
- Analizar keywords que mejoran/bajan
- Link building strategy
- Crear contenido nuevo para el blog (HubSpot)
- Optimizar páginas con bajo rendimiento

## 🔄 Proceso de Actualización Continua

Para actualizar el sitio después del launch:

1. Hacer cambios localmente
2. Probar: `npm run dev`
3. Build: `npm run build`
4. Verificar: `npm run preview`
5. Subir solo los archivos modificados via FTP/cPanel

**Tip**: Usa Git + GitHub Actions para automatizar el deployment.

## Troubleshooting

### Problema: Páginas muestran 404 después del deployment

**Solución**: Verifica que `.htaccess` esté en el root correcto y que mod_rewrite esté habilitado.

### Problema: CSS/JS no cargan

**Solución**: Verifica las rutas. Astro genera rutas relativas. Asegúrate de que el `base` en `astro.config.mjs` esté correcto.

### Problema: Sitio muy lento

**Solución**: 
- Activa compresión Gzip en `.htaccess`
- Optimiza imágenes (usa WebP)
- Activa Cloudflare CDN
- Verifica cache headers

### Problema: Imágenes no cargan

**Solución**: Verifica que todas las imágenes estén en `/public/images/` y que las rutas sean correctas (`/images/foto.jpg`).

## Soporte

Si necesitas ayuda durante el deployment:
- Hostinger Support: https://www.hostinger.mx/soporte
- Documentación Astro: https://docs.astro.build/
- Verificar logs de error en cPanel → Error Log

---

**Fecha última actualización**: Febrero 2026
