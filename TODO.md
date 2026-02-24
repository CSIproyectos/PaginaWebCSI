#  Próximos Pasos - Proyectos CSI

## Completado

- [x] Estructura base del proyecto Astro
- [x] Configuración TypeScript + Tailwind CSS
- [x] Componentes principales (Header, Footer, SEO)
- [x] Layout base optimizado para SEO
- [x] Páginas principales (Home, Servicios, Nosotros, Contacto, 404)
- [x] Configuración .htaccess para Hostinger
- [x] robots.txt y configuración SEO base
- [x] Sistema de caché y compresión

##  Pendientes Antes del Launch

### 1. Contenido y Assets (ALTA PRIORIDAD)

- [ ] **Exportar contenido de WordPress actual**
  - Textos de todas las páginas
  - Imágenes y assets multimedia
  - Mapeo de URLs antiguas → nuevas

- [ ] **Preparar imágenes optimizadas**
  - Logo en formatos: SVG, PNG, WebP
  - Logo blanco para footer
  - Favicon (ya tienes placeholder)
  - Imágenes hero sections
  - Fotos de equipo/oficinas
  - Imágenes de productos/servicios
  - **IMPORTANTE**: Optimizar todas con TinyPNG o Squoosh antes de subir

- [ ] **Actualizar datos de contacto reales**
  - Teléfono(s) de contacto
  - Email(s) corporativos
  - Dirección física completa
  - Horarios de atención
  - Redes sociales (URLs)

### 2. Integraciones (ALTA PRIORIDAD)

- [ ] **Google Analytics 4**
  - Crear propiedad en GA4
  - Obtener Measurement ID (G-XXXXXXXXXX)
  - Actualizar en: `src/layouts/Layout.astro` línea 40

- [ ] **HubSpot Forms**
  - Obtener Form GUID del formulario de contacto
  - Obtener Portal ID de HubSpot
  - Integrar en: `src/pages/contacto.astro` línea 180
  - Documentación: https://legacydocs.hubspot.com/docs/methods/forms/submit_form

- [ ] **Google Search Console**
  - Agregar y verificar dominio
  - Enviar sitemap después del launch

- [ ] **Blog HubSpot**
  - Configurar subdomain o embedding
  - Actualizar links en header/footer

### 3. SEO y Content (MEDIA PRIORIDAD)

- [ ] **Keyword Research**
  - Identificar keywords principales por página
  - Optimizar títulos y meta descriptions
  - Estructura H1-H6 correcta

- [ ] **Schema.org Markup**
  - LocalBusiness schema (si aplica)
  - Actualizar datos de Organization en SEO.astro
  - Service schema para cada servicio
  - FAQ schema (si tienes FAQs)

- [ ] **Content Creation**
  - Escribir contenido único y valioso
  - Evitar duplicate content de WordPress
  - Casos de éxito (testimonios)
  - Página de FAQ (opcional)

### 4. Funcionalidad Adicional (MEDIA PRIORIDAD)

- [ ] **Formularios**
  - Testing de envío de formularios
  - Validaciones del lado cliente robustas
  - Email notifications backend (PHP o servicio tercero)
  - Anti-spam protection (Google reCAPTCHA v3)

- [ ] **Catálogo de Equipos (FUTURO - FASE 2)**
  - Diseño de base de datos MySQL
  - API REST en PHP
  - Páginas de productos dinámicas
  - Sistema de búsqueda y filtros

### 5. Testing y QA (ALTA PRIORIDAD)

- [ ] **Performance Testing**
  - Lighthouse score 90+ en todas las páginas
  - Core Web Vitals optimizados
  - Verificar tiempos de carga
  - Testing en conexiones lentas (3G)

- [ ] **Cross-browser Testing**
  - Chrome, Firefox, Safari, Edge
  - Mobile: iOS Safari, Chrome Android
  - Verificar funcionalidad en todos

- [ ] **Security Testing**
  - Verificar headers de seguridad
  - SSL configurado correctamente
  - Formularios seguros
  - No exponer información sensible

- [ ] **SEO Technical Audit**
  - Meta tags completas
  - Open Graph correctos
  - Canonical URLs
  - Sitemap generado
  - robots.txt correcto
  - Redirects 301 configurados

### 6. Deployment (ALTA PRIORIDAD)

- [ ] **Backup WordPress actual**
  - Base de datos completa
  - Todos los archivos
  - Exportar URLs para redirects

- [ ] **Preparar Hostinger**
  - Verificar acceso FTP/cPanel
  - Verificar PHP version
  - MySQL database creada (para futuro)

- [ ] **Deploy Inicial**
  - Build del proyecto: `npm run build`
  - Subir archivos a Hostinger
  - Configurar .htaccess
  - Verificar SSL

- [ ] **Redirects 301**
  - Mapear TODAS las URLs antiguas
  - Implementar en .htaccess
  - Testing de cada redirect

### 7. Post-Launch (ALTA PRIORIDAD)

- [ ] **Monitoreo Inicial**
  - Google Search Console: verificar errores
  - Google Analytics: verificar tracking
  - Verificar formularios reciben mensajes
  - Testing de performance en producción

- [ ] **Link Building**
  - Backlinks existentes funcionan
  - Direct Directory submissions
  - Actualizar perfiles en redes sociales

##  Roadmap Futuro (FASE 2 - Post-Launch)

### Mes 1-2
- [ ] Implementar catálogo de equipos con base de datos
- [ ] Crear API REST en PHP para productos
- [ ] Sistema de búsqueda avanzada
- [ ] Filtros por categoría, marca, precio

### Mes 3-4
- [ ] Panel de administración (CMS interno)
- [ ] Sistema de cotizaciones online interactivo
- [ ] Live chat integration
- [ ] A/B testing para optimizar conversiones

### Mes 5-6
- [ ] Blog completo integrado (si salen de HubSpot)
- [ ] Sistema de reviews/testimonios
- [ ] Multi-idioma (inglés)
- [ ] PWA (Progressive Web App)

##  KPIs a Monitorear

### SEO
- Posicionamiento keywords principales (meta: Top 3 México)
- Tráfico orgánico mensual
- Backlinks de calidad
- Domain Authority (Moz)

### Performance
- Lighthouse scores (meta: 95+)
- Core Web Vitals: LCP, FID, CLS
- Tiempo de carga promedio
- Bounce rate

### Conversiones
- Formularios de contacto completados
- Solicitudes de cotización
- Llamadas telefónicas
- Tiempo promedio en sitio

##  Herramientas Recomendadas

### SEO
- **Google Search Console**: Monitoreo y errores
- **Google Analytics 4**: Tráfico y comportamiento
- **Ahrefs/Semrush**: Keyword research y competencia
- **Screaming Frog**: Auditoría técnica

### Performance
- **Lighthouse**: Auditorías automáticas
- **PageSpeed Insights**: Core Web Vitals
- **GTmetrix**: Performance detallado
- **WebPageTest**: Testing desde múltiples ubicaciones

### Development
- **VS Code**: Editor principal
- **GitHub**: Control de versiones
- **FileZilla**: FTP para deployment
- **Postman**: Testing de APIs (futuro)

##  Recursos de Aprendizaje

- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Web.dev Performance](https://web.dev/learn-web-vitals/)
- [Schema.org](https://schema.org/)

---

**Última actualización**: Febrero 2026  
**Estado del proyecto**:  Base completada, listo para contenido y testing
